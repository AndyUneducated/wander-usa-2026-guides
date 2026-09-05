#!/usr/bin/env python3
import math

def bearing(a, b):
    la1, lo1, la2, lo2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    dl = lo2 - lo1
    x = math.sin(dl) * math.cos(la2)
    y = math.cos(la1) * math.sin(la2) - math.sin(la1) * math.cos(la2) * math.cos(dl)
    return (math.degrees(math.atan2(x, y))) % 360

def dist_km(a, b):
    R = 6371.0
    la1, lo1, la2, lo2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = math.sin((la2-la1)/2)**2 + math.cos(la1)*math.cos(la2)*math.sin((lo2-lo1)/2)**2
    return 2*R*math.asin(math.sqrt(h))

PEAK = (45.26299, -110.70716)   # Emigrant Peak, OSM node 357934746, ele 3327 m = 10,915 ft
PEAK_FT = 10921

VPS = {
    "Carter's Bridge FAS (E River Rd 起点)": (45.61170, -110.57170),
    "Mallard's Rest FAS (US-89 mp42)": (45.48482, -110.62163),
    "Loch Leven FAS (East River Rd)": (45.45721, -110.62422),
    "Dan Bailey FAS (US-89)": (45.42045, -110.63664),
    "Emigrant town (US-89)": (45.36855, -110.73404),
    "Chico Hot Springs (est)": (45.33950, -110.70850),
    "Dailey Lake": (45.26245, -110.81567),
    "Point of Rocks FAS (US-89 mp21)": (45.25476, -110.86940),
    "Pine Creek Campground": (45.49854, -110.52330),
    "Livingston Depot": (45.66202, -110.56230),
}

SUNRISE_AZ = 89.5   # 2026-09-23/24 (89.4 / 90.0)
SUNSET_AZ = 270.0   # 2026-09-23/24 (269.7 / 270.3)

print(f"Emigrant Peak {PEAK} = {PEAK_FT} ft\n")
print(f"{'viewpoint':<40} {'dist km':>8} {'bearing':>8} {'elev ang':>9} "
      f"{'|sun-sight| AM':>15} {'|sun-sight| PM':>15}")
for k, v in sorted(VPS.items(), key=lambda x: -x[1][0]):
    b = bearing(v, PEAK)
    d = dist_km(v, PEAK)
    # elevation angle of the summit from a ~4,800 ft valley floor
    rise_m = (PEAK_FT - 4800) * 0.3048
    ang = math.degrees(math.atan2(rise_m, d * 1000))
    dam = abs((SUNRISE_AZ - b + 180) % 360 - 180)
    dpm = abs((SUNSET_AZ - b + 180) % 360 - 180)
    print(f"{k:<40} {d:8.1f} {b:8.1f} {ang:8.1f}° {dam:14.0f}° {dpm:14.0f}°")

print("\n--- valley-floor terrain shading estimate near Emigrant ---")
# Absaroka front east of US-89 near Emigrant: ridge ~9,500 ft at ~8 km
for (ridge_ft, km) in [(9000, 7), (9500, 8), (10000, 9)]:
    rise = (ridge_ft - 4900) * 0.3048
    ang = math.degrees(math.atan2(rise, km*1000))
    # sun altitude rate near sunrise at lat 45.4, equinox
    rate = 15.0 * math.cos(math.radians(45.4))
    print(f"  E ridge {ridge_ft} ft @ {km} km -> {ang:.1f}° -> valley sunlit "
          f"{ang/rate*60:.0f} min after tabulated sunrise")
print()
for (ridge_ft, km) in [(8500, 16), (9000, 18), (9500, 20)]:
    rise = (ridge_ft - 4900) * 0.3048
    ang = math.degrees(math.atan2(rise, km*1000))
    rate = 15.0 * math.cos(math.radians(45.4))
    print(f"  W (Gallatin) ridge {ridge_ft} ft @ {km} km -> {ang:.1f}° -> valley shaded "
          f"{ang/rate*60:.0f} min before tabulated sunset")

print("\n--- Uptown Butte street grid / Paradise Valley axis ---")
# Paradise Valley axis: Gardiner -> Livingston along the Yellowstone
print("  valley axis Gardiner->Livingston:",
      f"{bearing((45.0300,-110.7050),(45.6620,-110.5610)):.0f}deg,",
      f"{dist_km((45.0300,-110.7050),(45.6620,-110.5610)):.0f} km")
print("  valley axis Emigrant->Livingston:",
      f"{bearing((45.36855,-110.73404),(45.6620,-110.5610)):.0f}deg")
print("  Butte Uptown: W Broadway runs E-W; N-S streets (Main/Montana) run N-S.")
print("  Berkeley Pit viewing stand -> pit centre:",
      f"{bearing((46.01172,-112.51783),(46.0230,-112.5100)):.0f}deg")
print("  Anselmo Mine from W Granite/Excelsior:",
      f"{bearing((46.0142,-112.5388),(46.01790,-112.54584)):.0f}deg")
print("  Our Lady of the Rockies from Uptown Butte:",
      f"{bearing((46.0136,-112.5364),(46.00039,-112.44637)):.0f}deg,",
      f"{dist_km((46.0136,-112.5364),(46.00039,-112.44637)):.1f} km")
print("  Our Lady from Berkeley Pit stand:",
      f"{bearing((46.01172,-112.51783),(46.00039,-112.44637)):.0f}deg,",
      f"{dist_km((46.01172,-112.51783),(46.00039,-112.44637)):.1f} km")
