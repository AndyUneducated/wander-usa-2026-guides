# Data Accuracy Review Checklist

Each item must be checked against official sources. Write changes back to `<region>/parts/*.js` (for socal, edit `socal/data.js` directly), then rerun `tools/assemble.py`.

| Priority | Count | Meaning |
| --- | --- | --- |
| P0 | 1 | Declares a location unreachable or closed; errors carry the highest cost |
| P1 | 108 | Contains specific times, dates, or prices and is most likely to expire |
| P2 | 36 | Reservation and ticket requirements |
| P3 | 0 | Parking, walking, etc. |


## P0 (1 piece)


### dc / Museum Group

- `dc-castle` **8. Smithsonian Castle and the Enid A. Haupt Garden**  
★ Non-reachable judgment (you need to confirm twice that you really can't go): The castle will be closed again after September 7 and will not be able to enter this time after 2027; however, the Haupt garden and the red sandstone facade are still free to shoot.

## P1 (108 pieces)


### dc / Philly Old City

- `reading-terminal-market` **1. Reading Terminal Market**  
opening hours: Official original text (readingterminalmarket.org): 「Open Daily, 8AM - 6PM」, and indicate 「individual merchant store hours may vary」.There are no weekly closing days in autumn, and only Thanksgiving, Christmas Day, and New Year's Day are closed throughout the year.Actually pay attention to two points: ① Many cooked food stalls will close at 30–60 minutes before the market closes; ②pennyvania Dutch stalls will definitely not open on Sundays. To be safe, they will be arranged from Wednesday to Saturday (The exact scope of the business day cannot be confirmed from official channels, please call 215-922-2317).
- `reading-terminal-market` **1. Reading Terminal Market**  
tickets: Admission is completely free (food is counted separately; some booths, especially the Pennsylvania Dutch booth, only accept cash, it is recommended to bring $40–60 cash)
- `elfreths-alley` **2. Elfreth's Alley**  
opening hours: The streets are open 24 hours a day (public streets).The museum has been verified to be open normally in 2026, but only on Fridays, Saturdays, and Sundays 12:00–16:00 (original 「Museum hours are Fridays, Saturdays, and Sundays from 12pm - 4pm」 on the official website).The entire season only operates until mid-November (official website: April to mid-November).→Any date from the end of September to the end of October is in the season, but from Monday to Thursday, you can only take pictures of the streets and enter the house.Phone (267) 457-4159.
- `elfreths-alley` **2. Elfreth's Alley**  
tickets: The street is free.Museum Admission is free for adults $3, 7–12, $2, and under 7 years old; guided tours (including museum admission) for adults $10, 7–12, and $5; there is also a mobile audio tour of $3 (elfrethsalley.org/audiotour), which can be bought at any time and is not limited by the opening time.
- `elfreths-alley` **2. Elfreth's Alley**  
reservation: No reservation is required for the street.The museum does not accept online ticketing, and can only buy on-site (cash, credit card and Apple Pay are accepted).The guided tour will take place on Saturday and Sunday 14:30 for 40 minutes. It will take a complete walk, including Bladen's Court and two museum rooms.
- `philadelphia-city-hall` **3. Philadelphia City Hall**  
Opening hours: The official original text of the observation deck at the top of the tower: 「Monday - Friday 10:00 a.m. - 2:45 p.m.」, closed on weekends and municipal holidays.City Hall Visitor Center (Room 121, East Gate): Monday to Friday 10:00–16:00.The building itself is roughly 07:00–18:00 from Monday to Friday as an office building (this period comes from second-hand sources and cannot be confirmed from official channels).Dilworth Park: Daily 06:00–01:00; Jumping Spring operates from April to October, and announced in 2026 that it will be open daily until October 18, with a period of 7:45–22:00; the ice rink is from mid-November to late February.The location and Broad Street and Parkway seats are available 24 hours a day.The bathroom is in the City Hall building, and the time is uncertain.
- `philadelphia-city-hall` **3. Philadelphia City Hall**  
tickets: The exterior, inner courtyard and Dilworth Park are completely free.The tower top fare cannot be confirmed from official channels-the tower ticket page of phlvisitorcenter.com puts the price in the JavaScript shopping cart module, and the static page cannot be read.Second-hand source caliber: Philadelphia Inquirer (2025) called tower ticket $10–$16 (by age and military status), and other visitor posts called adult $16, elderly and military $13, youth and students $10, free for under 3 years old.Please follow the adult $16 budget and verify it on site.
- `philadelphia-city-hall` **3. Philadelphia City Hall**  
reservation: No reservation is required for the exterior and inner courtyard.Timed tickets are required for the observation deck at the top of the tower. You can pre-order online at phlvisitorcenter.com/CityHallTowerTour (additional $2 service fee is added online), or buy it on-site at the City Hall Visitor Center (East Gate Room 121); the site is on a first-come, first-served basis, because the elevator can only carry 4 people, it may be sold out on the same day during peak season.There is also a City Hall Building Tour of about 1 hour (three sessions of 10:00, 12:00, and 14:00 from Monday to Friday, about $20–26, including internal and external).Weather cancellation can be rescheduled (to credit, no refund), contact cityhall@phlvisitorcenter.com or 267-514-4757.
- `christ-church` **4. Christ Church & Christ Church Burial Ground**  
Opening hours: Church (christchurchphila.org/visit): Daily 11:00–17:00, except on Sundays, 9:45–11:00 and 11:30–17:00 are two sections (10:00 is not open to tourists during worship).Cemetery: Daily 11:00–17:00 from March to November; shortened to 11:00–16:00 in December, depending on the weather; closed in January and February, and closed on Easter Sunday, Thanksgiving, and Christmas Day.→ From the end of September to the end of October, all are open daily during the normal season, and there are no weekly closing days.Both places will not open until 11:00. This is the latest attraction in this area to open, ranking it after 11:00 in the morning.
- `christ-church` **4. Christ Church & Christ Church Burial Ground**  
tickets: Church: Self-guided adult $5 / 5–12 Year old $2; guided adult $10 / CHILD $5.Cemetery: Self-guided adult $5 / 5–12 year old $2; guided adult $10 / child $5.Combined ticket (church + cemetery, self-service) adult $8 / 5–12 year old $3, only sold on site.Park map $1.Free for under 5 years old.Franklin's tomb is completely free to see and photograph through the fence on the corner of 5th & Arch.
- `liberty-bell-center` **5. Liberty Bell Center**  
opening hours: The official original text (nps.gov/inde/planyourvisit/libertybellcenter.htm）：「Open daily 9 am–5 pm", there is no weekly closing day in autumn, and only Thanksgiving, Christmas Day, and New Year's Day are closed all year round."The deadline"""The three official pages have different caliber: the NPS homepage says "At least 5 minutes before closing", the Things to Do page of NPS says "10 minutes", and the Philadelphia Visitor Center says "16:45".Planning according to 16:45 is the safest.Some third-party sources mentioned that the summer is extended to 19:00, but it is not applicable in autumn.
- `liberty-bell-center` **5. Liberty Bell Center**  
tickets: Free
- `independence-hall` **6. Independence Hall**  
opening hours: Official original text (updated on August 17, nps.gov/inde/planyourvisit/hours.htm，2026): 「9 am–9:50 am: Open house (no tickets required) / 10 am–4 pm: Tours every 20 minutes (tickets required) / 4:20 pm: Expanded tour (tickets required and not wheelchair accessible)」.Security check 8:45 opens the door, and the security check will be stopped at least 15 minutes before the closing of the museum. The group may also stop early when it is full.There is no fixed weekly closing day in autumn; the park is only closed on Thanksgiving, Christmas Day, and New Year's Day throughout the year.The 16:20 field is an extended group and can go to the second floor, but it is not accessible without obstacles.There is no toilet in the security check area.
- `independence-hall` **6. Independence Hall**  
ticket: The ticket itself is free, but a handling fee of $1.00/ticket is charged when the ticket is required. The Interagency Pass (U.S. National Park Annual Pass) does not cover this fee.The location and Independence Square are completely free.
- `independence-hall` **6. Independence Hall**  
reservation: No reservation or ticket is required for the open house of 9:00–9:50; a timed ticket must be held for each guided tour after 10:00.Tickets are booked at recreation.gov or by phone 1-877-444-6777 (10:00–24:00), with a maximum of 10 tickets per account.Tickets are released in two batches: ①approved in advance and released in a 30-day rolling window (official example: Tickets for September 1st will be released on August 3rd); ②approved the next day and released on the previous day 17:00, on a first-come, first-served basis. Tickets that have not been booked will be hung until the opening time.What to do if you don't get the ticket: go directly to the 9:00 open house, this is the official system, not a loophole; or 17:00 on the same day, staring at the next batch; or repeatedly swipe recreation.gov to pick up the refund (but once the ticket is booked, it will not be refunded or changed).Ticket holders must arrive at the security gate 30 minutes in advance. Late arrival does not guarantee admission.
- `museum-american-revolution` **7. Museum of the American Revolution**  
opening hours: Official original text: 「Museum Hours: Daily, 9:30 a.m.–5 p.m.」, there is no weekly closing day in autumn, only Thanksgiving, Christmas Day, and New Year's Day (the museum was closed for one day on September 8, 2026, and it has passed).The last admission period is 15:30.Cross Keys Café: Sunday and Monday 11:00–15:00, Tuesday to Saturday 11:00–16:00.The caliber is inconsistent: the Plan Your Visit page of the official website still says 「9:30 a.m.–6 p.m. starting June 13, 2026」, while the Hours & Admission page and the Tips page both say 9:30–17:00.17:00 is the safest, but this contradiction cannot be clarified from official channels.
- `museum-american-revolution` **7. Museum of the American Revolution**  
tickets: Official price list (amrevmuseum.org/at-the-museum/visit/visit-hours): Adult on-site $27 / online $25; OVER 65 years old, students, teachers, and military personnel (all documents required) $21; 6–17 years old $14; 5 years old and below, members are free; ACCESS card and SNAP benefits are free on-site.There is also a family package of "two adults plus two teenagers $64" online.Show the SEPTA Key card minus $2; show the ticket stub of the African American Museum in Philadelphia minus $4.The Washington's War Tent Theater is included in the general ticket and there is no additional charge.

### dc / Philly Parkway

- `eastern-state-penitentiary` **1. Eastern State Penitentiary**  
Opening hours: Official website Seasonal & Holiday Schedule Original text: March–November: Open Daily, 10:00 a.m. to 5:00 p.m. (1–2 only closes on Tuesdays in the first half of December and December).The last admission is 1 hour before closing.There are no closing days from late September to the end of October. The most recent closing day is Thanksgiving Day on November 26.Halloween Nights is an independent ticketing event on some nights from October 2nd to November 7th, which does not affect the opening during the day.
- `eastern-state-penitentiary` **1. Eastern State Penitentiary**  
tickets: Online: Adult $21, elderly $19, college students and 7–17 years old $17; On-site windows are expensive $2 ($23/$21/$19).One ticket includes audio guided tours, Mini Tours, all exhibitions and art installations.$2 will be reduced on the SEPTA Key card adult ticket line.It is not recommended for children under 7 years old to enter.In addition, you need to purchase $10/person/day 「photography equipment pass」 separately to use the tripod/monopod/easel. This card can only be bought at the on-site ticket window, not online.
- `eastern-state-penitentiary` **1. Eastern State Penitentiary**  
reservation: It is strongly recommended to make an appointment online (easternstate.org/tickets).Choose one of the two daytime tickets: Self-guided Audio Tour (free entry and exit, about 40 minutes from 10 stations on the main line) or Guide-Led Tour & discussion (45 minutes explanation, tickets are date + time locked).Starting from September 8, 2026, the guided tour will be significantly reduced: there will only be one 12:00 on weekdays and one 11:00 on Saturdays and Sundays (before September 7th, there will be three 10:30/11:30/12:30 per day).The guided tour departs on time and will not be replenished if you are late.Daytime tickets can be rescheduled or refunded for free 24 hours in advance (send letter support@easternstate.org)
- `boathouse-row` **2. Boathouse Row**  
opening hours: The river banks and trails are open 24 hours a day.The lights automatically turn on at sunset and turn off at sunrise every night (Fairmount Park Conservancy and Philadelphia Parks & Recreation 2024 press release original: 「Each night the lights are automatically scheduled to go on at sunset and off at sunrise」).Another third-party source said that the light is only on to about 22:00, which contradicts the official caliber. The official shall prevail this time, but please pay attention before shooting late at night.
- `boathouse-row` **2. Boathouse Row**  
tickets: free.The interior of the houseboat is owned by private rowing clubs and is not open to the public. Only the exterior can be photographed.
- `fairmount-water-works` **3. Fairmount Water Works**  
opening hours: The location and cliff path are open 24 hours a day.The original text of the Indoor Interpretive Center's official website: Wednesday–Saturday 10:00am–5:00pm, closed on Sundays, Mondays, Tuesdays and holidays.There are also hands-on activities at 13:00–16:00 on Saturday.Note that it is the only indoor venue in the district that opens on Wednesday-both the Art Museum and Barnes are closed on Wednesday. This is the only indoor venue.The John Brady Photography Exhibition (2026-09-19 to 2027-01-08) is on display in your window
- `fairmount-water-works` **3. Fairmount Water Works**  
tickets: The location and plank road are completely free.The indoor Interpretive Center is also free (donations are welcome)
- `philadelphia-museum-of-art` **4. Philadelphia Museum of Art**  
opening hours: Official website original text: Monday 10am-5pm; Tuesday Closed; Wednesday Closed; Thursday 10am-5pm; Friday 10am-8:45pm; Saturday 10am-5pm; Sunday 10am-5pm.The last admission is generally 30 minutes before the closing of the museum.The closure of the museum on Tuesdays and Thursdays is the hardest restriction in this area.
- `philadelphia-museum-of-art` **4. Philadelphia Museum of Art**  
tickets: Adult $30, over 65 years old $28, licensed students $14, free for 18 years old and below.The ticket is valid for two consecutive days, including Rodin Museum.17:00–20:45 Pay What You Wish every Friday (the official 2026-09-03 release announced that it will be extended to 2027-06-25); Pay What You Wish all day on the first Sunday of each month.All exterior views such as steps, terraces, Rocky statues, etc. are free and can be stood 24 hours a day
- `philadelphia-museum-of-art` **4. Philadelphia Museum of Art**  
reservation: It is not mandatory to make an appointment. The official encourages buying timed tickets online to avoid queuing, and they can also be purchased on-site.philamuseum.org.The free/self-priced tickets for Pay What You Wish on Friday need to be booked online, and the popular hours will be full.
- `barnes-foundation` **5. The Barnes Foundation**  
opening hours: The original text of the official website: Thursday–Monday 11am–5pm, members will enter from 10:00.The museum is closed on Tuesdays and Wednesday (the official website is not listed in the business schedule, and the caliber of the third party is the same as the hours module of the official website).Also closed July 4th, Thanksgiving Day, Christmas Day-all outside your window
- `barnes-foundation` **5. The Barnes Foundation**  
tickets: adult $30, senior $28, college student $5 (telephone purchase), 13–18 year old $5, free for 12 years old and below.Including special exhibitions, it is valid for two consecutive days.THE ACCESS/EBT card is free for Philadelphia pre-K–12 teachers.Free on the first Sunday of each month (registration required).South vestibule and exterior wall free
- `barnes-foundation` **5. The Barnes Foundation**  
reservation: It is recommended to make an online reservation for timed admission tickets (barnesfoundation.org / 215.278.7000). It is strongly recommended to advance a few days during weekends and special exhibitions; tickets are also sold at the on-site box office, but there is no guarantee of a seat.College students' $5 tickets can only be purchased by phone (215.278.7000), not online.PECO Free First Sunday on the first Sunday of each month is free but registration is required. The capacity is limited. The ticket release time is 10:00 on the Thursday before the event (such as the one on October 4th, 10:00 will be released on October 1st)
- `swann-memorial-fountain` **6. Swann Memorial Fountain / Logan Square**  
opening hours: Open 24 hours a day, closed all year round.But the fountain itself runs seasonally: Philadelphia Parks & Recreation's caliber is "usually open at the end of April or early May, and it will run at least until mid-to-late October, depending on whether there is a freezing temperature. It can continue until Thanksgiving."It will almost certainly spray in late September; it will fall in the critical zone of water closure after October 20th. Please check @philaparkandrec or call Parks & Rec before departure.
- `swann-memorial-fountain` **6. Swann Memorial Fountain / Logan Square**  
tickets: Free

### dc / National Mall

- `reflecting-pool-constitution-gardens` **1. Lincoln Memorial Reflecting Pool & Constitution Gardens**  
Opening hours: Constitution Gardens: Open 24 hours, unlimited.Lincoln Memorial Reflecting Pool: The current closure order is valid until September 10, 2026 23:59, covering the main body of the pool, the trails on both sides and the middle belt of the north and south grasslands.Whether it will reopen after that date and the actual status of the 9/25–10/22 period cannot be confirmed from official channels-the official end of August is "within a few weeks", but the same project has been skipped many times, and a one-year maintenance contract has just been signed in late August.Please check nps.gov/nama's Alerts & Conditions and Reflecting Pool closed announcement page before departure
- `reflecting-pool-constitution-gardens` **1. Lincoln Memorial Reflecting Pool & Constitution Gardens**  
tickets: Free
- `vietnam-veterans-memorial` **2. Vietnam Veterans Memorial (The Wall)**  
opening hours: open 24 hours (NPS: outdoor areas open 24 hours a day 7 days a week).Ranger is on duty at 9:30–22:00.There is ground projection lighting at night, and the wall is readable, but the light level is very low at night, and obvious light spots will appear on the reflective surface. The effect of night shooting is far inferior to that of early morning.
- `vietnam-veterans-memorial` **2. Vietnam Veterans Memorial (The Wall)**  
tickets: Free
- `washington-monument` **3. Washington Monument**  
Opening hours: Inside the monument: Daily 9:00–17:00.The official visit time of the last shift is different from the two places (16:30 is written on the NPS basic information page, and recreation.gov is written on 16:00). It is recommended to plan according to 16:00.The exterior of the monument and the entire Washington Monument lawn are open 24 hours a day.Closing days in 2026 (routine maintenance on the first day of each month): September 10th, October 5th, November 11th, November 26th, December 25th-October 5th (Monday) fell in the itinerary window, and the top could not be reached that day.In addition, thunderstorms and high winds will be temporarily closed and tickets for this period will be cancelled.
- `washington-monument` **3. Washington Monument**  
tickets: Tickets are free; a non-refundable service fee of $1.00/ticket will be charged for advance booking.On-site tickets on the same day are completely free
- `wwii-memorial` **4. National World War II Memorial**  
opening hours: Open 24 hours a day.Ranger is on duty at 9:30–22:00.The official website of the fountain's operating period is not stated. In practice, it runs during the day and in the middle of the night in the spring and autumn seasons, and is shut down and emptied in the middle of the night and winter. The specific shutdown time of 9–10 month cannot be confirmed from official channels-If you want to shoot the fountain, please don't take the early morning 03:00 as an opportunity.
- `wwii-memorial` **4. National World War II Memorial**  
tickets: Free
- `lincoln-memorial` **5. Lincoln Memorial**  
Opening hours: NPS official original text: 「The public may visit the sites of National Mall and Memorial Parks 24 hours per day. Rangers are on duty at the sites to answer questions from 9:30 a.m. to 10:00 p.m. daily.」Superintendant's Compendium Also contains: 「Outdoor areas within the park are open 24 hours a day 7 days a week unless otherwise noted.」 The main hall and steps have no access control around the clock, and can be entered in the early hours of the morning.Undercroft 9:00–21:00 daily (3–10 month), the last ticket is 1 hour before the closing of the museum, 45 minutes before the closing of the museum, and the museum is closed for routine maintenance on a fixed day every month (the specific date is not listed on the official website, and the closing day of the 9–10 month cannot be confirmed. It is recommended to look at the recreation.gov inventory when booking tickets)
- `lincoln-memorial` **5. Lincoln Memorial**  
tickets: All free (Undercroft advance tickets only charge $1 handling fee)
- `korean-war-veterans-memorial` **6. Korean War Veterans Memorial**  
opening hours: Open 24 hours a day.Ranger is on duty at 9:30–22:00.Note: The ticket booth on Daniel Chester French Drive next to this monument will issue Lincoln Memorial Undercroft same-day tickets from 8:45. There will be a queue here at 08:30–09:30 in the early morning. Please avoid the east side trail during this period for shooting.
- `korean-war-veterans-memorial` **6. Korean War Veterans Memorial**  
tickets: Free
- `mlk-memorial` **7. Martin Luther King, Jr. Memorial**  
opening hours: Open 24 hours a day.Ranger is on duty at 9:30–22:00.The bookstore (on the side of West Basin Drive) is open during the day. The specific hours are not listed on the official website and cannot be confirmed.
- `mlk-memorial` **7. Martin Luther King, Jr. Memorial**  
tickets: Free
- `fdr-memorial` **8. Franklin Delano Roosevelt Memorial**  
opening hours: Open 24 hours a day.Ranger is on duty at 9:30–22:00.The water feature (four-room waterfall) will be emptied and shut down in winter, and it usually runs in autumn, but NPS has not announced a specific seasonal switch-on date, and it has not been confirmed whether it is still in operation in late October-if the water feature is shut down, more than half of the value of this entry will disappear. It is recommended to look at nps.gov/frde's Alerts first on the day of departure.
- `fdr-memorial` **8. Franklin Delano Roosevelt Memorial**  
tickets: Free
- `jefferson-memorial` **9. Thomas Jefferson Memorial & Tidal Basin**  
opening hours: open 24 hours (NPS: outdoor areas open 24 hours a day 7 days a week).Ranger is on duty at 9:30–22:00.There is no door in the hall. You can enter in the early hours of the morning and late at night, and the lights are on all night.
- `jefferson-memorial` **9. Thomas Jefferson Memorial & Tidal Basin**  
tickets: Free

### dc / Capitol Hill

- `union-station-dc` **1. Union Station**  
Opening hours: Official original text: 「Washington Union Station is open 7 days a week」, 「Union Station is closed to the public daily from 11PM to 5AM. During that time, the station will only be accessible to ticketed passengers.」→ The public 5:00–23:00 every day, and there are no closed days throughout the year. It is the most relaxed point in time in this area.Retail stores are 10:00–21:00 from Monday to Saturday and 12:00–18:00 on Sunday; food courts are 7:00–21:00 from Monday to Saturday and 7:00–18:00 on Sunday; dining halls are different.The architectural spaces of Main Hall and East Hall are accessible throughout 5:00–23:00 and are not subject to store business hours.
- `union-station-dc` **1. Union Station**  
tickets: Free
- `supreme-court` **2. Supreme Court of the United States**  
Opening hours: Official original text: 「The Supreme Court Building is open Monday to Friday from 9 a.m. to 3 p.m. It is closed on weekends and all federal holidays.」Courtroom Lecture: Monday to Friday 10:30, 11:30, 12:30, 13:30, 14:30, federal holidays and court sessions will not be held, and 「subject to cancellation due to Court business and… volunteer docent availability」.October 1, 2026 will be 10/5, 10/6, 10/7, 10/13, 10/14; 10/12 Columbus Day The whole museum will be closed.The official has another sentence that must be followed: 「the business of the Court may affect public access to the building and visitor programs. Please check Today at the Court on the homepage」--Swipe Today at the Court on the homepage of supremecourt.gov on the day of departure
- `supreme-court` **2. Supreme Court of the United States**  
tickets: Free
- `supreme-court` **2. Supreme Court of the United States**  
reservation: No reservation is required.There is no appointment for the Courtroom Lecture. The team will line up on the first floor of the Great Hall and outside the court. The official recommendation is to arrive at least 15 minutes in advance (earlier in spring and summer).If you want to attend the court debate (10:00 will open on October 5, 6, 7, 13, and 14), it is currently a pilot project of "online lottery + first-come, first-served": on the same day, the team will line up on the sidewalk on the side of East Capitol Street, and 9:30 will start to seat people.
- `us-capitol` **3. United States Capitol**  
opening hours: Official original: 「The Capitol Visitor Center is open Monday-Saturday from 8:30 a.m.-4:30 p.m.」, closed on Sundays, and closed on Thanksgiving, Christmas Day, New Year's Day, and Inauguration Day.Guided tour session 8:40–15:20, the last session 15:20 starts.Exhibition Hall 8:30–16:30, Capitol Cafe 8:30–16:00, Gift Shop 9:00–16:30.Audience: The House Gallery is open on weekdays 9:00–16:00 when the House of Representatives is not in session, closed on weekends and holidays (unless in a meeting), and 「subject to unplanned, temporary closures」; the Senate Gallery is only open on weekdays 9:00–16:15 during the adjournment period of more than one week, and not during the adjournment period of less than one week.The official has another word that must be remembered: 「The U.S. Capitol is subject to the unscheduled suspension of tours」-Temporary suspension of the group is possible at any time, swipe the homepage again on the day of departure
- `us-capitol` **3. United States Capitol**  
tickets: Completely free, there is no charge for entering the Visitor Center and participating in guided tours
- `library-of-congress-jefferson` **4. Library of Congress · Thomas Jefferson Building**  
opening hours: Official original text: 「The Thomas Jefferson Building is open to visitors Tuesday through Saturday from 10 a.m. to 5 p.m.」, 「Closed: Sundays, Mondays, and select federal holidays」, extended to 20:00 on Thursday.The last admission is 16:30 (Thursday evening will be charged separately).Main Reading Room ground walkthrough: 10:30–11:30 and 14:00–15:00 from Tuesday to Friday, and 17:00–19:00 on Thursdays; not on Saturdays.Library Store Tuesday to Wednesday, Friday to Saturday 10:00–17:00, Thursday 10:00–20:00.Note: The reading room is another set of schedules (including opening on Mondays) for licensed researchers, which has nothing to do with the tourist hours.Columbus Day on October 12 is a federal holiday and is expected to be closed. Please refer to the announcement on the homepage of the official website.
- `library-of-congress-jefferson` **4. Library of Congress · Thomas Jefferson Building**  
tickets: free (timed tickets are also free)
- `library-of-congress-jefferson` **4. Library of Congress · Thomas Jefferson Building**  
reservation: You must have a free timed-entry ticket to enter the building. You are not allowed to enter without a ticket. The official original text: 「Every Library of Congress visitor, regardless of age, must reserve timed-entry passes」.Ticketing rules: You can book through the Etix system at loc.gov/visit 30 days in advance, with a maximum of 20 people at a time; there are also same-day tickets, which are released online at 9:00 ET on each open day. This is the most reliable remedial path.Tickets are non-transferable and cannot be rescheduled. For cancellation, you need to send a letter to visit@loc.gov.Groups of more than 20 people can take the group registration form, which can be reviewed 60 days in advance and takes about 3 working days.Another dedicated ticket is required for 「Live! at the Library」 from 17:00 on Thursday night, and timed tickets during the day will expire after 16:30 on Thursday.There is no reservation for the ground walkthrough of the Main Reading Room, on-site on a first-come, first-served basis
- `us-botanic-garden` **5. United States Botanic Garden Conservatory**  
opening hours: Official original text: Conservatory「10 a.m. to 5 p.m. daily (closed Dec. 25)」; Bartholdi Fountain and Gardens 「Dawn to dusk」; National Garden (gated outdoor gardens) 7:30–17:00, only 4/1–9/15 is extended to 19:00-in this window, it is calculated according to the closing of 17:00.The four summer extended open days in 2026 (6/18, 7/16, 8/20 or 8/27, 9/17, open to 20:00) are all earlier than late September, and there is no extended open day in this window.The gift shop is in the West Gallery, at any time
- `us-botanic-garden` **5. United States Botanic Garden Conservatory**  
tickets: Completely free

### dc / Museum Group

- `dc-whitehouse` **1. White House Exterior + The People's House**  
opening hours: The outer scenic area is theoretically 24 hours, but the actual temporary closure order of NPS/Secret Service shall prevail, and the official warning 「areas often close without any advance notice」.The People's House: 9:00–17:00 seven days a week, the last admission is 16:00 (1 hour before closing); Thanksgiving, Christmas, and New Year's Day are closed; the official indicates 「with some exceptions」, occasionally closed due to special events or scheduled maintenance, will be announced on the official website.The attached History Shop is the same as 9:00–17:00, you can enter without a ticket
- `dc-whitehouse` **1. White House Exterior + The People's House**  
tickets: The location is free.The People's House is free, the official recommendation is to donate $15 per person (voluntary, non-mandatory)
- `dc-whitehouse` **1. White House Exterior + The People's House**  
reservation: No reservation is required for the location of the White House, but you must check the NPS temporary closure announcement page once before departure, where the current Record of Determination and closure map will be posted.The People's House recommends booking free timed tickets in advance.The ticketing rules are very special: before 17:00 ET on the first working day of each month, tickets for the whole month of the following month will be released (official example: Tickets for November will be released before 17:00 ET on the first working day of October).To convert it: it will go to late October, and the ticket will be released on September 1st; it will go to late September, and the ticket will be released in early August.There are also a small number of walk-up tickets on site, on a first-come, first-served basis, but they are unreliable during popular hours.Groups of more than 16 people must apply for group tickets 6 weeks in advance.Booking thepeopleshouse.com/passes.Real White House visit: Foreign citizens must go through their own embassy in the United States before traveling 21–90 is submitted in days. Most embassies will not accept travel applications. Please treat it as if it will not happen.
- `dc-npg-saam` **2. National Portrait Gallery + Smithsonian American Art Museum**  
opening hours: This is the latest museum to open in this area, and it is also the only museum that can be photographed indoors after sunset.The current caliber of the homepage of the Smithsonian American Art Museum's official website is 「Open Daily, 11:30 a.m.–7:00 p.m.」, and the caliber of the atrium on the official page of the Smithsonian Gardens is 「The Robert and Arlene Kogod Courtyard … is open 11:30 a.m. to 7 p.m. daily and closed on December 25」, which is the same in both places.The National Portrait Gallery is in the same building at the same time.Please note that 11:30 only opens the door, 90 minutes later than other Smithsonian, don't line up the first stop in the morning here; as compensation, it closes 90 minutes later than others.
- `dc-npg-saam` **2. National Portrait Gallery + Smithsonian American Art Museum**  
tickets: Free
- `dc-fords` **3. Ford's Theatre and Petersen House**  
opening hours: Official caliber: Open daily, admission period 9:00–16:00, every half hour; Thanksgiving and December 25th closed.The official recommendation is to leave 2–3 hours to complete the four parts, of which the journey takes about 30 minutes.However, "open daily" is not equivalent to "the four parts are open every day": NPS clearly stated that the main body of the theater may be closed due to performances, stage installations, and rehearsals, and 「The schedule varies considerably … please check the reservations schedule on the Ford's Theatre Society site for specific details on what is available on any given day or entry time」
- `dc-fords` **3. Ford's Theatre and Petersen House**  
tickets: free; online booking fee for each $5.00; Acoustiguide audio guide plus $5/Taiwan
- `dc-archives` **4. National Archives Museum**  
opening hours: Official original text: The exhibition area is 10:00–17:30 daily, and the last admission is 30 minutes before closing (that is, 17:00); it is open all year round except Thanksgiving and December 25.The timed ticket period ends at 16:30, and the official explanation is to leave enough time for people to finish watching Rotunda.(Note: This summer, there was an extension of the opening of 10:00–22:00 until July 5th. The extension has ended. Don't expect a late show in October)
- `dc-archives` **4. National Archives Museum**  
tickets: free ($1 is only a timed ticket handling fee)
- `dc-archives` **4. National Archives Museum**  
reservation: No reservation is required, everyone can come directly.However, the official "encourages" booking tickets to enable the museum's new personalized system. There are three types: (1) free general admission tickets; (2) $1 timed tickets (timed-entry), the only effect is to skip the on-site queuing, the admission period is 10:15–16:30, every 15 minutes; (3) $1 timed tickets for groups of more than 6 people.$1 is a non-refundable handling fee. Rescheduling is free and cancellation is non-refundable.Tickets for October, November, and December 2026 have been released on September 1st 11:00 ET.Book tickets to go to Etix, the entrance is at visit.archives.gov/visit/tickets.Practical judgment: At noon during the peak season, the on-site team may line up 30–60 minutes, $1 is very worth the cost; if you arrive at the opening of 10:00 as recommended, you don't have to book at all.
- `dc-nga` **5. National Gallery of Art (West Building + East Building)**  
opening hours: Official original text: East Building and West Building daily 10:00–17:00; Sculpture Garden daily 10:00–17:00.The museum is only closed on December 25th and January 1st throughout the year.The Terrace Café in the East Building is 10:00–16:00 daily.The early closure of 17:00 is the biggest structural defect of this location: there are still 2 hours of daylight after the closure of the museum in late September, and 1 hour and 15 minutes in late October. Please reserve this time for outdoor units elsewhere. Don't expect to shoot prime time in the museum.
- `dc-nga` **5. National Gallery of Art (West Building + East Building)**  
tickets: free (official caliber 「Always free」)
- `dc-nmnh` **6. Smithsonian National Museum of Natural History**  
opening hours: Official original text: 「The museum is open seven days a week from 10 a.m. to 5:30 p.m., except December 25.」 and specify 「At 5:30 p.m., the doors close and all visitors must exit the building.」-17:30 is a hard clearance, not the last admission.The shops in the museum (Ground Floor, Evans Gallery's Gallery Store and Family Store) are the same as 10:00–17:30
- `dc-nmnh` **6. Smithsonian National Museum of Natural History**  
tickets: Free
- `dc-nmaahc` **7. National Museum of African American History and Culture (NMAAHC)**  
opening hours: Official opening hours: Tuesday to Sunday 10:00–17:30; Monday 12:00–17:30; 10:00 opens on federal holidays; only closed on December 25.Ticket holders can enter from the face time, at the latest 16:00 (there is a 2-hour grace period for group tickets), after which it will be determined according to the capacity and there is no guarantee of release.It's easy to step on the pit for two hours on Monday night, so don't arrange it here on Monday morning.
- `dc-nmaahc` **7. National Museum of African American History and Culture (NMAAHC)**  
tickets: free (the timed ticket itself is also free, no handling fee)
- `dc-nmaahc` **7. National Museum of African American History and Culture (NMAAHC)**  
reservation: You must hold a free timed-entry pass, which is required for everyone regardless of age, including infants.The official has confirmed that timed tickets are still required (this has changed repeatedly in history. In 2019, it was divided according to the light and high season, and 9–2 can walk-in on working days, but now there is no off-season exemption).There are two channels for ticketing: (1) Advance tickets are released 30 days in advance on a rolling basis; (2) Same-day tickets are released online before 8:15 ET every morning, only on the Internet and not on-site.Each account can order up to 9 tickets at a time, and more than 10 people must take group passes.The official clearly wrote 「The museum cannot always accommodate walk-up visitors」, and basically couldn't get in without a ticket.Exceptions for veterans, active-duty soldiers and first responders: There is no need to book tickets in advance. You can enter by presenting your military or work documents and filling out a form on the spot. You can bring up to 4 people with you.The booking entrance nmaahc.si.edu/visit.Practical advice: First press is robbed 30 days in advance. If you can't grab it, you can't get 8:15 same-day tickets. Same-day tickets in peak season are often emptied within a few minutes. Please log in to your Smithsonian account in advance, fill in the number of people and wait for the swipe.
- `dc-castle` **8. Smithsonian Castle and the Enid A. Haupt Garden** ** [marked as unreachable] **
Opening hours: Castle Indoor: Closed.The caliber of si.edu is 「part of the first floor is open through September 7, 2026」, which has since been closed again, and the official date for its permanent re-opening has not been announced.Enid A. Haupt Garden: daily from dawn to dusk, only closed on December 25.Converted into hours: about 06:32–19:26 on September 25, and about 06:57–18:47 on October 22 (according to the civilian morning and evening light time).This is the only point in the area that can cover the full time of sunrise and sunset, and it is also the main reason why it is still worth coming after the castle is closed.Reference: Freer Courtyard Garden, which also belongs to Smithsonian Gardens, 10:00–17:30 daily, Kogod Courtyard 11:30–19:00 daily
- `dc-castle` **8. Smithsonian Castle and the Enid A. Haupt Garden** ** [marked as unreachable] **
tickets: Free
- `dc-castle` **8. Smithsonian Castle and the Enid A. Haupt Garden** ** [marked as unreachable] **
reservation: No reservation is required (there is no ticket for the garden and location).The interior of the castle cannot be booked or entered this time.There are free guided tours of the garden: 10:00 every Friday from March 13th to October 30th, and 10:00 every Wednesday from May, depending on the weather. See gardens.si.edu for the latest schedule.

### dc / N. Virginia

- `great-falls-park-virginia` **1. Great Falls Park (Virginia side)**  
opening hours: Official original: Great Falls Park, overlooks, hiking trails, picnic areas and other outdoor areas, are open daily from 7:00 a.m. to thirty (30) minutes after sunset.(Daily 7:00 to 30 minutes after sunset; only closed on December 25).Converted to a specific date: September 25th is 7:00–19:30, October 22nd is 7:00–18:50.Visitor center 10:00–17:00; Visitor center courtyard toilet 8:30–16:00 (the toilets on the Old Carriage Road Trail and the Matildaville Trail are currently out of order, and there are mobile toilets on site, which are available during the opening hours of the park).The commissary is usually only open on weekends 12:00–17:00, and weekdays are seasonal
- `great-falls-park-virginia` **1. Great Falls Park (Virginia side)**  
tickets: Holding the America the Beautiful Annual Card is free of admission fee-you can directly swipe your card to enter the park for this trip.Otherwise: $20/private vehicle (including all occupants in the car, valid for seven days), walk, ride or ride into the park $10/person; there is also $35's Great Falls + C&amp;O Canal dual-park annual pass.No cash is accepted in the park, only Master Card/VISA/Discover/American Express and induction payment are accepted.The electronic ticket (QR code) pre-ordered online must be downloaded to the mobile phone before arrival-the mobile phone signal in the park is very weak.The ticket-free days in 2026 are September 17 (Constitution Day) and October 27 (Theodore Roosevelt's birthday) in this window.
- `theodore-roosevelt-island` **2. Theodore Roosevelt Island**  
Opening hours: NPS official caliber: Open daily on the island 6:00–22:00 (official original 「The island is open from 6 am to 10 pm」).NPS reminds that this is an island in an urban environment, please be cautious after dark.The Current Conditions page (last updated on November 14, 2025) does not list any closing notices
- `theodore-roosevelt-island` **2. Theodore Roosevelt Island**  
tickets: Completely free
- `marine-corps-war-memorial` **3. United States Marine Corps War Memorial (Iwo Jima Memorial)**  
opening hours: NPS official original text: The memorial grounds are open year-round from 6 am until midnight.(Daily 6:00–24:00, open all year round).One thing to note but not affected this time: During the summer Sunset Parade (6–7 part of the month 18:00–21:00, 2026 plus August 5 and August 12 17:30–20:30) Monument Square will be closed to the public. There will be no such activities from late September to late October, and the square will be available all day long.
- `marine-corps-war-memorial` **3. United States Marine Corps War Memorial (Iwo Jima Memorial)**  
tickets: Completely free
- `netherlands-carillon` **4. Netherlands Carillon**  
opening hours: NPS official original text: The carillon grounds are open year-round from 6 am until midnight.(The lawn and square are 6:00–24:00 daily, open all year round).The tower body 「closed to visitors at all times」 is permanently non-climbable.There are automatic performances and full-point timekeeping every day; live concerts by guest musicians will be arranged in summer and autumn. For specific sessions, please check the NPS event calendar.
- `netherlands-carillon` **4. Netherlands Carillon**  
tickets: Completely free
- `arlington-national-cemetery` **5. Arlington National Cemetery**  
Opening hours: Official website: Arlington National Cemetery is open daily from 8 a.m.m. to 5 p.m.(Daily 8:00–17:00).Arlington House, its museum, and two Enslaved Quarters: September to May of the following year 9:30–16:30 (6–8 month is 9:00–16:30), the last admission to the mansion is 16:00, only New Year's Day, Thanksgiving, and Christmas are closed for three days.Tram 8:30–16:00 departs (ANC's official website writes 「every 20 minutes」, and the operator's official website writes 「every 30 minutes」. The caliber of the two places is inconsistent, subject to the on-site notice).Please also note: Some third-party sources said that 4–9 will be extended to 19:00 to close the park, but arlingtoncemetery.mil The current page only writes 8:00–17:00, and the extension period cannot be confirmed from the official channel.
- `arlington-national-cemetery` **5. Arlington National Cemetery**  
tickets: Admission is completely free.The optional interpretive tram tour starts at approximately $21.50 for adults (military/veteran tickets start at approximately $11.50, and group tickets for more than 20 people start at approximately $17.50); those with a disabled parking permit and one companion are free to ride
- `old-town-alexandria` **6. Old Town Alexandria**  
opening hours: Streets and waterfront areas are open all day.Torpedo Factory Art Center: Daily 10:00–18:00, but often closed to 17:00 in advance due to private events-the announced dates for 9–10 in 2026 are 9/18, 9/19, 9/26, 9/27, 10/3, 10/10, 10/11, 10/11, 10/11, 10/11, 10/11, 10/11, 10/11, 10/11, 10/11, 10/11, 10/11, 10/11, 10/11, 10/11, 10/11, 10/17; also closed on New Year's Day, Easter, Independence Day, Thanksgiving (November 26, 2026), and Christmas.The resident artists set their own time, and the opening of the building does not mean that there are people in the studio.
- `old-town-alexandria` **6. Old Town Alexandria**  
tickets: The walking tour is completely free, the Torpedo Factory Art Center has been open for free since 1974, and the Alexandria Archaeology Museum and The Art League Gallery are also free.
- `mount-vernon` **7. Mount Vernon**  
opening hours: Official caliber: April to October 9:00–17:00; November to March of the following year 9:00–16:00.Open 365 days a year, including all holidays.9:00–17:00 is applicable from late September to late October.Donald W. Reynolds Museum & Education Center and The Shops are closed one hour later than the park (4–10, 9:00–18:00).The Farm and Distillery & Gristmill are only open in the month of 4–10 (Distillery & Gristmill is miles away from 2.8, you need to drive or take a shuttle, one way is about 12 minutes)
- `mount-vernon` **7. Mount Vernon**  
tickets: Adults (over 12 years old) $30, teenagers (6–11 years old) $16, 0–5 years old are free.Tickets include historical areas, gardens, outbuildings, museums and audio guides.An additional $2 per person is added for online reservations for timed tickets for the mansion.15 years old and under must be accompanied by an adult.Parking is free throughout

### dc / Georgetown and peripherals

- `national-cathedral` **1. Washington National Cathedral**  
opening hours: Official original text: 「Our sightseeing hours vary day-to-day to accommodate the wide range of activities and ministries offered at the Cathedral. Your ticket is valid for the hours posted that day.」 is actually commonly used as 10:00–17:00 or 11:00–17:00, and 17:00 is cleared on time (closes promptly at 5 pm).Sunday: The official clearly states 「Touring is not available during Sunday services」, and self-guided tour tickets are basically not sold on Sundays; if it is impossible to confirm whether the tour is open on a particular Sunday afternoon, you must check the calendar of cathedral.org day by day.The Garth Atrium and All Souls Memorial Garden are closed due to the Central tower project, and the official said that they will reopen "no earlier than the late autumn of 2026".
- `national-cathedral` **1. Washington National Cathedral**  
tickets: Self-guided Sightseeing: Adults $15, 5–12, children $10, students and the elderly 20% off from Monday to Wednesday.The ticket includes the Bloomberg Connections digital tour, the main and underground floors, the exhibitions, and the Tower Observation Gallery「when available」-that is, whether the viewing gallery is open is uncertain day by day, and there is no guarantee.Guided tours: Guided Spots Tour $20 / Children $15 (including 1 hour of explanation, after which you can continue to self-guided tour); Behind the Scenes Tour $35; Bell Tower Climb $50 (climb Level 333 to the bell room of the central tower, the whole journey is 70–90 minutes, there are height and age restrictions).Attending services and private prayers are always free
- `meridian-hill` **2. Meridian Hill Park (Malcolm X Park)**  
opening hours: May to October 05:00–24:00; November to April of the following year 05:00–21:00.The "open until midnight" file is applicable to the entire itinerary window from the end of September to the end of October. This is the only place in the area where you can calmly take night views.No closing day
- `meridian-hill` **2. Meridian Hill Park (Malcolm X Park)**  
tickets: Free
- `dumbarton-oaks` **3. Dumbarton Oaks Gardens**  
Opening hours: Regular season March 1st–October 31st: Admission to 14:00–18:00 and 17:30 is closed from Tuesday to Sunday, and the park is closed on Mondays and Federal Holidays.Additional closing days in 2026: October 8, 9, and 10 (tickets will not be sold on that day and season tickets will not be recognized).Winter 11/1–12/31: 14:00–17:00, 16:30 are closed for admission, and the park is also closed on Mondays and federal holidays.1/1–2/28 is closed all season.Note that Columbus Day / Indigenous Peoples' Day on October 12th is Monday. The park is closed and there is no additional conflict.
- `dumbarton-oaks` **3. Dumbarton Oaks Gardens**  
tickets: Regular season (3/1–10/31) $15/person, free for 2 years old and under.Winter (11/1–12/31) is free of charge, but advance reservation is still required
- `dumbarton-oaks` **3. Dumbarton Oaks Gardens**  
reservation: Timed tickets must be purchased in advance at Eventbrite. There is no ticket counter, no standby, and no standby on site.Tickets are timed admission, and holders can enter the park between the marked time and 17:30; each household is limited to 10 tickets per day; sold non-refundable (except when the park closes on its own); re-admission is not allowed.All 2026 season tickets have been sold out
- `exorcist-steps` **4. The Exorcist Steps, Cady's Alley & Georgetown Rowhouses**  
tickets: Free
- `georgetown-canal` **5. C&O Canal Georgetown & Georgetown Waterfront Park**  
tickets: free (neither C&amp;O Canal NHP nor Georgetown Waterfront Park accept tickets)
- `georgetown-canal` **5. C&O Canal Georgetown & Georgetown Waterfront Park**  
reservation: No reservation is required.The status of the canal cruise (Georgetown Heritage) is closed, and the goal is to resume sailing in the spring of 2027. No tickets are available this time.
- `cedar-hill` **6. Frederick Douglass National Historic Site (Cedar Hill)**  
opening hours: House tours are only available from Tuesday to Saturday (that is, you cannot enter the house on Sunday and Monday).Standard sessions: 9:00, 12:15, 13:15, 15:00, 15:30, and 16:00 sessions that are only opened in the month of 4–10, each session is 30 minutes and the upper limit is 10 people.There is also a Grounds Tour for 11:30 every day (outdoor, 15–20 people).Visitor center 4–10 month 9:00–17:00 (11–3 month 9:00–16:30).Reminder: The NPS guide page was last updated in August 2025. In 2024, it was reduced to only three days a week due to insufficient manpower. Whether it will still be Tuesday to Saturday in the fall of 2026 cannot be confirmed. Please call 771-208-1499 before departure.
- `cedar-hill` **6. Frederick Douglass National Historic Site (Cedar Hill)**  
tickets: Free tickets and admission fees.The only money is the online reservation service fee of $1/zhang

## P2 (36 pieces)


### dc / Philly Old City

- `reading-terminal-market` **1. Reading Terminal Market**  
reservation: No reservation required
- `christ-church` **4. Christ Church & Christ Church Burial Ground**  
reservation: walk-in is accepted in both places, no reservation is required.You can participate in the guided tour on site. For groups of more than 10 people, it is recommended to make an appointment by phone (215-922-1695 to 32).The official website also has an online prepaid page.
- `liberty-bell-center` **5. Liberty Bell Center**  
reservation: No reservation is required, no ticket is required, on a first-come, first-served basis, but you must go through security first.
- `museum-american-revolution` **7. Museum of the American Revolution**  
reservation: It is recommended to buy online (cheap $2 and can choose the time period).On-site tickets are available on a first-come, first-served basis and may be sold out.There is also an Any Day ticket (no date and time period specified, $27).All tickets include the same day and the next day.

### dc / Philly Parkway

- `boathouse-row` **2. Boathouse Row**  
reservation: No reservation required
- `fairmount-water-works` **3. Fairmount Water Works**  
reservation: No reservation required
- `swann-memorial-fountain` **6. Swann Memorial Fountain / Logan Square**  
reservation: No reservation required

### dc / National Mall

- `reflecting-pool-constitution-gardens` **1. Lincoln Memorial Reflecting Pool & Constitution Gardens**  
reservation: No reservation required
- `vietnam-veterans-memorial` **2. Vietnam Veterans Memorial (The Wall)**  
reservation: No reservation required
- `washington-monument` **3. Washington Monument**  
reservation: Timed tickets are required to reach the top.recreation.gov or 877-444-6777."Advance" tickets: 10:00 ET will be released at the whole point in the morning 30 days before the visit, and each ticket will be charged a non-refundable handling fee of $1.00; another batch of "previous day tickets" will be released at 15:00 ET the day before the visit (some official pages write "Previous day 10:00", the two caliber exist on the NPS and recreation.gov pages at the same time. If you fail to confirm which one will prevail, it is recommended to keep an eye on both time points).On the same day, free tickets will be issued from 8:45 at Washington Monument Lodge (15th St, between Madison and Jefferson Drive). One person (over 16 years old) can receive up to 6 tickets. Designated time slots are available on a first-come, first-served basis.In the peak season, be sure to register an account in advance and log in in advance
- `wwii-memorial` **4. National World War II Memorial**  
reservation: No reservation required
- `lincoln-memorial` **5. Lincoln Memorial**  
reservation: Main hall and steps: No reservation required.Undercroft Museum: Timed tickets are required (tickets are required for all staff over 2 years old).Advance tickets for recreation.gov or 877-444-6777 can be booked 30 days in advance. The daily inventory of 11:00 ET is released 30 days after the day, with a maximum of 6 tickets per order. Tickets are free but $1.00/single handling fee is charged; some advance tickets are released the day before the visit 16:00 ET.On the same day, free tickets are available at the Korean War Veterans Memorial ticket booth (Daniel Chester French Drive) 8:45 on a first-come, first-served basis. One person (over 16 years old) can get up to 6 tickets. There will be queues in advance during weekends and peak seasons.
- `korean-war-veterans-memorial` **6. Korean War Veterans Memorial**  
reservation: No reservation required
- `mlk-memorial` **7. Martin Luther King, Jr. Memorial**  
reservation: No reservation required
- `fdr-memorial` **8. Franklin Delano Roosevelt Memorial**  
reservation: No reservation required
- `jefferson-memorial` **9. Thomas Jefferson Memorial & Tidal Basin**  
reservation: No reservation required

### dc / Capitol Hill

- `union-station-dc` **1. Union Station**  
reservation: No reservation required
- `us-capitol` **3. United States Capitol**  
appointment: It is highly recommended to make an appointment, but it is not mandatory.Free timed guided tour tickets can be self-booked at visitthecapitol.gov/visit/book-a-tour 90 days in advance, or through the Senate office (public application window 7–90 days); you can also call 202.226.8000.The official requirement is to fill in the name of each visitor at least 2 days before the visit.You can still enter without an appointment: the Information Desk in Emancipation Hall issues a limited number of same-day tickets every day. The official recommendation is to be present before 14:30 at the latest.The House/Senate Gallery is not included in the guided tour, and a separate pass is required-foreign visitors with valid national identity documents (passports) go to the House and Senate Appointment Desk on the upper floor of the Visitor Center to obtain it on-site. No prior application is required.The Chinese guided tour is 8:40 once a day, and advance reservation is required
- `us-botanic-garden` **5. United States Botanic Garden Conservatory**  
reservation: No reservation is required.Official original text: 「Admission to the U.S. Botanic Garden is free. No tickets required.」 The only thing that needs to be applied for in advance is the tripod permit: write to Visitor Services Coordinator Victoria Gesell (victoria.gesell@aoc.gov) at least one week in advance, or go to the Conservatory service desk to apply on-site, the official stated that 「same-day permit requests are not guaranteed」

### dc / Museum Group

- `dc-npg-saam` **2. National Portrait Gallery + Smithsonian American Art Museum**  
reservation: No reservation is required, there is no ticketing system, just walk in
- `dc-fords` **3. Ford's Theatre and Petersen House**  
reservation: Everyone must have a ticket. The ticket itself is free, but each online order will charge a $5.00 handling fee (NPS original: 「The Ford's Theatre Society charges a $5.00 reservation fee for each ticket」).Each order is limited to 6 sheets; the handling fee is not exempted on the NPS free admission day, and the National park Annual Card cannot be deducted.On the same day, free tickets will be distributed at the box office from 8:30 on the same day. Each person is limited to 6 tickets and the number is limited. There may be no popular hours at all.NPS recommends buying at least one day in advance.Groups of more than 20 people write groups@fords.org.Booking and shift calendar: fords.org.Key operation: You must open the calendar of Ford's Theatre Society before booking tickets, and confirm whether your file contains the Theatre and Museum one by one-this is the only step that really requires a brainstorming at this attraction.
- `dc-nga` **5. National Gallery of Art (West Building + East Building)**  
reservation: No reservation required, no ticketing system
- `dc-nmnh` **6. Smithsonian National Museum of Natural History**  
reservation: No reservation is required, no tickets are required.Official clear 「No tickets are required」

### dc / N. Virginia

- `great-falls-park-virginia` **1. Great Falls Park (Virginia side)**  
reservation: No reservation is required.Separate permission is required for weddings (703-757-3101); permission is not required for conventional photography (including tripods) with less than 8 people, handheld equipment only, and non-exclusive venues
- `theodore-roosevelt-island` **2. Theodore Roosevelt Island**  
reservation: No reservation required
- `marine-corps-war-memorial` **3. United States Marine Corps War Memorial (Iwo Jima Memorial)**  
reservation: No reservation is required.Only commercial shooting, weddings and group events need to apply for permission, phone 703-289-2513
- `netherlands-carillon` **4. Netherlands Carillon**  
reservation: No reservation required
- `arlington-national-cemetery` **5. Arlington National Cemetery**  
reservation: No reservation is required, and both the cemetery and Arlington House are free of tickets and reservations.Tram tickets can be purchased on-site at the Welcome Center or online first, and no reservation is required
- `old-town-alexandria` **6. Old Town Alexandria**  
reservation: No reservation is required.King Street, the Waterfront, Captain's Row and Torpedo Factory Art Center are all free to open
- `mount-vernon` **7. Mount Vernon**  
reservation: The grounds pass is not mandatory to make an appointment, and can be bought on site; however, a timed ticket is required for visits to the mansion.Official original text: 「Entry to the Mansion requires a ticket, available during online checkout or at the gate.」 It is strongly recommended to book online first to get the desired time period-the official stated that when buying on-site during peak season and weekends, the earliest available mansion sessions may be more than two hours after arrival.$2 per person will be charged for online reservation of the mansion period

### dc / Georgetown and peripherals

- `national-cathedral` **1. Washington National Cathedral**  
reservation: It is recommended to purchase tickets at cathedral.org or tix.cathedral.org in advance for self-guided tours. Tickets can also be bought on site, but they will be full during popular hours.Tower climbing and behind-the-scenes guided tours must be booked in advance. They are open according to the schedule of docents, and there are few places.Groups of more than 20 people must apply in advance
- `meridian-hill` **2. Meridian Hill Park (Malcolm X Park)**  
reservation: no reservation is required (special use permit is required for events)
- `exorcist-steps` **4. The Exorcist Steps, Cady's Alley & Georgetown Rowhouses**  
opening hours: The ladder is a public right-of-way, open 24 hours a day and unmanaged; O/P Street and N Street are ordinary municipal roads, which are also accessible throughout the day.
- `exorcist-steps` **4. The Exorcist Steps, Cady's Alley & Georgetown Rowhouses**  
reservation: No reservation required
- `georgetown-canal` **5. C&O Canal Georgetown & Georgetown Waterfront Park**  
Opening hours: Georgetown Waterfront Park is open 24 hours a day.There is no fixed closing hour for the C&amp;O Canal, but Mile 0.4–1 in the Georgetown section has a construction bypass, and the surrounding area of the collapse point of the Level 1 north wall is closed. The bypass route takes adjacent streets and alleys, mostly within a mile of 0.3.The NPS status page shows that the Georgetown Visitor Center is 「Open」, but its specific daily opening hours cannot be confirmed from official channels. If you need a Passport stamp, please call 301-739-4200 first.
- `cedar-hill` **6. Frederick Douglass National Historic Site (Cedar Hill)**  
reservation: The interior of the house can only be accessed through the ranger guided tour.The official strongly recommends to make an appointment: recreation.gov (Facility 234636) or call 1-877-444-6777. Each ticket will charge a non-refundable reservation service fee of $1. You need to make an appointment one day in advance at the latest, and 6 months in advance at the earliest.The remaining tickets that have not been reserved are free of charge at the visitor center on a first-come, first-served basis, but they are often fully booked long in advance during popular hours.Groups of more than 11 people must make an appointment (1-877-559-6777, at least one week in advance, the same $1/person, school groups unified $10)
