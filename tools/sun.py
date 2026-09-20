#!/usr/bin/env python3
"""Compute sunrise/sunset times and azimuths with the NOAA solar-position algorithm.

Used to generate the sunrise/sunset tables in each region's appendix. Stdlib only.
Usage: python3 tools/sun.py --tz -4 2026-09-25 2026-10-22 -- "Washington DC" 38.8895 -77.0353
"""
from __future__ import annotations

import argparse
import math
from datetime import date

RAD = math.pi / 180.0


def _julian_day(d: date) -> float:
    y, m, day = d.year, d.month, d.day
    if m <= 2:
        y -= 1
        m += 12
    a = y // 100
    b = 2 - a + a // 4
    return (math.floor(365.25 * (y + 4716)) + math.floor(30.6001 * (m + 1))
            + day + b - 1524.5)


def _solar_geom(jc: float):
    """Return (solar declination deg, equation of time minutes). jc is Julian centuries."""
    gmls = (280.46646 + jc * (36000.76983 + jc * 0.0003032)) % 360.0
    gmas = 357.52911 + jc * (35999.05029 - 0.0001537 * jc)
    eeo = 0.016708634 - jc * (0.000042037 + 0.0000001267 * jc)

    sin_m = math.sin(gmas * RAD)
    ctr = (sin_m * (1.914602 - jc * (0.004817 + 0.000014 * jc))
           + math.sin(2 * gmas * RAD) * (0.019993 - 0.000101 * jc)
           + math.sin(3 * gmas * RAD) * 0.000289)
    true_long = gmls + ctr
    app_long = true_long - 0.00569 - 0.00478 * math.sin((125.04 - 1934.136 * jc) * RAD)

    seconds = 21.448 - jc * (46.8150 + jc * (0.00059 - jc * 0.001813))
    oblique = 23.0 + (26.0 + seconds / 60.0) / 60.0
    oblique_corr = oblique + 0.00256 * math.cos((125.04 - 1934.136 * jc) * RAD)

    decl = math.asin(math.sin(oblique_corr * RAD) * math.sin(app_long * RAD)) / RAD

    vary = math.tan(oblique_corr / 2 * RAD) ** 2
    eq_time = 4 * (vary * math.sin(2 * gmls * RAD)
                   - 2 * eeo * sin_m
                   + 4 * eeo * vary * sin_m * math.cos(2 * gmls * RAD)
                   - 0.5 * vary * vary * math.sin(4 * gmls * RAD)
                   - 1.25 * eeo * eeo * math.sin(2 * gmas * RAD)) / RAD
    return decl, eq_time


def _hour_angle(lat: float, decl: float, zenith: float = 90.833):
    """Hour angle at sunrise (degrees). None means polar day/night."""
    cos_h = (math.cos(zenith * RAD) / (math.cos(lat * RAD) * math.cos(decl * RAD))
             - math.tan(lat * RAD) * math.tan(decl * RAD))
    if cos_h > 1 or cos_h < -1:
        return None
    return math.acos(cos_h) / RAD


def _azimuth(lat: float, decl: float, hour_angle_deg: float) -> float:
    """Solar azimuth for a given hour angle (degrees, clockwise from north)."""
    ha = hour_angle_deg * RAD
    lat_r, decl_r = lat * RAD, decl * RAD
    zenith = math.acos(math.sin(lat_r) * math.sin(decl_r)
                       + math.cos(lat_r) * math.cos(decl_r) * math.cos(ha))
    denom = math.cos(lat_r) * math.sin(zenith)
    if abs(denom) < 1e-9:
        return 0.0
    val = (math.sin(lat_r) * math.cos(zenith) - math.sin(decl_r)) / denom
    val = max(-1.0, min(1.0, val))
    az = math.acos(val) / RAD
    # negative hour angle is morning (east); positive is afternoon (west)
    return (180.0 - az) % 360.0 if hour_angle_deg < 0 else (180.0 + az) % 360.0


def sun_times(d: date, lat: float, lon: float, tz: float):
    """Return a dict: local sunrise/sunset time and azimuth, plus solar noon and day length."""
    jd = _julian_day(d)
    jc = (jd - 2451545.0) / 36525.0
    decl, eq_time = _solar_geom(jc)

    # solar noon (local minutes)
    noon_min = 720 - 4 * lon - eq_time + tz * 60
    ha = _hour_angle(lat, decl, 90.833)
    if ha is None:
        return None

    rise_min = noon_min - ha * 4
    set_min = noon_min + ha * 4

    def hhmm(minutes: float) -> str:
        minutes = minutes % 1440
        h, m = divmod(int(round(minutes)), 60)
        return f'{h:02d}:{m:02d}'

    return {
        'sunrise': hhmm(rise_min),
        'sunset': hhmm(set_min),
        'noon': hhmm(noon_min),
        'rise_az': round(_azimuth(lat, decl, -ha), 1),
        'set_az': round(_azimuth(lat, decl, ha), 1),
        'decl': round(decl, 2),
        'daylen': hhmm(set_min - rise_min),
    }


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--tz', type=float, required=True, help='UTC offset in hours, e.g. -4 for EDT')
    ap.add_argument('dates', nargs='+', help='YYYY-MM-DD')
    ap.add_argument('--place', action='append', nargs=3,
                    metavar=('NAME', 'LAT', 'LON'), required=True)
    args = ap.parse_args()

    days = [date.fromisoformat(s) for s in args.dates]
    for name, lat_s, lon_s in args.place:
        lat, lon = float(lat_s), float(lon_s)
        print(f'\n=== {name}  ({lat}, {lon})  UTC{args.tz:+g}')
        for d in days:
            r = sun_times(d, lat, lon, args.tz)
            if not r:
                print(f'  {d}  polar day or night')
                continue
            print(f'  {d}  sunrise {r["sunrise"]} (az {r["rise_az"]}°)   '
                  f'sunset {r["sunset"]} (az {r["set_az"]}°)   '
                  f'noon {r["noon"]}   day length {r["daylen"]}')


if __name__ == '__main__':
    main()
