# Interruption Recovery Notes

**Interruption time**: 2026-09-05 09:35 (local network disconnected)
**Last commit**: `5f3d06d` — pushed to origin; the working tree was clean, with no unsaved work.

## Current Site-Wide Status

All four regions have data, `tools/check_all.py` reports no issues, and browser tests passed for all 5 live pages × 2 viewports.

| Region | Subregions | Attractions | Photo spots | Images |
| --- | --- | --- | --- | --- |
| socal | 6 | 47 | 141 | 135 |
| dc | 7 | 49 | 159 | 146 |
| nyc | 6 | 47 | 159 | 140 |
| yellowstone | 7 | 60 | 172 | 175 |

Live URL: https://andyuneducated.github.io/wander-usa-2026-guides/

## Three Tasks After Resuming

### 1. Accuracy review: 3 files were still unfinished

The checklists are in `tools/review/claims-<region>.md`. **Do not redo completed reviews.**

| Fragment | Status |
| --- | --- |
| all of `socal/data.js` | ✅ Complete |
| all of `dc/parts/*.js` | ✅ Complete |
| `nyc/parts/01-salem-north-shore.js` | ✅ Complete |
| `nyc/parts/02-boston-cambridge.js` | ✅ Complete |
| `nyc/parts/03-hudson-valley.js` | ✅ Complete |
| `nyc/parts/04-manhattan-midtown.js` | ✅ Complete |
| `yellowstone/parts/03-mammoth-lamar.js` | ✅ Complete |
| `yellowstone/parts/05-canyon-hayden.js` | ✅ Complete |
| `yellowstone/parts/06-geyser-basins.js` | ✅ Complete |
| `yellowstone/parts/08-grand-teton.js` | ✅ Complete |
| `yellowstone/parts/01-bitterroot.js` | ✅ Complete |
| `yellowstone/parts/02-butte-paradise.js` | ✅ Complete |
| `yellowstone/parts/04-beartooth-chief-joseph.js` | ✅ Complete |
| `nyc/parts/05-manhattan-downtown.js` | ✅ Complete |
| `nyc/parts/06-brooklyn.js` | ✅ Complete |

**Accuracy reviews for all 15 fragments are complete** (2026-09-06). Every claim in all four regions was checked against official sources. The only remaining items are details that the relevant authorities have not published. The data already handles these by clearly marking them as unconfirmed and providing a phone number, so no further researcher work is needed.

The review left the following matters that can only be resolved in person or by phone, ordered by impact:

1. **Green-Wood Cemetery has never published its October closing time online.** Sunset is 18:11–18:14, exactly between the two possible closing times: the former 19:00 closing permits sunset photography, while the customary 18:00 closing (with mandatory clearing 10 minutes early, at 17:50) means being asked to leave before sunset. Phone: (718) 768-7300. The alternative is to use Prospect Park for sunset (open until 1 a.m.).
2. **Old Faithful Inn closing date:** Xanterra says 10/12, while NPS says 10/18; both pages are current. This affects only the backup window in late October, not 9/22–9/29. Phone: 307-344-7311.
3. **Clay Butte Lookout:** there is no way to verify whether it opened in 2026. The assessment is based on other facilities in the same forest district ending their season in mid-September. Phone: (307) 527-6921; note that this office is closed on Wednesdays.
4. **Blacktail Plateau Drive and Upper Terrace Drive:** no closing dates are published; only an upper bound of “no later than 11/1” can be inferred. Call 307-344-2117 or ask at Albright Visitor Center.
5. Berkeley Pit has never published an official admission price. Third-party sources report either $3 or $7; bring $10 in cash.

The review of the four Yellowstone fragments left two unresolved issues if further investigation is desired after resuming:
Xanterra lists the Old Faithful Inn closing date as 10/12, while NPS lists 10/18, and both pages are current
(this affects only the backup window in late October, not the actual dates of 9/22–9/29);
Blacktail Plateau Drive and Upper Terrace Drive have no published dates, so only an upper bound of “no later than 11/1” can be inferred.

**Two hard constraints when assigning researchers**, both added after prior failures:

- **Only one researcher may work on each fragment.** This project has already lost work because two researchers wrote the same file concurrently: two researchers were assigned to `dc/parts/02-philadelphia-parkway.js`, and the later researcher’s complete version overwrote the Fairmount Water Works opening hours found by the first researcher. They had to be restored manually afterward. `yellowstone/parts/06-geyser-basins.js` was also overwritten once and restored from git.
- **Require researchers to write as they investigate, rather than saving everything at the end.** The first review passes for New York and Yellowstone both timed out. The New York researcher wrote one file at a time, preserving the work in 4 files; the Yellowstone researcher handled 178 claims in one batch and left nothing behind. **The Yellowstone checklist must be split across assignments**; do not give the whole checklist to one researcher again. The best researcher committed one attraction at a time, producing 8 commits with one independent conclusion each, so an interruption at any point would not waste earlier work.

- **Do not commit with `git add -A` while researchers are writing files concurrently.** I used it to commit image-download results and accidentally included a researcher’s half-finished `06-brooklyn.js` (it later passed syntax validation and caused no damage, but only by luck). Commit explicit paths. Also note that `tools/localize_images.py` does not interact with git; its only subprocess is `assemble.py`, so it cannot be responsible for a whole-tree commit.

### 2. 6 remote images remain to be localized

This is not a data error. Wikimedia is rate-limiting this machine’s IP (HTTP 429). Access works from a different IP, so visitors can see the images online. All 590 existing local images passed validation.

```
python3 tools/verify_images.py --local-only   # Confirm local images are intact
python3 tools/localize_images.py --region dc          # 2 remaining
python3 tools/localize_images.py --region yellowstone # 4 remaining
```

The rate limit is persistent. I ultimately ran a loop that waited 45 minutes before each retry (now stopped). To restart it, use `tools/run_detached.py`; on macOS, `nohup` does not fully detach it from the terminal, so a directly backgrounded process will be killed.

### 3. Full test suite

```
python3 tools/check_all.py                 # Data integrity
python3 tools/test_pages.py                # Local browser tests, two viewports
python3 tools/test_pages.py --base https://andyuneducated.github.io/wander-usa-2026-guides/
```

## One Unresolved Task

Deleting the two old GitHub repositories (`wander-usa-2026` and `socal-roadtrip-report`) requires the `delete_repo` scope, and I cannot run the interactive command on your behalf. To delete them:

```
gh auth refresh -s delete_repo
gh repo delete AndyUneducated/wander-usa-2026 --yes
gh repo delete AndyUneducated/socal-roadtrip-report --yes
```

The complete socal commit history has already been merged into this repository with `git subtree`, so deleting the old repositories will not lose any work.

## Tool Quick Reference

| Tool | Purpose |
| --- | --- |
| `assemble.py --region <r>` | Combines `parts/*.js` into `data.js`, sorts north to south by latitude, and renumbers entries; skips skeleton fragments that do not yet contain attractions |
| `check_all.py` | Site-wide integrity checks: required fields, coordinates, images, ordering, and links |
| `test_pages.py` | Playwright browser tests; forces all collapsed sections open and changes images to eager loading, allowing it to detect broken images hidden inside collapsed sections |
| `verify_images.py` | Queries the Commons API directly and checks local file signatures, catching filename spelling errors that browser tests cannot detect |
| `snapshot_parts.py --save/--check` | Fragment snapshots and rollback detection to prevent concurrent overwrites |
| `extract_claims.py` | Extracts high-risk claims from the data to generate review checklists |
| `reorder_north_south.py --region <r>` | Re-sorts entries by latitude |
| `run_detached.py` | Starts a genuinely detached background task (for macOS) |
