# Attraction Data Format Specification

Research subagents must follow this document exactly when producing JS fragment files. `tools/assemble.py` combines these fragments into each region’s `data.js`. Even a small formatting error can leave the entire page blank, so do not improvise field names or nesting levels.

## Purpose of This Guide (Traditional Tourism Emphasis Since 2026-09-13)

**This is a must-see attraction guide for ordinary visitors; photography is secondary.** Early versions prioritized photography, which omitted essential landmarks such as MoMA, the Empire State Building, the Statue of Liberty, and the National Air and Space Museum while devoting space to locations valuable only for photography. The current standards are:

- **To decide whether to include a place, first ask, “Would an ordinary visitor regret missing this place when visiting the city?”** Then ask whether it photographs well. The first question is the primary criterion; the second only affects `score` and the space devoted to photo spots.
- Every attraction must have two ratings: `must` (visitor value, primary) and `score` (photographic value, secondary). The card header displays them as two parallel rows of stars, with `must` above `score`, using neutral colors. Both ratings must therefore be honest; one cannot compensate for the other.
- Pure photography locations (valuable for framing but with little tourism significance) **may remain**, but their `must` rating must honestly be low. Do not inflate it merely to make the location prominent.
- Conversely, **a must-see place must never be omitted or described briefly just because it photographs poorly** (typical examples include museum interiors and venues that prohibit photography). For these entries, devote space to `tour` and `access`, and honestly state “not suitable for photography” in the photography section.

## Required Deliverable

Produce one file at the path specified in the assignment, such as `dc/parts/03-national-mall.js`. Its contents must be **one JS object literal** describing a **subregion** and all its attractions. The file must pass `node --check`.

Wrap the top level in `module.exports = { ... };` (the assembly script loads it with Node’s `require`).

## Top-Level Structure

```js
module.exports = {
  id: 'national-mall',            // Unique across the site; lowercase with hyphens; used for DOM ids and anchors
  name: 'Washington DC · National Mall Memorials',   // Display title shown as the section heading
  navName: 'National Mall',       // Short navigation label (optional; defaults to name)
  color: '#4da3ff',               // Map-pin color for this area (specified in the assignment)
  lead: 'A paragraph giving the overall assessment of this subregion…',   // May contain <strong>; displayed in the appendix
  callouts: [                     // Advance notices grouped in the appendix; 0–5 items
    {
      type: 'warn',               // warn red / info blue / good green / tip orange
      title: 'Short title, no more than 30 characters',
      html: '<p>Body text, which must be complete HTML paragraphs. Multiple &lt;p&gt; or &lt;ul&gt; elements are allowed.</p>'
    }
  ],
  spots: [ /* See below */ ]
};
```

## Individual Attraction Structure

Copy the field order exactly to simplify diffs. **Every field except `gone` is required.**

```js
{
  id: 'lincoln-memorial',         // Unique across the site; lowercase with hyphens
  n: 1,                           // Initially use any sequence such as 1,2,3…; the assembly script renumbers north to south by latitude
  gone: 'Currently inaccessible', // [Optional] Add only when confirmed inaccessible or no longer existing; makes the card red
  name: 'Lincoln Memorial',       // Localized name; use the original English name if no established localized name exists
  en: 'Lincoln Memorial',         // Original English name; title displays as “English Localized”
  must: 5,                        // [Primary rating] Visitor value, 0–5; .5 increments allowed. See the rating criteria below
  score: 5,                       // [Secondary rating] Photographic value, 0–5; .5 increments allowed
  tldr: 'One-sentence conclusion, no more than 60 characters. This is the only content visible when collapsed and must support a decision without the rest of the card.',
  tags: [                         // 3–5 tags
    { t: 'Completely free', c: 'free' },  // c: free green / paid orange / risk red
    { t: 'Timed ticket required', c: 'risk' }
  ],
  highlights: [                   // Core highlights; see length rules below
    'One paragraph per item; may contain <strong>. Give specific facts and numbers, not empty phrases such as “very spectacular.”'
  ],
  tour: [                         // [Required] Visitor guidance, 3–6 items; ordinary visitor perspective, not photography
    'What order to follow after entering and which specific galleries, exhibits, or floors are unmissable',
    'Which sections can be skipped and why, including where the saved time is better spent',
    'Practical pitfalls involving lines, security, storage, elevators, and the least crowded times',
    'Locations of food and restrooms (required for large venues because these constrain a full-day visit)'
  ],
  photo: 'Landscape <strong>4/5</strong>, architecture <strong>5/5</strong>, portraits <strong>3/5</strong>. Give category ratings and one sentence explaining additions or deductions.',
  shots: [                        // Specific photo spots, 1–4
    {
      name: 'Photo-spot name that clearly states where to stand',
      park: [38.88927, -77.05014],   // [Optional] Latitude and longitude of parking/drop-off point
      view: [38.88940, -77.05000],   // Latitude and longitude of shooting position; a map pin is drawn only when view exists
      desc: 'Best period (give specific times) + lens focal length + composition guidance + equipment notes. It must be directly actionable.'
    }
  ],
  access: {
    visit: '<strong>Recommended visit duration</strong>, required. Give a range and allocation, such as “2–3 hours; 75 minutes for highlights only”',
    book: 'Whether reservations are required, the platform, and ticket-release rules. If not required, write “No reservation required”',
    ticket: 'Admission price. If free, write <strong>Free</strong>. Clearly list adult/senior/student/child tiers and free-admission conditions',
    hours: 'Opening hours, including weekly closure days. This is a key verification item and must quote the official wording',
    parking: 'Parking options and costs, or public-transit alternatives',
    walk: 'Distance and walking time from parking/station to the photo spot'
  },
  notes: [                        // Important notes, 3–8 items
    'Tripod policies, security screening, safety, seasonal restrictions, and common pitfalls. Explain one matter clearly per sentence.'
  ],
  images: [                       // 2–3 images; **must be direct Wikimedia Commons links**
    { url: 'https://upload.wikimedia.org/wikipedia/commons/x/xx/Foo.jpg',
      cap: 'Caption · Author / License' }
  ]
}
```

## `must` (Visitor Value) Rating Criteria

**This is the primary rating displayed in the page’s card header and must be consistent across the site.** Evaluate it for an ordinary first-time visitor to the region, not a photography enthusiast.

Hovering over the rating row on the page (or tapping on a touchscreen) displays the tier label. The tier is derived directly from the score, so the meanings below must match the wording shown on the page:

| Score | Page tier | Meaning |
| --- | --- | --- |
| **5** | Worth a dedicated trip | World-class; visiting the region without going here would mean missing its essence. Others would ask, “How did you not go?” Examples: Statue of Liberty, Old Faithful, The Met, National Air and Space Museum |
| **4** | Strongly recommended | A landmark on mainstream must-see lists; visit if time permits. Examples: Grand Central, Boston Public Library, Arlington National Cemetery |
| **3** | Recommended if nearby | Worth visiting, but primarily for those with relevant interests. Usually a strongly themed venue or neighborhood requiring a specific interest |
| **2** | Visit if time allows | Worth seeing when nearby, but not worth a dedicated trip. Often streetscapes, minor monuments, or pure photography locations |
| **1** | Can be skipped | Relevant only to specific audiences, such as film locations or niche subjects |
| **0.5–1** | Not recommended | An inaccessible or nonexistent entry (also set `gone`) |

.5 increments are allowed. **Do not give the entire list ratings of 4–5**—the scores must support ranking or they serve no purpose. `must` and `score` often differ; this is normal and is exactly why both fields exist. A museum interior can be `must: 5, score: 2`, while a beautiful roadside overlook can be `must: 1.5, score: 4.5`.

## Visit Duration, Admission, and Opening Hours: Live Online Verification Required

These three items are the focus of this review. **Always use the official channel’s current page on the day of research**; do not rely on memory:

- **`access.visit` (recommended visit duration):** provide a range and explain its allocation. Example: `2.5–4 hours; about 60 minutes for only the Apollo 11 and Wright Flyer galleries`. Evidence priority: official FAQ/recommendation > official tour duration > reasonable inference from venue size and gallery count (label an inference as “estimated from gallery size”).
- **`access.ticket`:** use the official admission page, clearly state all tiers and free-admission conditions, and **include the verification date**.
- **`access.hours`:** use the official opening-hours page and state weekly closures, seasonal adjustments, and holiday exceptions. **Include the official wording** (for example, “Open daily 10:00–17:30, closed December 25”).
- When official pages contradict each other, **include both statements and identify each source**. Do not choose one for the reader. This is established project policy.
- If the information cannot be found, write “<strong>Could not be confirmed through official channels</strong>” and provide the official phone number.

## Writing `highlights` / `tour`: Each Item Must Begin With a Bold Conclusion (Important)

**Page rendering directly depends on this rule; it is not a stylistic preference.** When a card is expanded, each `highlights` and `tour` item initially displays only its opening bold segment. The full details are nested inside and open on click. This gives readers a scannable list first, letting them expand only the items they want instead of immediately reading two thousand words.

Therefore:

- **The first `<strong>…</strong>` in each item must be a one-sentence conclusion that stands on its own and makes sense independently.** Keep it to **20–45 characters**: shorter is insufficiently clear, while longer will not fit on one line.
- The conclusion must be informative, not merely a subheading. Write “<strong>The underground galleries reopened after a complete renovation in summer 2026, the largest recent change at this stop</strong>,” not “<strong>Underground galleries</strong>.”
- Follow the conclusion with detailed explanation, using the length rules below.
- **Do not place a bold opening with no content after it**—expanding it would reveal nothing. The page automatically displays items with fewer than 24 characters of detail in a flat layout, but if an item is worth including, explain it fully.

The page labels these sections “What to See” (`highlights`) and “How to Visit” (`tour`); preserve their distinct roles. **The former describes what to look at** (which objects, why they matter, and counterintuitive facts), while **the latter describes how to move through the place** (order, what to skip, crowds and lines, and locations of restrooms and food). Do not repeat the same matter in both sections.

## `highlights` Length Rules (Important)

Allocate space according to the attraction’s significance; do not always fill every slot:

- **Minor attraction / single-purpose location:** 2–3 items, 1–2 sentences each.
- **Major natural attraction or place with cultural context:** 4–5 items. Explain its history, construction background, why it is worth photographing, and any counterintuitive facts. Specific details such as “the Bradbury Building commission was accepted by an untrained 32-year-old draftsman based on a message received through spiritualism” are more useful than five sentences of adjectives.
- Do not repeat material already covered in `tldr` or `photo` merely to add length.

## Coordinate Requirements

- Always use `[latitude, longitude]`, WGS84, with 5–6 decimal places.
- **Coordinates must be genuine and verifiable**, sourced from an OpenStreetMap feature or official page. Label geometrically inferred coordinates as “estimated” in `desc`.
- If precise coordinates for a photo spot are unavailable, **omit the `view` field** and state “No OSM feature; no map pin” in `desc`. Do not invent coordinates—each will later be reverse-checked with Nominatim, which will expose fabricated values.

## Image Requirements

- Use only direct `upload.wikimedia.org` links from **Wikimedia Commons** (original-file links are acceptable; the download script automatically converts them to thumbnails).
- Include **2–3 images** per attraction, prioritizing landscape orientation and views that demonstrate the recommended photo spots.
- `cap` must use the format “Content · Author / License,” for example, `Lobby atrium · Daniel L. Lu / CC BY-SA 4.0`.
- To search for images, use `python3 tools/find_images.py "keyword"`; it returns high-resolution candidates and license information.
- If no compliant image can be found for an attraction, leave `images: []` empty and list it in the delivery notes. Do not use non-Commons links.

## Writing Standards

- **Write body text in English and retain proper nouns and place names in their original English.** Set both title fields, `en` and `name`, in English.
- Use the tone of candidly briefing a friend who plans to visit, not tourism marketing. **If a place is inaccessible, say so; if it is not worthwhile, say so.**
- **`tour` and `access` are primary; `photo` and `shots` are secondary.** Space allocation must reflect this. In a museum entry, “what to see first, how to avoid crowds, and how long it takes” is far more valuable than “which angle photographs well.”
- Prefer numbers to adjectives: write “11:00–14:00” instead of “around midday,” and “$30” instead of “expensive.”
- Mark uncertain information explicitly with wording such as “<strong>Could not be confirmed through official channels</strong>”; do not obscure uncertainty.
- **Do not include any drone-related content**; the user does not have a drone.
- Do not plan a specific itinerary or date schedule; describe only the place itself.

## Intended Audience: Anyone Who May Use This Guide Later

This guide is a **public, long-term reference**, not a record of one private trip. The following wording is prohibited and must be corrected whenever found:

| Do not write | Replace with |
| --- | --- |
| “Already visited,” “We went last time,” or “We are skipping it this time” | State the place’s value and constraints directly, letting readers decide whether to visit |
| “This trip is unaffected” | “Mid-to-late October is unaffected,” or state the exact time condition |
| “For your actual dates” or “Applied to the actual dates” | “Using mid-October as an example,” making the date explicitly illustrative |
| “The direction is unfavorable for us” | “This is unfavorable for fall color”—state the fact without a personal perspective |
| “This is the only … on this trip” | “This is the only … in this area” |

**Minimize second-person language as well.** A sentence such as “You leave on 9/29” ties the guide to one trip; replace it with a conditional phrase such as “when leaving the park in late September.”

**Handling dates:** seasonal facts (peak fall color, road closures, peak-season prices) are among the guide’s most valuable content and must not be removed. Reframe them from “my itinerary” as “seasonal reference + example date”:

- Acceptable: “mid-to-late October,” “late September to early October,” or “fall weekends.”
- Acceptable: “Using October 16 as an example, sunset is 18:16 and golden light is 17:35–18:15.”
- Do not write: “10/16 is our first day in New York, so…”
- For facts valid only in a particular year (event dates, ticket-release dates, or that year’s forecast), **state the year and verification date clearly** so future readers know to recheck: “Held October 1–31, 2026; price based on the official site as of 2026-09-14. Recheck before travel.”

## Pre-Delivery Checklist

```bash
node --check <your-file-path>          # Syntax
node -e "const r=require('./<path>'); console.log(r.spots.length)"   # Can Node require it?
```

In the final response, report the subregion id, number of attractions, attractions added, number of photo spots without coordinates, number of attractions with empty `images`, and any key information you **could not verify** (opening hours, admission, visit duration, reservation rules, or accessibility).

Also check these three requirements; missing any one requires reworking the entire file:

```bash
# Every attraction must have must, tour, and access.visit
node -e "const r=require('./<path>'); r.spots.forEach(s=>{ \
  if (s.must==null) console.log('missing must: '+s.id); \
  if (!s.tour||!s.tour.length) console.log('missing tour: '+s.id); \
  if (!s.access||!s.access.visit) console.log('missing access.visit: '+s.id); \
})"
```
