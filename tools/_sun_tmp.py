#!/usr/bin/env python3
"""NOAA solar position: sunrise/sunset/civil twilight + azimuths for given lat/lon/date."""
import math, datetime

def jd(y, m, d):
    if m <= 2:
        y -= 1; m += 12
    a = y // 100
    b = 2 - a + a // 4
    return math.floor(365.25 * (y + 4716)) + math.floor(30.6001 * (m + 1)) + d + b - 1524.5

def solar(jday, frac):
    # frac = fraction of day (UT)
    jc = (jday + frac - 2451545.0) / 36525.0
    gml = (280.46646 + jc * (36000.76983 + jc * 0.0003032)) % 360
    gma = 357.52911 + jc * (35999.05029 - 0.0001537 * jc)
    ecc = 0.016708634 - jc * (0.000042037 + 0.0000001267 * jc)
    ctr = (math.sin(math.radians(gma)) * (1.914602 - jc * (0.004817 + 0.000014 * jc))
           + math.sin(math.radians(2 * gma)) * (0.019993 - 0.000101 * jc)
           + math.sin(math.radians(3 * gma)) * 0.000289)
    tl = gml + ctr
    om = 125.04 - 1934.136 * jc
    al = tl - 0.00569 - 0.00478 * math.sin(math.radians(om))
    seps = 23 + (26 + ((21.448 - jc * (46.815 + jc * (0.00059 - jc * 0.001813)))) / 60) / 60
    oc = seps + 0.00256 * math.cos(math.radians(om))
    decl = math.degrees(math.asin(math.sin(math.radians(oc)) * math.sin(math.radians(al))))
    vy = math.tan(math.radians(oc / 2)) ** 2
    eqt = 4 * math.degrees(vy * math.sin(2 * math.radians(gml))
          - 2 * ecc * math.sin(math.radians(gma))
          + 4 * ecc * vy * math.sin(math.radians(gma)) * math.cos(2 * math.radians(gml))
          - 0.5 * vy * vy * math.sin(4 * math.radians(gml))
          - 1.25 * ecc * ecc * math.sin(2 * math.radians(gma)))
    return decl, eqt

def event(lat, lon, y, m, d, zenith, rising):
    J = jd(y, m, d)
    frac = 0.5  # start guess: local noon UT approx
    for _ in range(6):
        decl, eqt = solar(J, frac)
        la, de = math.radians(lat), math.radians(decl)
        cosH = (math.cos(math.radians(zenith)) - math.sin(la) * math.sin(de)) / (math.cos(la) * math.cos(de))
        if abs(cosH) > 1:
            return None
        H = math.degrees(math.acos(cosH))
        if rising:
            H = -H
        # solar noon in minutes UT
        noon = 720 - 4 * lon - eqt
        t = noon + 4 * H  # minutes UT
        frac = t / 1440.0
    return t

def azimuth(lat, lon, y, m, d, minutes_ut):
    J = jd(y, m, d)
    decl, eqt = solar(J, minutes_ut / 1440.0)
    tst = (minutes_ut + eqt + 4 * lon) % 1440
    ha = tst / 4 - 180
    la, de, h = math.radians(lat), math.radians(decl), math.radians(ha)
    zen = math.acos(math.sin(la) * math.sin(de) + math.cos(la) * math.cos(de) * math.cos(h))
    denom = math.cos(la) * math.sin(zen)
    if abs(denom) < 1e-9:
        return None, 90 - math.degrees(zen)
    val = (math.sin(la) * math.cos(zen) - math.sin(de)) / denom
    val = max(-1, min(1, val))
    az = math.degrees(math.acos(val))
    if ha > 0:
        az = 360 - (180 - az) if False else (180 + (180 - az)) % 360
        az = (180 + (180 - math.degrees(math.acos(val)))) % 360
    else:
        az = 180 - math.degrees(math.acos(val))
        az = (180 - math.degrees(math.acos(val))) % 360
    return az % 360, 90 - math.degrees(zen)

def fmt(minutes_ut, tzoffset):
    if minutes_ut is None:
        return "n/a"
    t = (minutes_ut + tzoffset * 60) % 1440
    return f"{int(t)//60:02d}:{int(round(t))%60:02d}"

def report(name, lat, lon, dates, tz=-6):
    print(f"\n=== {name}  ({lat}, {lon})  UTC{tz:+d} ===")
    for (y, m, d) in dates:
        sr = event(lat, lon, y, m, d, 90.833, True)
        ss = event(lat, lon, y, m, d, 90.833, False)
        cd = event(lat, lon, y, m, d, 96.0, True)
        ce = event(lat, lon, y, m, d, 96.0, False)
        # golden hour end: sun at 6 deg
        g1 = event(lat, lon, y, m, d, 84.0, True)
        g2 = event(lat, lon, y, m, d, 84.0, False)
        azr, _ = azimuth(lat, lon, y, m, d, sr)
        azs, _ = azimuth(lat, lon, y, m, d, ss)
        noon = event(lat, lon, y, m, d, 90.833, True)
        # solar noon
        decl, eqt = solar(jd(y, m, d), 0.5)
        sn = 720 - 4 * lon - eqt
        _, alt_noon = azimuth(lat, lon, y, m, d, sn)
        print(f"{y}-{m:02d}-{d:02d}: civil dawn {fmt(cd,tz)}  sunrise {fmt(sr,tz)} az {azr:.1f}°  "
              f"sun+6° {fmt(g1,tz)}  noon {fmt(sn,tz)} alt {alt_noon:.1f}°  "
              f"sun+6° {fmt(g2,tz)}  sunset {fmt(ss,tz)} az {azs:.1f}°  civil dusk {fmt(ce,tz)}")

if __name__ == "__main__":
    ds = [(2026, 9, 23), (2026, 9, 24), (2026, 9, 22), (2026, 9, 25)]
    report("Butte Uptown", 46.0130, -112.5347, ds)
    report("Berkeley Pit viewing stand", 46.0175, -112.5137, ds)
    report("Emigrant / Paradise Valley", 45.3900, -110.7200, ds)
    report("Livingston", 45.6620, -110.5610, ds)
    report("Gardiner", 45.0300, -110.7050, ds)
    report("Pine Creek Falls", 45.4900, -110.5300, ds)
