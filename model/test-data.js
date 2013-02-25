var thelist = function() {
 //var objJson = {"GroupName":"D","count":4,"teams":[{"country":"England"}, {"country":"France"}, {"country":"Sweden"}, {"country":"Ukraine"}]};
  var url = 'http://ical2json.pb.io/schedule.sxsw.com/user_events/5f7c49aaf01a04507da7c951b784807233240fc1.ics';
  var request = require('request');
  
 /* request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var objJson = body; // Print the google web page.
    console.log(body);
  }
  
})
*/
 
 var objJson = {
  "VCALENDAR": {
    "X-WR-CALNAME": "Juan MacDowell's SXSW Schedule", 
    "CALSCALE": "GREGORIAN", 
    "VEVENT": [
      {
        "UID": "event_IAP16070", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16070", 
        "SUMMARY": "OMMA: Is Mobile Really a Branding Vehicle?", 
        "LOCATION": "AT&amp;T Conference Center Salon C\n1900 University Ave", 
        "DTEND": "20130308T103000", 
        "DTSTART": "20130308T093000"
      }, 
      {
        "UID": "event_IAP16073", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16073", 
        "SUMMARY": "OMMA: The Next Big Thing IS Not a Gadget", 
        "LOCATION": "AT&amp;T Conference Center Salon C\n1900 University Ave", 
        "DTEND": "20130308T120000", 
        "DTSTART": "20130308T110000"
      }, 
      {
        "UID": "event_IAP16074", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16074", 
        "SUMMARY": "OMMA: What Marketers Should Ask Themselves About Social", 
        "LOCATION": "AT&amp;T Conference Center Salon C\n1900 University Ave", 
        "DTEND": "20130308T133000", 
        "DTSTART": "20130308T123000"
      }, 
      {
        "UID": "event_IAP15620", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15620", 
        "SUMMARY": "Getting Started with Angel Investing", 
        "LOCATION": "Hilton Austin Downtown Salon ABC\n500 E 4th St", 
        "DTEND": "20130308T150000", 
        "DTSTART": "20130308T140000"
      }, 
      {
        "UID": "event_IAP15627", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15627", 
        "SUMMARY": "Social Health Startup Bootcamp:Investing in Health", 
        "LOCATION": "Hilton Austin Downtown Salon D\n500 E 4th St", 
        "DTEND": "20130308T150000", 
        "DTSTART": "20130308T140000"
      }, 
      {
        "UID": "event_FP990450", 
        "URL": "http://schedule.sxsw.com/2013/events/event_FP990450", 
        "SUMMARY": "A Beginner&#x27;s Guide to SXSW Film", 
        "LOCATION": "Austin Convention Center Room 16AB\n500 E Cesar Chavez St", 
        "DTEND": "20130308T150000", 
        "DTSTART": "20130308T140000"
      }, 
      {
        "UID": "event_IAP15973", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15973", 
        "SUMMARY": "Opening Remarks from Bre Pettis", 
        "LOCATION": "Austin Convention Center Exhibit Hall 5\n500 E Cesar Chavez St", 
        "DTEND": "20130308T150000", 
        "DTSTART": "20130308T140000"
      }, 
      {
        "UID": "event_IAP15969", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15969", 
        "SUMMARY": "Emerging Media &amp; Devices", 
        "LOCATION": "Wanderlust Wanderlust\n206 E 4th St", 
        "DTEND": "20130308T150000", 
        "DTSTART": "20130308T140000"
      }, 
      {
        "UID": "event_IAP2652", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2652", 
        "SUMMARY": "How to Find the Co-Founder of Your Dreams", 
        "LOCATION": "Courtyard Marriott Brazos\n300 E 4th St", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP1850", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1850", 
        "SUMMARY": "Building Successful Teams in Latin America", 
        "LOCATION": "Austin Convention Center Room 5ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP15773", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15773", 
        "SUMMARY": "Building the Touchy-Feely World of Tearaway", 
        "LOCATION": "Palmer Events Center Room 1-2\n900 Barton Springs Rd", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_FP990472", 
        "URL": "http://schedule.sxsw.com/2013/events/event_FP990472", 
        "SUMMARY": "#catvidfest: Is This the End of Art?", 
        "LOCATION": "Austin Convention Center Room 18ABCD\n500 E Cesar Chavez St", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP16102", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16102", 
        "SUMMARY": "Connected for Reconstruction", 
        "LOCATION": "Austin Convention Center Ballroom EF\n500 E Cesar Chavez St", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP4009", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4009", 
        "SUMMARY": "The Economy of the GIF", 
        "LOCATION": "Omni Downtown Longhorn\n700 San Jacinto", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP14579", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP14579", 
        "SUMMARY": "Disaster: The Future of Crisis Communications", 
        "LOCATION": "Austin Convention Center Room 9ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP2826", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2826", 
        "SUMMARY": "Designing Habits: From Big Data to Small Changes", 
        "LOCATION": "Sheraton Austin Creekside\n701 E 11th St", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP438", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP438", 
        "SUMMARY": "Enterprise Invades the Apps Playground", 
        "LOCATION": "Four Seasons San Jacinto Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP2836", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2836", 
        "SUMMARY": "Equity: Making the Most of Your Other Paycheck", 
        "LOCATION": "Courtyard Marriott Rio Grande Ballroom\n300 E 4th St", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP6353", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6353", 
        "SUMMARY": "Extreme GPS: Limits of Security &amp; Precision", 
        "LOCATION": "Omni Downtown Capital Ballroom\n700 San Jacinto", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP15562", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15562", 
        "SUMMARY": "Automotive Data &amp; the Future of Driving", 
        "LOCATION": "Wanderlust Wanderlust\n206 E 4th St", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP3374", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3374", 
        "SUMMARY": "Helping Aunt Ginny: Alzheimer\u2019s, Technology &amp; Me", 
        "LOCATION": "Sheraton Austin Capitol View North\n701 E 11th St", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP16030", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16030", 
        "SUMMARY": "Building Software-Powered Consumer Brands", 
        "LOCATION": "Hilton Austin Downtown Salon FGH\n500 E 4th St", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP4671", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4671", 
        "SUMMARY": "Lean Forward, Lean Back: Tablet News Experiences", 
        "LOCATION": "Austin Convention Center Ballroom BC\n500 E Cesar Chavez St", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP3353", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3353", 
        "SUMMARY": "I Know Where You&#x27;re Going: Location as Biometric", 
        "LOCATION": "Radisson Town Lake Town Lake Ballroom\n111 E Cesar Chavez", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP3234", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3234", 
        "SUMMARY": "Localore Plays Austin: Speaker&lt;&gt;Street&lt;&gt;Screen", 
        "LOCATION": "Austin Convention Center Room 12AB\n500 E Cesar Chavez St", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP2686", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2686", 
        "SUMMARY": "The Mechanics of Magic: 7 Game Design Insights", 
        "LOCATION": "Austin Convention Center Ballroom A\n500 E Cesar Chavez St", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP16076", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16076", 
        "SUMMARY": "OMMA: Marketing Implications of Facebook&#x27;s Graph Search", 
        "LOCATION": "AT&amp;T Conference Center Salon C\n1900 University Ave", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP4719", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4719", 
        "SUMMARY": "Survival Strategies for Brands in China", 
        "LOCATION": "Austin Convention Center Room 6AB\n500 E Cesar Chavez St", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP16012", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16012", 
        "SUMMARY": "Tales of US Entrepreneurship Beyond Silicon Valley", 
        "LOCATION": "Austin Convention Center Exhibit Hall 5\n500 E Cesar Chavez St", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP993209", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993209", 
        "SUMMARY": "This Week in Startups (TWiST): Health Tech Edition", 
        "LOCATION": "Hilton Austin Downtown Salon D\n500 E 4th St", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP16008", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16008", 
        "SUMMARY": "Toward the Unification of Physics", 
        "LOCATION": "Austin Convention Center Ballroom D\n500 E Cesar Chavez St", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP1144", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1144", 
        "SUMMARY": "What Can We Learn from the Unabomber?", 
        "LOCATION": "Sheraton Austin Capitol EFGH\n701 E 11th St", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP5365", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5365", 
        "SUMMARY": "Why Public Policy Should Matter to Your Startup", 
        "LOCATION": "Austin Convention Center Room 10AB\n500 E Cesar Chavez St", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP993469", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993469", 
        "SUMMARY": "BIT (Blacks in Technology) Programming", 
        "LOCATION": "Hilton Garden Inn Red River\n500 N IH 35", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP993220", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993220", 
        "SUMMARY": "5 Austin Startups That Can Get Profitable on &lt;$1M", 
        "LOCATION": "Hilton Austin Downtown Salon ABC\n500 E 4th St", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP2823", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2823", 
        "SUMMARY": "#catvidfest: Is This the End of Art?", 
        "LOCATION": "Austin Convention Center Room 18ABCD\n500 E Cesar Chavez St", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP15881", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15881", 
        "SUMMARY": "Architecture of the Air", 
        "LOCATION": "Hilton Austin Downtown Salon JK\n500 E 4th St", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP7393", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP7393", 
        "SUMMARY": "#ageofdamage: Be the Company You Want to Keep", 
        "LOCATION": "Four Seasons Four Seasons Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP15689", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15689", 
        "SUMMARY": "Games: Anyone. Anywhere. Anytime.", 
        "LOCATION": "Palmer Events Center Room 4-5\n900 Barton Springs Rd", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP993467", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993467", 
        "SUMMARY": "BIT (Blacks in Technology) Programming", 
        "LOCATION": "Hilton Garden Inn Colorado\n500 N IH 35", 
        "DTEND": "20130308T163000", 
        "DTSTART": "20130308T153000"
      }, 
      {
        "UID": "event_IAP3709", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3709", 
        "SUMMARY": "It&#x27;s Reddit&#x27;s Web. We Just Live In It", 
        "LOCATION": "Sheraton Austin Capitol EFGH\n701 E 11th St", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP5355", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5355", 
        "SUMMARY": "Latinos y Mobile: A Silver Bullet?", 
        "LOCATION": "Austin Convention Center Room 5ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP4676", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4676", 
        "SUMMARY": "Lean Forward &amp; Back: Social Video Can Have It All", 
        "LOCATION": "Austin Convention Center Room 12AB\n500 E Cesar Chavez St", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP2586", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2586", 
        "SUMMARY": "The Learn to Code Movement", 
        "LOCATION": "Austin Convention Center Ballroom BC\n500 E Cesar Chavez St", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_OE02262", 
        "URL": "http://schedule.sxsw.com/2013/events/event_OE02262", 
        "SUMMARY": "Machinima &amp; Rooster Teeth Present \u201cBlood, Sweat, and Online Videos: How to Achieve the Digital Dream\u201d", 
        "LOCATION": "Palmer Events Center Exhibit Hall 1\n900 Barton Springs Rd", 
        "DTEND": "20130308T174500", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP1498", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1498", 
        "SUMMARY": "Ninjaneering: Where Fine Art meets High Tech", 
        "LOCATION": "Omni Downtown Longhorn\n700 San Jacinto", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP15565", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15565", 
        "SUMMARY": "The New Screen for Marketing", 
        "LOCATION": "Wanderlust Wanderlust\n206 E 4th St", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP3595", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3595", 
        "SUMMARY": "Spreadable Media: Value, Meaning &amp; Network Culture", 
        "LOCATION": "Austin Convention Center Ballroom EF\n500 E Cesar Chavez St", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP2876", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2876", 
        "SUMMARY": "The Real Problem with Hiring: It&#x27;s Way Too Easy", 
        "LOCATION": "Courtyard Marriott Brazos\n300 E 4th St", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP4273", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4273", 
        "SUMMARY": "Quantified Year: 365 Days of Tracking Everything", 
        "LOCATION": "Sheraton Austin Creekside\n701 E 11th St", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP993210", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993210", 
        "SUMMARY": "Show Me the Money: Where to Find Funding", 
        "LOCATION": "Hilton Austin Downtown Salon D\n500 E 4th St", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP3034", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3034", 
        "SUMMARY": "Teaching Cheetahs: Disruptive Education in Africa", 
        "LOCATION": "Austin Convention Center Room 9ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP15931", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15931", 
        "SUMMARY": "Technology, Imagination &amp; Exponential Thinking", 
        "LOCATION": "Austin Convention Center Exhibit Hall 5\n500 E Cesar Chavez St", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP5627", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5627", 
        "SUMMARY": "Why the Neanderthals Were Lousy Entrepreneurs", 
        "LOCATION": "Courtyard Marriott Rio Grande Ballroom\n300 E 4th St", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP15842", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15842", 
        "SUMMARY": "Toys for Techies Meet Up", 
        "LOCATION": "Empire \n606 E 7th St", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP1620", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1620", 
        "SUMMARY": "Awe-Inspiring Web Typography You Can Do Now", 
        "LOCATION": "Austin Convention Center Ballroom A\n500 E Cesar Chavez St", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_FP990473", 
        "URL": "http://schedule.sxsw.com/2013/events/event_FP990473", 
        "SUMMARY": "How to Rank Better in Google &amp; Bing", 
        "LOCATION": "Austin Convention Center Room 18ABCD\n500 E Cesar Chavez St", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP15909", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15909", 
        "SUMMARY": "Mobilizing Ingenuity to Strengthen Global Security", 
        "LOCATION": "Hilton Austin Downtown Salon JK\n500 E 4th St", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP36", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP36", 
        "SUMMARY": "Data &amp; Gamification: Value to the Enterprise", 
        "LOCATION": "Four Seasons Four Seasons Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP16138", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16138", 
        "SUMMARY": "Voto Latino and National Voter Registration Day", 
        "LOCATION": "Austin Convention Center Room 6AB\n500 E Cesar Chavez St", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP16040", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16040", 
        "SUMMARY": "#pathonly: Social&#x27;s Shift Towards Real Privacy", 
        "LOCATION": "Hilton Austin Downtown Salon FGH\n500 E 4th St", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP5064", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5064", 
        "SUMMARY": "The New Nature vs. Nurture: Big Data &amp; Identity", 
        "LOCATION": "Radisson Town Lake Town Lake Ballroom\n111 E Cesar Chavez", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP993221", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993221", 
        "SUMMARY": "Move Your Startup to Austin... For Free!", 
        "LOCATION": "Hilton Austin Downtown Salon ABC\n500 E 4th St", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP5866", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5866", 
        "SUMMARY": "NASA: Sharing Space", 
        "LOCATION": "Omni Downtown Capital Ballroom\n700 San Jacinto", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP4000", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4000", 
        "SUMMARY": "Imitation as Innovation: Lessons from the Shanzhai", 
        "LOCATION": "Austin Convention Center Room 10AB\n500 E Cesar Chavez St", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP10481", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP10481", 
        "SUMMARY": "How to Rank Better in Google &amp; Bing", 
        "LOCATION": "Austin Convention Center Room 18ABCD\n500 E Cesar Chavez St", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP5402", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5402", 
        "SUMMARY": "Growing a Digital Business in Eastern Europe", 
        "LOCATION": "Four Seasons San Jacinto Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP993470", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993470", 
        "SUMMARY": "BIT (Blacks in Technology) Programming", 
        "LOCATION": "Hilton Garden Inn Red River\n500 N IH 35", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP993468", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993468", 
        "SUMMARY": "BIT (Blacks in Technology) Programming", 
        "LOCATION": "Hilton Garden Inn Colorado\n500 N IH 35", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP16077", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16077", 
        "SUMMARY": "Appy Awards Cocktail Party", 
        "LOCATION": "AT&amp;T Conference Center Salon C\n1900 University Ave", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP15730", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15730", 
        "SUMMARY": "Art of Akira: About the Art That Made the Anime", 
        "LOCATION": "Palmer Events Center Room 1-2\n900 Barton Springs Rd", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP5431", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5431", 
        "SUMMARY": "The Consumerization of Revolutions", 
        "LOCATION": "Austin Convention Center Ballroom D\n500 E Cesar Chavez St", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP5285", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5285", 
        "SUMMARY": "The Comfy Chair! Are We Sitting Too Much?", 
        "LOCATION": "Sheraton Austin Capitol View North\n701 E 11th St", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP15783", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15783", 
        "SUMMARY": "Games R Art", 
        "LOCATION": "Palmer Events Center Room 4-5\n900 Barton Springs Rd", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP4246", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4246", 
        "SUMMARY": "Female Orgasm: The Regenerative Human Technology", 
        "LOCATION": "Sheraton Austin Capitol ABCD\n701 E 11th St", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP4082", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4082", 
        "SUMMARY": "The $100bn Mobile Bullet Train Called Africa", 
        "LOCATION": "Austin Convention Center Room 6AB\n500 E Cesar Chavez St", 
        "DTEND": "20130309T103000", 
        "DTSTART": "20130309T093000"
      }, 
      {
        "UID": "event_IAP15820", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15820", 
        "SUMMARY": "Front End Legos: Reusable HTML &amp; CSS", 
        "LOCATION": "AT&amp;T Conference Center Classroom 105\n1900 University Ave", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T093000"
      }, 
      {
        "UID": "event_IAP15727", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15727", 
        "SUMMARY": "GEEKSTA PARADISE:The Ballers of Uber,Airbnb + GitHub", 
        "LOCATION": "Hilton Austin Downtown Salon ABC\n500 E 4th St", 
        "DTEND": "20130309T103000", 
        "DTSTART": "20130309T093000"
      }, 
      {
        "UID": "event_IAP3136", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3136", 
        "SUMMARY": "How Twitter Has Changed How We Watch TV", 
        "LOCATION": "Austin Convention Center Room 18ABCD\n500 E Cesar Chavez St", 
        "DTEND": "20130309T103000", 
        "DTSTART": "20130309T093000"
      }, 
      {
        "UID": "event_IAP4300", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4300", 
        "SUMMARY": "Sources in the Social Media Age", 
        "LOCATION": "Austin Convention Center Room 12AB\n500 E Cesar Chavez St", 
        "DTEND": "20130309T103000", 
        "DTSTART": "20130309T093000"
      }, 
      {
        "UID": "event_IAP5987", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5987", 
        "SUMMARY": "You Suck, Cleantech: How Design Can Help", 
        "LOCATION": "Austin Convention Center Ballroom BC\n500 E Cesar Chavez St", 
        "DTEND": "20130309T103000", 
        "DTSTART": "20130309T093000"
      }, 
      {
        "UID": "event_IAP7290", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP7290", 
        "SUMMARY": "Why Tiny Habits Give Big Results", 
        "LOCATION": "Austin Convention Center Ballroom D\n500 E Cesar Chavez St", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP11749", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP11749", 
        "SUMMARY": "The Next Frontier of Interactive: Smart Fashion", 
        "LOCATION": "Radisson Town Lake Town Lake Ballroom\n111 E Cesar Chavez", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP72", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP72", 
        "SUMMARY": "Nice Everything You Have There: Mindful Minecraft", 
        "LOCATION": "Palmer Events Center Room 1-2\n900 Barton Springs Rd", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP1873", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1873", 
        "SUMMARY": "On Creativity, Inspiration &amp; Doing the Work", 
        "LOCATION": "Hilton Austin Downtown Room 615AB\n500 E 4th St", 
        "DTEND": "20130309T111500", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP15971", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15971", 
        "SUMMARY": "Open Web Platform: Hopes &amp; Fears", 
        "LOCATION": "Austin Convention Center Exhibit Hall 5\n500 E Cesar Chavez St", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP1766", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1766", 
        "SUMMARY": "The Paradox of the Cloud", 
        "LOCATION": "Austin Convention Center Room 10AB\n500 E Cesar Chavez St", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP15487", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15487", 
        "SUMMARY": "Professions Go Social", 
        "LOCATION": "Courtyard Marriott Rio Grande Ballroom\n300 E 4th St", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP3987", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3987", 
        "SUMMARY": "Show&amp;Smell 2: Marketing Experiences Beyond Visual", 
        "LOCATION": "Omni Downtown Austin\n700 San Jacinto", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP3608", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3608", 
        "SUMMARY": "Sticky Experiences: A UX Love / Hate Story", 
        "LOCATION": "Proof Annex \n711 E 6th St", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP2834", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2834", 
        "SUMMARY": "Tech Overload, Marketing &amp; the Age of Annoyance", 
        "LOCATION": "Hilton Austin Downtown Room 616AB\n500 E 4th St", 
        "DTEND": "20130309T111500", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP3901", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3901", 
        "SUMMARY": "Time Shifting: Is Sports the Last One Standing?", 
        "LOCATION": "Hyatt Regency Austin Hill Country ABCD\n208 Barton Springs Rd", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP1535", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1535", 
        "SUMMARY": "Grabbing a Bottle Rocket-Making Techquisition Work", 
        "LOCATION": "Hyatt Regency Austin Big Bend\n208 Barton Springs Rd", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP15728", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15728", 
        "SUMMARY": "THE NAKED TRUTH: The Anatomy of a ROCKSTAR Product Cycle", 
        "LOCATION": "Hilton Austin Downtown Salon ABC\n500 E 4th St", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP5972", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5972", 
        "SUMMARY": "Get Ready to Rumble! How WWE Is Crushing Social TV", 
        "LOCATION": "Sheraton Austin Capitol EFGH\n701 E 11th St", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP3767", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3767", 
        "SUMMARY": "Frenemies: Fanning the Flames of Fandom", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 5-7\n208 Barton Springs Rd", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP4900", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4900", 
        "SUMMARY": "Crowd-Sourcing the Space Frontier", 
        "LOCATION": "Omni Downtown Lone Star\n700 San Jacinto", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP3855", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3855", 
        "SUMMARY": "Can You Hack It? Great Ideas in 24 Hours or Less", 
        "LOCATION": "Courtyard Marriott Brazos\n300 E 4th St", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP6092", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6092", 
        "SUMMARY": "The Creative Class in High Tech", 
        "LOCATION": "Sheraton Austin Capitol View South\n701 E 11th St", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP15572", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15572", 
        "SUMMARY": "Brand Fans, the New Brand Marketers", 
        "LOCATION": "Omni Downtown Capital Ballroom\n700 San Jacinto", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP15818", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15818", 
        "SUMMARY": "Beyond Work/Life: Changing the Debate &amp; Making Change", 
        "LOCATION": "Hilton Austin Downtown Salon JK\n500 E 4th St", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP5188", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5188", 
        "SUMMARY": "Beyond Mobile: Where No Geek Has Gone Before", 
        "LOCATION": "Austin Convention Center Ballroom BC\n500 E Cesar Chavez St", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP2736", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2736", 
        "SUMMARY": "Android\u2019s Principles for Designing the Future", 
        "LOCATION": "Austin Convention Center Ballroom A\n500 E Cesar Chavez St", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP4253", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4253", 
        "SUMMARY": "2012: Year of the GLI.TC/H", 
        "LOCATION": "Omni Downtown Longhorn\n700 San Jacinto", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP11406", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP11406", 
        "SUMMARY": "200M Reasons to Launch Your App in China", 
        "LOCATION": "Palmer Events Center Room 4-5\n900 Barton Springs Rd", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP5666", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5666", 
        "SUMMARY": "Making It Rain in Non-Techy Markets", 
        "LOCATION": "Four Seasons San Jacinto Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP5714", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5714", 
        "SUMMARY": "Innovating Philanthropy:Panera\u2019s Social Experiment", 
        "LOCATION": "Austin Convention Center Room 6AB\n500 E Cesar Chavez St", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP71", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP71", 
        "SUMMARY": "Indigenous Tweets, Visible Voices &amp; Technology", 
        "LOCATION": "Austin Convention Center Room 5ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP4238", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4238", 
        "SUMMARY": "iCritics: Showrunners Friends or Worst Enemies?", 
        "LOCATION": "Austin Convention Center Room 18ABCD\n500 E Cesar Chavez St", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP15496", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15496", 
        "SUMMARY": "Acquiring the Skill of Meta-Learning", 
        "LOCATION": "Hilton Austin Downtown Salon FGH\n500 E 4th St", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP3578", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3578", 
        "SUMMARY": "The Hacker&#x27;s Guide to the Galaxy", 
        "LOCATION": "Austin Convention Center Ballroom EF\n500 E Cesar Chavez St", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP7583", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP7583", 
        "SUMMARY": "The Grocery Store: Going \u201cTech\u201d Fresh to Survive", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 1-4\n208 Barton Springs Rd", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP1905", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1905", 
        "SUMMARY": "Too Long Didn&#x27;t Read: The Future of Indie Longform", 
        "LOCATION": "Austin Convention Center Room 12AB\n500 E Cesar Chavez St", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
      }, 
      {
        "UID": "event_IAP1008", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1008", 
        "SUMMARY": "The Laws of Subtraction: Rules to Innovate By", 
        "LOCATION": "Austin Convention Center Ballroom G\n500 E Cesar Chavez St", 
        "DTEND": "20130309T115000", 
        "DTSTART": "20130309T113000"
      }, 
      {
        "UID": "event_IAP4182", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4182", 
        "SUMMARY": "Going Social: You Got the Tux, but Can You Dance?", 
        "LOCATION": "Hilton Austin Downtown Room 616AB\n500 E 4th St", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T114500"
      }, 
      {
        "UID": "event_IAP286", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP286", 
        "SUMMARY": "Political Cartooning: From Dead Trees to Live Wire", 
        "LOCATION": "Hilton Austin Downtown Room 615AB\n500 E 4th St", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T114500"
      }, 
      {
        "UID": "event_IAP6280", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6280", 
        "SUMMARY": "Font Detective, Extra Bold", 
        "LOCATION": "Austin Convention Center Ballroom A\n500 E Cesar Chavez St", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T123000"
      }, 
      {
        "UID": "event_IAP15967", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15967", 
        "SUMMARY": "Leap Motion &amp; the Disappearing User Interface", 
        "LOCATION": "Austin Convention Center Exhibit Hall 5\n500 E Cesar Chavez St", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T123000"
      }, 
      {
        "UID": "event_IAP15950", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15950", 
        "SUMMARY": "Mobile Saturday: Location, Location, Location", 
        "LOCATION": "Wanderlust Wanderlust\n206 E 4th St", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T123000"
      }, 
      {
        "UID": "event_IAP3584", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3584", 
        "SUMMARY": "Screw the Valley, We Want to Build a Boulder", 
        "LOCATION": "Courtyard Marriott Brazos\n300 E 4th St", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T123000"
      }, 
      {
        "UID": "event_IAP1865", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1865", 
        "SUMMARY": "The Skin as Metaphor: Fashion, Technology &amp; Body", 
        "LOCATION": "Radisson Town Lake Town Lake Ballroom\n111 E Cesar Chavez", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T123000"
      }, 
      {
        "UID": "event_IAP15729", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15729", 
        "SUMMARY": "Steve Blank&#x27;s Startup Lessons", 
        "LOCATION": "Hilton Austin Downtown Salon ABC\n500 E 4th St", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T123000"
      }, 
      {
        "UID": "event_IAP53", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP53", 
        "SUMMARY": "Stop Staring at My Tumor, My Boobs Are Down Here", 
        "LOCATION": "Sheraton Austin Capitol View South\n701 E 11th St", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T123000"
      }, 
      {
        "UID": "event_IAP3828", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3828", 
        "SUMMARY": "Tweets from the DMZ: Social Media in North Korea", 
        "LOCATION": "Austin Convention Center Ballroom EF\n500 E Cesar Chavez St", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T123000"
      }, 
      {
        "UID": "event_IAP2601", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2601", 
        "SUMMARY": "When Does Selling Your Body = Golden Opportunity?", 
        "LOCATION": "Sheraton Austin Capitol ABCD\n701 E 11th St", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T123000"
      }, 
      {
        "UID": "event_IAP6764", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6764", 
        "SUMMARY": "Who Owns the Data? Self-Tracking to Health 2.0", 
        "LOCATION": "Sheraton Austin Creekside\n701 E 11th St", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T123000"
      }, 
      {
        "UID": "event_IAP2804", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2804", 
        "SUMMARY": "How Peep Culture Hacked Your Reputation &amp; Brain", 
        "LOCATION": "Sheraton Austin Capitol EFGH\n701 E 11th St", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T123000"
      }, 
      {
        "UID": "event_IAP1797", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1797", 
        "SUMMARY": "A Home on the Web: The State of Blogging in 2013", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 5-7\n208 Barton Springs Rd", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T123000"
      }, 
      {
        "UID": "event_IAP5472", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5472", 
        "SUMMARY": "Is There a West vs. East Journo Battle Brewing?", 
        "LOCATION": "Austin Convention Center Room 12AB\n500 E Cesar Chavez St", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T123000"
      }, 
      {
        "UID": "event_IAP15939", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15939", 
        "SUMMARY": "Diversity in Startups", 
        "LOCATION": "Driskill Hotel Maximilian\n604 Brazos St", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T123000"
      }, 
      {
        "UID": "event_IAP4373", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4373", 
        "SUMMARY": "Digital Telepathy: When Every Thing Connects", 
        "LOCATION": "Omni Downtown Lone Star\n700 San Jacinto", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T123000"
      }, 
      {
        "UID": "event_IAP5680", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5680", 
        "SUMMARY": "Digital Reality: Life in Two Worlds", 
        "LOCATION": "Austin Convention Center Ballroom D\n500 E Cesar Chavez St", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T123000"
      }, 
      {
        "UID": "event_IAP6341", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6341", 
        "SUMMARY": "Digital A-Z for B2B", 
        "LOCATION": "Four Seasons Four Seasons Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T123000"
      }, 
      {
        "UID": "event_IAP5459", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5459", 
        "SUMMARY": "Declaring War on IT Turnover", 
        "LOCATION": "Hyatt Regency Austin Big Bend\n208 Barton Springs Rd", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T123000"
      }, 
      {
        "UID": "event_IAP944", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP944", 
        "SUMMARY": "Deadliest Catch&#x27;s Twitter for Tough Guys", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 1-4\n208 Barton Springs Rd", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T123000"
      }, 
      {
        "UID": "event_IAP3453", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3453", 
        "SUMMARY": "David over Goliath: Power of the Sharing Economy", 
        "LOCATION": "Hilton Austin Downtown Salon JK\n500 E 4th St", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T123000"
      }, 
      {
        "UID": "event_IAP2399", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2399", 
        "SUMMARY": "Creativity &amp; Mayhem: Anonymous Communities at Work", 
        "LOCATION": "Austin Convention Center Room 9ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T123000"
      }, 
      {
        "UID": "event_IAP1052", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1052", 
        "SUMMARY": "Brainstorming Technology First", 
        "LOCATION": "Omni Downtown Austin\n700 San Jacinto", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T123000"
      }, 
      {
        "UID": "event_IAP993280", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993280", 
        "SUMMARY": "ATI/CTAN Austin Startup Fast Pitch", 
        "LOCATION": "Hilton Austin Downtown Austin Chamber Offices\n500 E 4th St", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T123000"
      }, 
      {
        "UID": "event_IAP11174", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP11174", 
        "SUMMARY": "3D Fashion: Nonstop Innovation in Production &amp; Fit", 
        "LOCATION": "Omni Downtown Longhorn\n700 San Jacinto", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T123000"
      }, 
      {
        "UID": "event_IAP2105", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2105", 
        "SUMMARY": "1 Coffee Pot, Many Disciplines: Why Space Matters", 
        "LOCATION": "Courtyard Marriott Rio Grande Ballroom\n300 E 4th St", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T123000"
      }, 
      {
        "UID": "event_IAP7222", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP7222", 
        "SUMMARY": "Insights About Innovation: David Sacks Fireside Chat", 
        "LOCATION": "Hilton Austin Downtown Salon FGH\n500 E 4th St", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T123000"
      }, 
      {
        "UID": "event_IAP2403", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2403", 
        "SUMMARY": "Innovation U.\u2014 Getting Great Ideas Out the Door", 
        "LOCATION": "Omni Downtown Capital Ballroom\n700 San Jacinto", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T123000"
      }, 
      {
        "UID": "event_IAP15581", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15581", 
        "SUMMARY": "How Tech Companies Should Pitch Hollywood", 
        "LOCATION": "Austin Convention Center Room 18ABCD\n500 E Cesar Chavez St", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T123000"
      }, 
      {
        "UID": "event_IAP3841", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3841", 
        "SUMMARY": "HTML5 &amp; the Mobile Browser Wars", 
        "LOCATION": "Austin Convention Center Ballroom BC\n500 E Cesar Chavez St", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T123000"
      }, 
      {
        "UID": "event_IAP5730", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5730", 
        "SUMMARY": "Plug Me In! Neural Interfaces for Musicians", 
        "LOCATION": "Hilton Austin Downtown Room 615AB\n500 E 4th St", 
        "DTEND": "20130309T130000", 
        "DTSTART": "20130309T124500"
      }, 
      {
        "UID": "event_IAP5620", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5620", 
        "SUMMARY": "Facing the Irony of More Friends &amp; Less Time", 
        "LOCATION": "Hilton Austin Downtown Room 616AB\n500 E 4th St", 
        "DTEND": "20130309T130000", 
        "DTSTART": "20130309T124500"
      }, 
      {
        "UID": "event_IAP993338", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993338", 
        "SUMMARY": "Elon Musk Keynote", 
        "LOCATION": "Austin Convention Center Exhibit Hall 5\n500 E Cesar Chavez St", 
        "DTEND": "20130309T150000", 
        "DTSTART": "20130309T140000"
      }, 
      {
        "UID": "event_IAP993242", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993242", 
        "SUMMARY": "Which Comes First: The Story or the Money?", 
        "LOCATION": "Hilton Austin Downtown Austin Chamber Offices\n500 E 4th St", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP3838", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3838", 
        "SUMMARY": "Life on the Line: Tweeting the Drug War", 
        "LOCATION": "Austin Convention Center Room 5ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP2396", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2396", 
        "SUMMARY": "Make It Rain with Mobile: Turn Data into Dollars", 
        "LOCATION": "Sheraton Austin Capitol ABCD\n701 E 11th St", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP2421", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2421", 
        "SUMMARY": "The Mobile 2nd Screen in Video Games &amp; Beyond", 
        "LOCATION": "Palmer Events Center Room 1-2\n900 Barton Springs Rd", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP15952", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15952", 
        "SUMMARY": "Mobile Saturday: Retail Is Going Mobile", 
        "LOCATION": "Wanderlust Wanderlust\n206 E 4th St", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP4911", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4911", 
        "SUMMARY": "Muppets to Mastery: UX Principles from Jim Henson", 
        "LOCATION": "Austin Convention Center Ballroom A\n500 E Cesar Chavez St", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP14913", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP14913", 
        "SUMMARY": "Never Give Up, Never Surrender: Tips from the Pros", 
        "LOCATION": "Palmer Events Center Room 4-5\n900 Barton Springs Rd", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP1490", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1490", 
        "SUMMARY": "Nonprofit Journalism: Survival of the Scrappiest", 
        "LOCATION": "Austin Convention Center Room 12AB\n500 E Cesar Chavez St", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP6261", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6261", 
        "SUMMARY": "Open Source Sex Science &amp; the PSIgasm Project", 
        "LOCATION": "Radisson Town Lake Town Lake Ballroom\n111 E Cesar Chavez", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP15912", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15912", 
        "SUMMARY": "How Electrical Signals Can Give You Superpowers", 
        "LOCATION": "Hilton Austin Downtown Salon JK\n500 E 4th St", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP7207", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP7207", 
        "SUMMARY": "Programming for Non-Programmers", 
        "LOCATION": "AT&amp;T Conference Center Classroom 204\n1900 University Ave", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP4932", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4932", 
        "SUMMARY": "Revealing Basketball&#x27;s 10 Hidden Positions", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 5-7\n208 Barton Springs Rd", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP407", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP407", 
        "SUMMARY": "The Rise of Contextual Social Networks", 
        "LOCATION": "Sheraton Austin Capitol EFGH\n701 E 11th St", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP2236", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2236", 
        "SUMMARY": "Talking with the &quot;Jon Stewart of the Arab World&quot;", 
        "LOCATION": "Austin Convention Center Room 6AB\n500 E Cesar Chavez St", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP5991", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5991", 
        "SUMMARY": "Turning PhD Concepts into Cocktail Conversations", 
        "LOCATION": "Hilton Austin Downtown Room 616AB\n500 E 4th St", 
        "DTEND": "20130309T154500", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP15732", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15732", 
        "SUMMARY": "Vinod Khosla,Dave McClure, &amp; the CTO of the USA!", 
        "LOCATION": "Hilton Austin Downtown Salon ABC\n500 E 4th St", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP6714", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6714", 
        "SUMMARY": "Unlocking Energy Data: The Green Button", 
        "LOCATION": "Austin Convention Center Room 10AB\n500 E Cesar Chavez St", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP264", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP264", 
        "SUMMARY": "Is Your Digital Ready for the Minority Majority?", 
        "LOCATION": "Hilton Austin Downtown Room 615AB\n500 E 4th St", 
        "DTEND": "20130309T154500", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP425", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP425", 
        "SUMMARY": "Why Your Brain Needs Negative Feedback", 
        "LOCATION": "Omni Downtown Lone Star\n700 San Jacinto", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP4129", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4129", 
        "SUMMARY": "The Future of Porn", 
        "LOCATION": "Austin Convention Center Ballroom D\n500 E Cesar Chavez St", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP4614", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4614", 
        "SUMMARY": "The Future Is Now: Futuristic UIs with HTML5", 
        "LOCATION": "AT&amp;T Conference Center Classroom 105\n1900 University Ave", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP12495", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP12495", 
        "SUMMARY": "Event Success Through New Tools &amp; Technologies", 
        "LOCATION": "Sheraton Austin Capitol View South\n701 E 11th St", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP4598", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4598", 
        "SUMMARY": "Doctors, Disasters &amp; Smartphone Apps", 
        "LOCATION": "Sheraton Austin Capitol View North\n701 E 11th St", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP803", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP803", 
        "SUMMARY": "Design &amp; Science: More Than a Pretty Picture", 
        "LOCATION": "Omni Downtown Longhorn\n700 San Jacinto", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP3719", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3719", 
        "SUMMARY": "Democracy Games: Civics for the Digital Age?", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 1-4\n208 Barton Springs Rd", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP4079", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4079", 
        "SUMMARY": "Creative Collaboration Using an Open Source Model", 
        "LOCATION": "Omni Downtown Austin\n700 San Jacinto", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP15278", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15278", 
        "SUMMARY": "Contagious Content: Making Healthy Behavior Stick", 
        "LOCATION": "Sheraton Austin Creekside\n701 E 11th St", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP6663", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6663", 
        "SUMMARY": "Comedy Tech: How Funny Stuff Shapes Our Future", 
        "LOCATION": "Austin Convention Center Room 18ABCD\n500 E Cesar Chavez St", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP15888", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15888", 
        "SUMMARY": "Chuck Lorre: In Conversation with Neil Gaiman", 
        "LOCATION": "Long Center Dell Hall\n701 W Riverside Dr", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP2294", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2294", 
        "SUMMARY": "Bootstrapping Pros &amp; Cons: Imgur\u2019s Experience", 
        "LOCATION": "Four Seasons Four Seasons Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP4859", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4859", 
        "SUMMARY": "Beyond UXD: Transforming Experience Through Design", 
        "LOCATION": "Omni Downtown Capital Ballroom\n700 San Jacinto", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP5014", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5014", 
        "SUMMARY": "Beyond Squishy: The Principles of Adaptive Design", 
        "LOCATION": "Austin Convention Center Ballroom BC\n500 E Cesar Chavez St", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP16038", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16038", 
        "SUMMARY": "Al Gore on The Future", 
        "LOCATION": "Austin Convention Center Exhibit Hall 5\n500 E Cesar Chavez St", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP5648", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5648", 
        "SUMMARY": "100 Mistakes from Contributor to Chief Officer", 
        "LOCATION": "Courtyard Marriott Brazos\n300 E 4th St", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP6422", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6422", 
        "SUMMARY": "How to Keep EFF &amp; the ACLU Off Your Ass", 
        "LOCATION": "Austin Convention Center Ballroom EF\n500 E Cesar Chavez St", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP6468", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6468", 
        "SUMMARY": "IEEE/W3C Open Future Meetup with Tim Berners-Lee", 
        "LOCATION": "Driskill Hotel Driskill Ballroom\n604 Brazos St", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP15701", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15701", 
        "SUMMARY": "Is there an Alternative to Ad-Supported Social Networking?", 
        "LOCATION": "Hilton Austin Downtown Salon FGH\n500 E 4th St", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP2266", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2266", 
        "SUMMARY": "Pop (Up) Culture", 
        "LOCATION": "Four Seasons San Jacinto Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP7473", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP7473", 
        "SUMMARY": "Your Desk Job Makes You Fat, Sick &amp; Dead", 
        "LOCATION": "Courtyard Marriott Rio Grande Ballroom\n300 E 4th St", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T153000"
      }, 
      {
        "UID": "event_IAP2062", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2062", 
        "SUMMARY": "Data Science Through the Lens of Journalism", 
        "LOCATION": "Hilton Austin Downtown Room 616AB\n500 E 4th St", 
        "DTEND": "20130309T160000", 
        "DTSTART": "20130309T154500"
      }, 
      {
        "UID": "event_IAP5105", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5105", 
        "SUMMARY": "Call of Duty: How STEM Can Change the Battlefield", 
        "LOCATION": "Hilton Austin Downtown Room 615AB\n500 E 4th St", 
        "DTEND": "20130309T160000", 
        "DTSTART": "20130309T154500"
      }, 
      {
        "UID": "event_IAP2108", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2108", 
        "SUMMARY": "Everything Is Not Important", 
        "LOCATION": "Hilton Austin Downtown Room 616AB\n500 E 4th St", 
        "DTEND": "20130309T161500", 
        "DTSTART": "20130309T160000"
      }, 
      {
        "UID": "event_IAP5184", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5184", 
        "SUMMARY": "The China Innovation Boom: Can the US Keep Up?", 
        "LOCATION": "Hilton Austin Downtown Room 615AB\n500 E 4th St", 
        "DTEND": "20130309T161500", 
        "DTSTART": "20130309T160000"
      }, 
      {
        "UID": "event_IAP239", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP239", 
        "SUMMARY": "Protecting Your Copyrights in Digital Media", 
        "LOCATION": "Hilton Austin Downtown Room 616AB\n500 E 4th St", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T161500"
      }, 
      {
        "UID": "event_IAP6194", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6194", 
        "SUMMARY": "How to Become An Overnight Sensation: 1000 Online Comments", 
        "LOCATION": "Hilton Austin Downtown Room 615AB\n500 E 4th St", 
        "DTEND": "20130309T163000", 
        "DTSTART": "20130309T161500"
      }, 
      {
        "UID": "event_IAP2591", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2591", 
        "SUMMARY": "Hacking Cities for a Better, Sustainable Tomorrow", 
        "LOCATION": "Austin Convention Center Room 9ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T170000"
      }, 
      {
        "UID": "event_IAP3427", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3427", 
        "SUMMARY": "Mobile&#x27;s Unmentionables", 
        "LOCATION": "Sheraton Austin Capitol View North\n701 E 11th St", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T170000"
      }, 
      {
        "UID": "event_IAP3173", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3173", 
        "SUMMARY": "Mosh Pit of Experts: The Future of Social", 
        "LOCATION": "Sheraton Austin Capitol View South\n701 E 11th St", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T170000"
      }, 
      {
        "UID": "event_IAP4359", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4359", 
        "SUMMARY": "New Aging: Design for the Older Gets Wiser", 
        "LOCATION": "Omni Downtown Longhorn\n700 San Jacinto", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T170000"
      }, 
      {
        "UID": "event_IAP12115", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP12115", 
        "SUMMARY": "NewsBots", 
        "LOCATION": "Austin Convention Center Room 12AB\n500 E Cesar Chavez St", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T170000"
      }, 
      {
        "UID": "event_IAP2089", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2089", 
        "SUMMARY": "Platforms for Haunting: The Talking Dead", 
        "LOCATION": "Radisson Town Lake Town Lake Ballroom\n111 E Cesar Chavez", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T170000"
      }, 
      {
        "UID": "event_IAP4450", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4450", 
        "SUMMARY": "Present Shock: When Everything Happens Now", 
        "LOCATION": "Austin Convention Center Ballroom D\n500 E Cesar Chavez St", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T170000"
      }, 
      {
        "UID": "event_IAP1228", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1228", 
        "SUMMARY": "The Punk Rock Guide to Working", 
        "LOCATION": "Courtyard Marriott Rio Grande Ballroom\n300 E 4th St", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T170000"
      }, 
      {
        "UID": "event_IAP3843", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3843", 
        "SUMMARY": "Smile: People Like Your Picture More Than Words", 
        "LOCATION": "Hilton Austin Downtown Room 616AB\n500 E 4th St", 
        "DTEND": "20130309T171500", 
        "DTSTART": "20130309T170000"
      }, 
      {
        "UID": "event_IAP3355", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3355", 
        "SUMMARY": "Real Talk: The Social Customer Service Shift", 
        "LOCATION": "Sheraton Austin Capitol EFGH\n701 E 11th St", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T170000"
      }, 
      {
        "UID": "event_IAP15693", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15693", 
        "SUMMARY": "The Information Diet", 
        "LOCATION": "Austin Convention Center Ballroom EF\n500 E Cesar Chavez St", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T170000"
      }, 
      {
        "UID": "event_IAP16137", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16137", 
        "SUMMARY": "Michael Pachter&#x27;s Gaming State of the Union 2013", 
        "LOCATION": "Palmer Events Center Room 1-2\n900 Barton Springs Rd", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T170000"
      }, 
      {
        "UID": "event_IAP5956", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5956", 
        "SUMMARY": "Indy Gaming: Why Publishers Must Evolve or Die", 
        "LOCATION": "Palmer Events Center Room 4-5\n900 Barton Springs Rd", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T170000"
      }, 
      {
        "UID": "event_IAP6304", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6304", 
        "SUMMARY": "Immigrate to Innovate: The American &quot;Pivot&quot;", 
        "LOCATION": "Hilton Austin Downtown Room 615AB\n500 E 4th St", 
        "DTEND": "20130309T171500", 
        "DTSTART": "20130309T170000"
      }, 
      {
        "UID": "event_IAP15499", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15499", 
        "SUMMARY": "How TV &amp; the Internet Are Converging on TMZ", 
        "LOCATION": "Austin Convention Center Room 18ABCD\n500 E Cesar Chavez St", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T170000"
      }, 
      {
        "UID": "event_IAP3896", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3896", 
        "SUMMARY": "How Cheating Death Helped Me Live Without Fear", 
        "LOCATION": "Hilton Austin Downtown Salon JK\n500 E 4th St", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T170000"
      }, 
      {
        "UID": "event_IAP4611", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4611", 
        "SUMMARY": "Anarchist to Sell-Out: Punks Make Better CEOs", 
        "LOCATION": "Omni Downtown Austin\n700 San Jacinto", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T170000"
      }, 
      {
        "UID": "event_IAP15733", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15733", 
        "SUMMARY": "BABY GOT (FEED)BACK: Measuring up with Hubspot, Sharethrough + Hotel Tonight", 
        "LOCATION": "Hilton Austin Downtown Salon ABC\n500 E 4th St", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T170000"
      }, 
      {
        "UID": "event_IAP3755", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3755", 
        "SUMMARY": "Breaking Out of Prison: Future of Incarceration", 
        "LOCATION": "Austin Convention Center Room 5ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T170000"
      }, 
      {
        "UID": "event_IAP2029", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2029", 
        "SUMMARY": "Curbing Crime with Data Extraction &amp; Ontologies", 
        "LOCATION": "Omni Downtown Capital Ballroom\n700 San Jacinto", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T170000"
      }, 
      {
        "UID": "event_IAP16143", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16143", 
        "SUMMARY": "Dating By Accident: Finding Love While You Tweet", 
        "LOCATION": "Hyatt Regency Austin Hill Country ABCD\n208 Barton Springs Rd", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T170000"
      }, 
      {
        "UID": "event_IAP2511", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2511", 
        "SUMMARY": "Designing for User Generated Chaos", 
        "LOCATION": "Austin Convention Center Ballroom BC\n500 E Cesar Chavez St", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T170000"
      }, 
      {
        "UID": "event_IAP5645", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5645", 
        "SUMMARY": "Does Social Marketing Even Work?", 
        "LOCATION": "Courtyard Marriott Brazos\n300 E 4th St", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T170000"
      }, 
      {
        "UID": "event_IAP6627", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6627", 
        "SUMMARY": "The Embodied Brain", 
        "LOCATION": "Sheraton Austin Creekside\n701 E 11th St", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T170000"
      }, 
      {
        "UID": "event_IAP1288", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1288", 
        "SUMMARY": "Flash Flood! Good, Bad &amp; Ugly Product Frenzies", 
        "LOCATION": "Four Seasons San Jacinto Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T170000"
      }, 
      {
        "UID": "event_IAP2598", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2598", 
        "SUMMARY": "Food Fight: Web Tech as Battleground for the Local", 
        "LOCATION": "Hyatt Regency Austin Big Bend\n208 Barton Springs Rd", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T170000"
      }, 
      {
        "UID": "event_IAP15856", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15856", 
        "SUMMARY": "Foundation: Chad Hurley &amp; Kevin Rose", 
        "LOCATION": "Hilton Austin Downtown Salon FGH\n500 E 4th St", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T170000"
      }, 
      {
        "UID": "event_IAP1351", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1351", 
        "SUMMARY": "The Global Fight to Democratize Access to Capital", 
        "LOCATION": "Four Seasons Four Seasons Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T170000"
      }, 
      {
        "UID": "event_IAP3255", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3255", 
        "SUMMARY": "Hooking Up Happier: Design Insight from Grindr", 
        "LOCATION": "Austin Convention Center Room 10AB\n500 E Cesar Chavez St", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T170000"
      }, 
      {
        "UID": "event_IAP6245", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6245", 
        "SUMMARY": "Branding on the Moon: Marketing in the Middle East", 
        "LOCATION": "Hilton Austin Downtown Room 615AB\n500 E 4th St", 
        "DTEND": "20130309T173000", 
        "DTSTART": "20130309T171500"
      }, 
      {
        "UID": "event_IAP5858", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5858", 
        "SUMMARY": "Why Hispanics Love Toyota &amp; Hate Sofia Vergara", 
        "LOCATION": "Hilton Austin Downtown Room 615AB\n500 E 4th St", 
        "DTEND": "20130309T174500", 
        "DTSTART": "20130309T173000"
      }, 
      {
        "UID": "event_IAP3631", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3631", 
        "SUMMARY": "Designing for Real-Time Marketing", 
        "LOCATION": "Hilton Austin Downtown Room 616AB\n500 E 4th St", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T174500"
      }, 
      {
        "UID": "event_IAP3561", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3561", 
        "SUMMARY": "Growing a Business in a Submerged Economy (Greece)", 
        "LOCATION": "Hilton Austin Downtown Room 615AB\n500 E 4th St", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T174500"
      }, 
      {
        "UID": "event_IAP993466", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993466", 
        "SUMMARY": "BIT (Blacks in Technology) Programming", 
        "LOCATION": "Hilton Garden Inn Colorado\n500 N IH 35", 
        "DTEND": "20130310T103000", 
        "DTSTART": "20130310T093000"
      }, 
      {
        "UID": "event_IAP15632", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15632", 
        "SUMMARY": "Digital Health Changes Everything", 
        "LOCATION": "Hilton Austin Downtown Room 400/402\n500 E 4th St", 
        "DTEND": "20130310T103000", 
        "DTSTART": "20130310T093000"
      }, 
      {
        "UID": "event_IAP15530", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15530", 
        "SUMMARY": "Data, Storytelling and Breaking Through the Noise", 
        "LOCATION": "Wanderlust Wanderlust\n206 E 4th St", 
        "DTEND": "20130310T103000", 
        "DTSTART": "20130310T093000"
      }, 
      {
        "UID": "event_IAP993457", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993457", 
        "SUMMARY": "BIT (Blacks in Technology) Programming", 
        "LOCATION": "Hilton Garden Inn Red River\n500 N IH 35", 
        "DTEND": "20130310T103000", 
        "DTSTART": "20130310T093000"
      }, 
      {
        "UID": "event_IAP14853", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP14853", 
        "SUMMARY": "HATCH Startup Pitch Competition Part 1", 
        "LOCATION": "Hilton Austin Downtown Salon D\n500 E 4th St", 
        "DTEND": "20130310T103000", 
        "DTSTART": "20130310T093000"
      }, 
      {
        "UID": "event_IAP15873", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15873", 
        "SUMMARY": "Introduction to Adobe Edge Tools &amp; Services", 
        "LOCATION": "Radisson Town Lake Town Lake Ballroom\n111 E Cesar Chavez", 
        "DTEND": "20130310T103000", 
        "DTSTART": "20130310T093000"
      }, 
      {
        "UID": "event_IAP15708", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15708", 
        "SUMMARY": "The Making of DOOM", 
        "LOCATION": "Hilton Austin Downtown Salon JK\n500 E 4th St", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP5449", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5449", 
        "SUMMARY": "Now You See Me: The Future of Ambient Location", 
        "LOCATION": "Sheraton Austin Capitol ABCD\n701 E 11th St", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP3470", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3470", 
        "SUMMARY": "Participatory Budgeting: Crowdsourcing for Real", 
        "LOCATION": "Austin Convention Center Room 5ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP4245", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4245", 
        "SUMMARY": "Pitchforks &amp; Printed Electronics", 
        "LOCATION": "Austin Convention Center Room 12AB\n500 E Cesar Chavez St", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP1379", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1379", 
        "SUMMARY": "Poetry in Motion: Sound Culture &amp; Data Mining", 
        "LOCATION": "Omni Downtown Austin\n700 San Jacinto", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP4957", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4957", 
        "SUMMARY": "The Secrets of Generation Flux", 
        "LOCATION": "Four Seasons San Jacinto Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP5360", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5360", 
        "SUMMARY": "Re-Imagining Toys: Merging the Physical &amp; Digital", 
        "LOCATION": "Palmer Events Center Room 1-2\n900 Barton Springs Rd", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP3950", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3950", 
        "SUMMARY": "Racism on YouTube", 
        "LOCATION": "Austin Convention Center Room 6AB\n500 E Cesar Chavez St", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP5090", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5090", 
        "SUMMARY": "Self-Publishing in the Age of E", 
        "LOCATION": "Courtyard Marriott Rio Grande Ballroom\n300 E 4th St", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP12458", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP12458", 
        "SUMMARY": "Shooting, Producing, Selling: Secrets of Web TV", 
        "LOCATION": "Austin Convention Center Room 18ABCD\n500 E Cesar Chavez St", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP5341", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5341", 
        "SUMMARY": "Who Run the (Internet) World: Women", 
        "LOCATION": "Sheraton Austin Capitol EFGH\n701 E 11th St", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP13364", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP13364", 
        "SUMMARY": "The Violinist&#x27;s Thumb", 
        "LOCATION": "Hilton Austin Downtown Salon FGH\n500 E 4th St", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP3593", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3593", 
        "SUMMARY": "A Movement Online to End Female Genital Cutting", 
        "LOCATION": "Austin Convention Center Room 10AB\n500 E Cesar Chavez St", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP1028", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1028", 
        "SUMMARY": "Conscious Capitalism: Liberating the Heroic Spirit of Business", 
        "LOCATION": "Austin Convention Center Ballroom D\n500 E Cesar Chavez St", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP15691", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15691", 
        "SUMMARY": "Andy Rubin Conversation with Guy Kawasaki", 
        "LOCATION": "Austin Convention Center Exhibit Hall 5\n500 E Cesar Chavez St", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP654", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP654", 
        "SUMMARY": "Consumer Data: Can I Get Satisfaction?", 
        "LOCATION": "Four Seasons Four Seasons Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP15874", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15874", 
        "SUMMARY": "Concept to Reality: Creating Adobe Edge Reflow", 
        "LOCATION": "Radisson Town Lake Town Lake Ballroom\n111 E Cesar Chavez", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP993458", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993458", 
        "SUMMARY": "BIT (Blacks in Technology) Programming", 
        "LOCATION": "Hilton Garden Inn Red River\n500 N IH 35", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP993465", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993465", 
        "SUMMARY": "BIT (Blacks in Technology) Programming", 
        "LOCATION": "Hilton Garden Inn Colorado\n500 N IH 35", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP4032", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4032", 
        "SUMMARY": "Big Heritage, Big Quilts &amp; Big Canvases", 
        "LOCATION": "Austin Convention Center Room 9ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP4124", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4124", 
        "SUMMARY": "Beyond Hubble: NASA&#x27;s Next Great Telescope (JWST)", 
        "LOCATION": "Omni Downtown Lone Star\n700 San Jacinto", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP1472", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1472", 
        "SUMMARY": "The Best Interface Is No Interface", 
        "LOCATION": "Austin Convention Center Ballroom A\n500 E Cesar Chavez St", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP15932", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15932", 
        "SUMMARY": "Airbnb&#x27;s Brian Chesky Talks with Fortune", 
        "LOCATION": "Hilton Austin Downtown Salon ABC\n500 E 4th St", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP5699", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5699", 
        "SUMMARY": "mHealth: Take Two Apps &amp; Call Me in the Morning", 
        "LOCATION": "Sheraton Austin Creekside\n701 E 11th St", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP1793", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1793", 
        "SUMMARY": "Maintaining Responsive Integrity in WordPress", 
        "LOCATION": "Austin Convention Center Ballroom BC\n500 E Cesar Chavez St", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP993192", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993192", 
        "SUMMARY": "The \u201cMade in Banff\u201d Digital Media Pitch Session", 
        "LOCATION": "Hilton Austin Downtown Room 400/402\n500 E 4th St", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP15996", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15996", 
        "SUMMARY": "Journalism by #s: Data Will Change Nature of News", 
        "LOCATION": "Wanderlust Wanderlust\n206 E 4th St", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP1953", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1953", 
        "SUMMARY": "Is Women&#x27;s Media Too Girly?", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 1-4\n208 Barton Springs Rd", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP993201", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993201", 
        "SUMMARY": "HATCH Startup Pitch Competition Part 2", 
        "LOCATION": "Hilton Austin Downtown Salon D\n500 E 4th St", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP993477", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993477", 
        "SUMMARY": "Current Trends at SXSW Interactive", 
        "LOCATION": "Austin Convention Center Ballroom EF\n500 E Cesar Chavez St", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP2793", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2793", 
        "SUMMARY": "Hacking the Crowd: Artists as Entrepreneurs", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 5-7\n208 Barton Springs Rd", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP4472", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4472", 
        "SUMMARY": "Going Graphic with the News", 
        "LOCATION": "Omni Downtown Longhorn\n700 San Jacinto", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP15906", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15906", 
        "SUMMARY": "Fueling Austin&#x27;s Tech Industry with Education", 
        "LOCATION": "Hilton Austin Downtown Austin Chamber Offices\n500 E 4th St", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP2315", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2315", 
        "SUMMARY": "Designing Games for Realism: What\u2019s Real Enough?", 
        "LOCATION": "Palmer Events Center Room 4-5\n900 Barton Springs Rd", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP5375", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5375", 
        "SUMMARY": "Crowdsourced Small Volume Vehicle Manufacturing", 
        "LOCATION": "Omni Downtown Capital Ballroom\n700 San Jacinto", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_OE02243", 
        "URL": "http://schedule.sxsw.com/2013/events/event_OE02243", 
        "SUMMARY": "Shadowrun Returns Sneak Peak", 
        "LOCATION": "Palmer Events Center \n900 Barton Springs Rd", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP16103", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16103", 
        "SUMMARY": "Shadowrun Returns Sneak Peek", 
        "LOCATION": "Palmer Events Center Room 1-2\n900 Barton Springs Rd", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP1324", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1324", 
        "SUMMARY": "Slap My Words Up: Language in the Digital World", 
        "LOCATION": "Omni Downtown Lone Star\n700 San Jacinto", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP1050", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1050", 
        "SUMMARY": "Startups@DC: Max Political Impact, Minimum Effort", 
        "LOCATION": "Austin Convention Center Room 5ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP6116", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6116", 
        "SUMMARY": "Telepresence Design Revolution", 
        "LOCATION": "Sheraton Austin Creekside\n701 E 11th St", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP15988", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15988", 
        "SUMMARY": "What&#x27;s New in Adobe Creative Cloud?", 
        "LOCATION": "Radisson Town Lake Town Lake Ballroom\n111 E Cesar Chavez", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP768", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP768", 
        "SUMMARY": "The Secret Dangers of Online Influence Marketing", 
        "LOCATION": "Four Seasons San Jacinto Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP3115", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3115", 
        "SUMMARY": "Say Goodbye to Corporate Marketing as You Know It", 
        "LOCATION": "Sheraton Austin Capitol ABCD\n701 E 11th St", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP137", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP137", 
        "SUMMARY": "The Real Responsive Process?", 
        "LOCATION": "Austin Convention Center Ballroom BC\n500 E Cesar Chavez St", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP7546", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP7546", 
        "SUMMARY": "Profit + Purpose.  The New Normal.", 
        "LOCATION": "Austin Convention Center Room 9ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP4140", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4140", 
        "SUMMARY": "Physical Products &amp; the New Distribution Model", 
        "LOCATION": "Austin Convention Center Room 12AB\n500 E Cesar Chavez St", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP2828", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2828", 
        "SUMMARY": "Old Tech, New Tech, Same Old Sex?", 
        "LOCATION": "Sheraton Austin Capitol EFGH\n701 E 11th St", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP4239", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4239", 
        "SUMMARY": "Mythbusting: Engineering a Viral Video", 
        "LOCATION": "Austin Convention Center Room 18ABCD\n500 E Cesar Chavez St", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP993191", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993191", 
        "SUMMARY": "Mobile Innovations Presented by Wavefront", 
        "LOCATION": "Hilton Austin Downtown Room 400/402\n500 E 4th St", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP993282", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993282", 
        "SUMMARY": "Longhorn Startup Showcase", 
        "LOCATION": "Hilton Austin Downtown Austin Chamber Offices\n500 E 4th St", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP6442", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6442", 
        "SUMMARY": "Idea Orphans", 
        "LOCATION": "Omni Downtown Austin\n700 San Jacinto", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP2856", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2856", 
        "SUMMARY": "How to Start a Game Company Incubator in a School", 
        "LOCATION": "Palmer Events Center Room 4-5\n900 Barton Springs Rd", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP15589", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15589", 
        "SUMMARY": "How Self-Tracking Geeks are Shaping our Future", 
        "LOCATION": "Wanderlust Wanderlust\n206 E 4th St", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP993202", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993202", 
        "SUMMARY": "HATCH Startup Pitch Competition Part 3 + Awards", 
        "LOCATION": "Hilton Austin Downtown Salon D\n500 E 4th St", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP4029", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4029", 
        "SUMMARY": "Hacking the News Around the World", 
        "LOCATION": "Omni Downtown Longhorn\n700 San Jacinto", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP4229", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4229", 
        "SUMMARY": "Fighting for Funding as a Female Entrepreneur", 
        "LOCATION": "Hilton Austin Downtown Salon ABC\n500 E 4th St", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP4255", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4255", 
        "SUMMARY": "Ermahgerd: Cyberbullying", 
        "LOCATION": "Austin Convention Center Room 10AB\n500 E Cesar Chavez St", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP3135", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3135", 
        "SUMMARY": "Eat. Blog. Publish: Internet to Paper Hit", 
        "LOCATION": "Courtyard Marriott Rio Grande Ballroom\n300 E 4th St", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP15566", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15566", 
        "SUMMARY": "Digital Disruption: Brands as Culture Participants", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 5-7\n208 Barton Springs Rd", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP3160", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3160", 
        "SUMMARY": "Black Vernacular: Reading New Media", 
        "LOCATION": "Austin Convention Center Room 6AB\n500 E Cesar Chavez St", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP993459", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993459", 
        "SUMMARY": "BIT (Blacks in Technology) Programming", 
        "LOCATION": "Hilton Garden Inn Red River\n500 N IH 35", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP993464", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993464", 
        "SUMMARY": "BIT (Blacks in Technology) Programming", 
        "LOCATION": "Hilton Garden Inn Colorado\n500 N IH 35", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP2593", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2593", 
        "SUMMARY": "Behavior Change as Value Proposition", 
        "LOCATION": "Austin Convention Center Ballroom A\n500 E Cesar Chavez St", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP5802", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5802", 
        "SUMMARY": "3D Printing for People with Disabilities", 
        "LOCATION": "Omni Downtown Capital Ballroom\n700 San Jacinto", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP1564", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1564", 
        "SUMMARY": "Angry Nerds: Being Human in the Digital Age", 
        "LOCATION": "Austin Convention Center Ballroom EF\n500 E Cesar Chavez St", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP993588", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993588", 
        "SUMMARY": "A Conversation with MSNBC\u2019s Rachel Maddow", 
        "LOCATION": "Austin Convention Center Exhibit Hall 5\n500 E Cesar Chavez St", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP5309", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5309", 
        "SUMMARY": "Go Fund Yourself", 
        "LOCATION": "Austin Convention Center Ballroom D\n500 E Cesar Chavez St", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP6682", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6682", 
        "SUMMARY": "Innovation &amp; Leadership in the Agile Age", 
        "LOCATION": "Hilton Austin Downtown Salon FGH\n500 E 4th St", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP15561", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15561", 
        "SUMMARY": "Jiro Dreams of Game Design", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 1-4\n208 Barton Springs Rd", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP7328", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP7328", 
        "SUMMARY": "Outsourcing Startup Operations", 
        "LOCATION": "Four Seasons Four Seasons Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130310T133000", 
        "DTSTART": "20130310T123000"
      }, 
      {
        "UID": "event_IAP6493", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6493", 
        "SUMMARY": "Toddlers &amp; Technology", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 1-4\n208 Barton Springs Rd", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP4043", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4043", 
        "SUMMARY": "Who&#x27;s Afraid of the Big, Bad Drone?", 
        "LOCATION": "Omni Downtown Longhorn\n700 San Jacinto", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP4644", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4644", 
        "SUMMARY": "Your Outsourcer\u2019s Outsourcer Will Be a Robot", 
        "LOCATION": "Courtyard Marriott Rio Grande Ballroom\n300 E 4th St", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP15725", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15725", 
        "SUMMARY": "Mobile Disruption &amp; the Rise of the Local Web", 
        "LOCATION": "Hilton Austin Downtown Salon JK\n500 E 4th St", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP4377", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4377", 
        "SUMMARY": "Stand Alone JavaScript Build Tools", 
        "LOCATION": "Austin Convention Center Ballroom BC\n500 E Cesar Chavez St", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP5646", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5646", 
        "SUMMARY": "Taking Social Games from Pink to Blue", 
        "LOCATION": "Palmer Events Center Room 4-5\n900 Barton Springs Rd", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP2443", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2443", 
        "SUMMARY": "Shaping the Future of Play Is Serious Work", 
        "LOCATION": "Sheraton Austin Capitol EFGH\n701 E 11th St", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP15999", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15999", 
        "SUMMARY": "Responsive Design, From Every Angle", 
        "LOCATION": "Radisson Town Lake Town Lake Ballroom\n111 E Cesar Chavez", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP6755", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6755", 
        "SUMMARY": "Redefining Political Tech &amp; Civic Participation", 
        "LOCATION": "Austin Convention Center Room 9ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP15564", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15564", 
        "SUMMARY": "Physical &amp; Digital Collide: Retail Rewired", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 5-7\n208 Barton Springs Rd", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP993194", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993194", 
        "SUMMARY": "New Storytelling with Canadian Broadcasters", 
        "LOCATION": "Hilton Austin Downtown Room 400/402\n500 E 4th St", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP10152", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP10152", 
        "SUMMARY": "Landing NASA\u2019s Curiosity Rover Online (&amp; Mars!)", 
        "LOCATION": "Omni Downtown Lone Star\n700 San Jacinto", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP5945", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5945", 
        "SUMMARY": "Is This Progress? More Meaning in Our Digital Life", 
        "LOCATION": "Austin Convention Center Ballroom EF\n500 E Cesar Chavez St", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP1375", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1375", 
        "SUMMARY": "Industrial Revolution 3.0 &amp; Future of 3D Printing", 
        "LOCATION": "Omni Downtown Capital Ballroom\n700 San Jacinto", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP5118", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5118", 
        "SUMMARY": "Improve Your Business with Open Source Principles", 
        "LOCATION": "Four Seasons Four Seasons Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP15722", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15722", 
        "SUMMARY": "How Can Brands We Love, Tell Stories We Share?", 
        "LOCATION": "Austin Convention Center Ballroom G\n500 E Cesar Chavez St", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP15974", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15974", 
        "SUMMARY": "Funded in Austin", 
        "LOCATION": "Hilton Austin Downtown Austin Chamber Offices\n500 E 4th St", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP993199", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993199", 
        "SUMMARY": "DreamIt Ventures Finding &amp; Managing Co-Founders", 
        "LOCATION": "Hilton Austin Downtown Salon D\n500 E 4th St", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP2429", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2429", 
        "SUMMARY": "Does Scale Matter in Healthcare?", 
        "LOCATION": "Sheraton Austin Creekside\n701 E 11th St", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP4527", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4527", 
        "SUMMARY": "Decisions Based on Quality, Not Anecdotes", 
        "LOCATION": "Hilton Austin Downtown Salon ABC\n500 E 4th St", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP6735", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6735", 
        "SUMMARY": "Cultivating the New Minority Entrepreneur", 
        "LOCATION": "Austin Convention Center Room 6AB\n500 E Cesar Chavez St", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP993616", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993616", 
        "SUMMARY": "Crossing the Line: Why Comedians Don&#x27;t Give A F*ck If You&#x27;re Offended", 
        "LOCATION": "Austin Convention Center Room 18ABCD\n500 E Cesar Chavez St", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP6032", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6032", 
        "SUMMARY": "Cross-Platform Gaming Takes Back the Living Room", 
        "LOCATION": "Palmer Events Center Room 1-2\n900 Barton Springs Rd", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP4623", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4623", 
        "SUMMARY": "Copyright &amp; Disruptive Technologies", 
        "LOCATION": "Austin Convention Center Room 12AB\n500 E Cesar Chavez St", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP2210", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2210", 
        "SUMMARY": "Can&#x27;t Buy Me Like", 
        "LOCATION": "Sheraton Austin Capitol ABCD\n701 E 11th St", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP993463", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993463", 
        "SUMMARY": "BIT (Blacks in Technology) Programming", 
        "LOCATION": "Hilton Garden Inn Colorado\n500 N IH 35", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP993460", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993460", 
        "SUMMARY": "BIT (Blacks in Technology) Programming", 
        "LOCATION": "Hilton Garden Inn Red River\n500 N IH 35", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP15588", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15588", 
        "SUMMARY": "Big Data Democracy: The Rise of Analytics", 
        "LOCATION": "Wanderlust Wanderlust\n206 E 4th St", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP1107", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1107", 
        "SUMMARY": "The Athena Doctrine: Rise of Feminine Values", 
        "LOCATION": "Austin Convention Center Room 10AB\n500 E Cesar Chavez St", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP2789", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2789", 
        "SUMMARY": "Art, Activism &amp; Augmented Reality", 
        "LOCATION": "Omni Downtown Austin\n700 San Jacinto", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP1505", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1505", 
        "SUMMARY": "Arrogance &amp; Confidence in Design", 
        "LOCATION": "Austin Convention Center Ballroom A\n500 E Cesar Chavez St", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP2633", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2633", 
        "SUMMARY": "Apps for Autism", 
        "LOCATION": "Austin Convention Center Room 5ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP15945", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15945", 
        "SUMMARY": "Gates of Heaven, Gates of Hell", 
        "LOCATION": "Hilton Austin Downtown Salon FGH\n500 E 4th St", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP5176", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5176", 
        "SUMMARY": "Can Ad Agencies &amp; Brands Humanize Technology?", 
        "LOCATION": "Four Seasons San Jacinto Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
      }, 
      {
        "UID": "event_IAP16003", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16003", 
        "SUMMARY": "Style Goes Viral: The Future of Fashion", 
        "LOCATION": "Long Center Dell Hall\n701 W Riverside Dr", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP4664", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4664", 
        "SUMMARY": "PBS&#x27; Digital Evolution", 
        "LOCATION": "Austin Convention Center Ballroom EF\n500 E Cesar Chavez St", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP15965", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15965", 
        "SUMMARY": "Building Tools for Creativity", 
        "LOCATION": "Austin Convention Center Ballroom D\n500 E Cesar Chavez St", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP5529", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5529", 
        "SUMMARY": "Affinity, Intent &amp; the War for Marketing Dollars", 
        "LOCATION": "Four Seasons San Jacinto Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP5041", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5041", 
        "SUMMARY": "Bisected Realities: ParaNorman&#x27;s 2-Bit Bub Game", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 5-7\n208 Barton Springs Rd", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP1444", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1444", 
        "SUMMARY": "Zombies, Run! Transforming Fitness, Games &amp; Story", 
        "LOCATION": "Palmer Events Center Room 4-5\n900 Barton Springs Rd", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP993284", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993284", 
        "SUMMARY": "Why I Moved My Investment to Austin", 
        "LOCATION": "Hilton Austin Downtown Austin Chamber Offices\n500 E 4th St", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP1149", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1149", 
        "SUMMARY": "Why Digital Maps Can Reboot Cultural History", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 1-4\n208 Barton Springs Rd", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP4563", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4563", 
        "SUMMARY": "There\u2019s No Ambition Gap: Truth About Women in Tech", 
        "LOCATION": "Austin Convention Center Room 10AB\n500 E Cesar Chavez St", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP5410", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5410", 
        "SUMMARY": "Social Media Was Fun. Has Measurement Killed It?", 
        "LOCATION": "Sheraton Austin Capitol ABCD\n701 E 11th St", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP229", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP229", 
        "SUMMARY": "Social Circles vs. Social Media", 
        "LOCATION": "Sheraton Austin Capitol EFGH\n701 E 11th St", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP993193", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993193", 
        "SUMMARY": "Smart Canadians Drinks Party", 
        "LOCATION": "Hilton Austin Downtown Room 400/402\n500 E 4th St", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP2541", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2541", 
        "SUMMARY": "Sitting Will Kill You. Cafn Mobile Save Us?", 
        "LOCATION": "Sheraton Austin Creekside\n701 E 11th St", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP461", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP461", 
        "SUMMARY": "The New API: Apps, Partners &amp; Income", 
        "LOCATION": "Four Seasons Four Seasons Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP504", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP504", 
        "SUMMARY": "@NASA: The User Experience of a Space Station", 
        "LOCATION": "Omni Downtown Lone Star\n700 San Jacinto", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP4316", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4316", 
        "SUMMARY": "Maps as the Emotional Connective Tissue", 
        "LOCATION": "Austin Convention Center Ballroom BC\n500 E Cesar Chavez St", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP2021", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2021", 
        "SUMMARY": "Leveraging Diversity for Your Business Portfolio", 
        "LOCATION": "Austin Convention Center Room 6AB\n500 E Cesar Chavez St", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP4497", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4497", 
        "SUMMARY": "I Overthrew My Government... Now What?", 
        "LOCATION": "Austin Convention Center Room 9ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP5398", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5398", 
        "SUMMARY": "How to Make the Internet Care", 
        "LOCATION": "Austin Convention Center Room 5ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP993462", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993462", 
        "SUMMARY": "BIT (Blacks in Technology) Programming", 
        "LOCATION": "Hilton Garden Inn Colorado\n500 N IH 35", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP5055", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5055", 
        "SUMMARY": "Global News After the Twitter Revolutions", 
        "LOCATION": "Austin Convention Center Room 12AB\n500 E Cesar Chavez St", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP1307", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1307", 
        "SUMMARY": "Design Like DaVinci: Leonardo&#x27;s Sketching Lessons", 
        "LOCATION": "Austin Convention Center Ballroom A\n500 E Cesar Chavez St", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP15877", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15877", 
        "SUMMARY": "Democratization of Publishing: Survive &amp; Thrive", 
        "LOCATION": "Omni Downtown Capital Ballroom\n700 San Jacinto", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP6491", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6491", 
        "SUMMARY": "Death of the Couch Potato: The Future of Social TV", 
        "LOCATION": "Austin Convention Center Room 18ABCD\n500 E Cesar Chavez St", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP1786", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1786", 
        "SUMMARY": "A Cyborg Nation by 2027: The Science Is Here", 
        "LOCATION": "Omni Downtown Longhorn\n700 San Jacinto", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP15997", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15997", 
        "SUMMARY": "The Content Shaped Elephant in the Room", 
        "LOCATION": "Radisson Town Lake Town Lake Ballroom\n111 E Cesar Chavez", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP3286", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3286", 
        "SUMMARY": "ConnectiCity", 
        "LOCATION": "Omni Downtown Austin\n700 San Jacinto", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP6297", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6297", 
        "SUMMARY": "The Commoditization of Overnight Entrepreneurship", 
        "LOCATION": "Hilton Austin Downtown Salon ABC\n500 E 4th St", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_OE02240", 
        "URL": "http://schedule.sxsw.com/2013/events/event_OE02240", 
        "SUMMARY": "Breathing New Life into PC Games &amp; Space Sims", 
        "LOCATION": "Palmer Events Center \n900 Barton Springs Rd", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP993461", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993461", 
        "SUMMARY": "BIT (Blacks in Technology) Programming", 
        "LOCATION": "Hilton Garden Inn Red River\n500 N IH 35", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP16018", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16018", 
        "SUMMARY": "Breathing New Life into PC Games &amp; Space Sims", 
        "LOCATION": "Palmer Events Center Room 1-2\n900 Barton Springs Rd", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP767", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP767", 
        "SUMMARY": "How NOT to Suck at Presenting Your Work", 
        "LOCATION": "Courtyard Marriott Rio Grande Ballroom\n300 E 4th St", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP15528", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15528", 
        "SUMMARY": "Death by Demographics: Killing Off Your Ad Budgets", 
        "LOCATION": "Austin Convention Center Room 12AB\n500 E Cesar Chavez St", 
        "DTEND": "20130311T103000", 
        "DTSTART": "20130311T093000"
      }, 
      {
        "UID": "event_IAP864", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP864", 
        "SUMMARY": "When Bad Names Happen to Good Startups", 
        "LOCATION": "Four Seasons Four Seasons Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130311T103000", 
        "DTSTART": "20130311T093000"
      }, 
      {
        "UID": "event_IAP1090", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1090", 
        "SUMMARY": "The Sports Tightrope: Balancing Your Content", 
        "LOCATION": "Austin Convention Center Room 18ABCD\n500 E Cesar Chavez St", 
        "DTEND": "20130311T103000", 
        "DTSTART": "20130311T093000"
      }, 
      {
        "UID": "event_IAP4939", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4939", 
        "SUMMARY": "Smart Money: How to Attract Brand Name Investors", 
        "LOCATION": "Hilton Austin Downtown Salon C\n500 E 4th St", 
        "DTEND": "20130311T103000", 
        "DTSTART": "20130311T093000"
      }, 
      {
        "UID": "event_IAP4296", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4296", 
        "SUMMARY": "Growing an Asocial Company in a Social World", 
        "LOCATION": "Four Seasons San Jacinto Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130311T103000", 
        "DTSTART": "20130311T093000"
      }, 
      {
        "UID": "event_IAP3058", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3058", 
        "SUMMARY": "Empowering Communities with Civic Science &amp; Data", 
        "LOCATION": "Austin Convention Center Room 9ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130311T103000", 
        "DTSTART": "20130311T093000"
      }, 
      {
        "UID": "event_IAP3526", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3526", 
        "SUMMARY": "Bots for Civic Engagement", 
        "LOCATION": "Austin Convention Center Room 5ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130311T103000", 
        "DTSTART": "20130311T093000"
      }, 
      {
        "UID": "event_IAP5183", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5183", 
        "SUMMARY": "Get Physical: Making Space Data Real on Earth", 
        "LOCATION": "Omni Downtown Lone Star\n700 San Jacinto", 
        "DTEND": "20130311T120000", 
        "DTSTART": "20130311T110000"
      }, 
      {
        "UID": "event_IAP4325", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4325", 
        "SUMMARY": "The Computational Future: A Preview", 
        "LOCATION": "Austin Convention Center Exhibit Hall 5\n500 E Cesar Chavez St", 
        "DTEND": "20130311T120000", 
        "DTSTART": "20130311T110000"
      }, 
      {
        "UID": "event_IAP16120", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16120", 
        "SUMMARY": "Moving from Story to Narrative", 
        "LOCATION": "Hilton Austin Downtown Salon JK\n500 E 4th St", 
        "DTEND": "20130311T120000", 
        "DTSTART": "20130311T110000"
      }, 
      {
        "UID": "event_IAP1218", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1218", 
        "SUMMARY": "Sexy, Safe &amp; Smart Highways", 
        "LOCATION": "Austin Convention Center Room 6AB\n500 E Cesar Chavez St", 
        "DTEND": "20130311T120000", 
        "DTSTART": "20130311T110000"
      }, 
      {
        "UID": "event_IAP1749", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1749", 
        "SUMMARY": "Saying \u2018Howdy\u2019 to New Markets Using Digital", 
        "LOCATION": "Sheraton Austin Capitol ABCD\n701 E 11th St", 
        "DTEND": "20130311T120000", 
        "DTSTART": "20130311T110000"
      }, 
      {
        "UID": "event_IAP889", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP889", 
        "SUMMARY": "Practical Natural Language Processing", 
        "LOCATION": "Omni Downtown Capital Ballroom\n700 San Jacinto", 
        "DTEND": "20130311T120000", 
        "DTSTART": "20130311T110000"
      }, 
      {
        "UID": "event_IAP1289", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1289", 
        "SUMMARY": "Open Source in Collaborative Arts Praxis", 
        "LOCATION": "Omni Downtown Austin\n700 San Jacinto", 
        "DTEND": "20130311T120000", 
        "DTSTART": "20130311T110000"
      }, 
      {
        "UID": "event_IAP6778", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6778", 
        "SUMMARY": "The Next Frontier for Digital Health", 
        "LOCATION": "Sheraton Austin Creekside\n701 E 11th St", 
        "DTEND": "20130311T120000", 
        "DTSTART": "20130311T110000"
      }, 
      {
        "UID": "event_IAP1819", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1819", 
        "SUMMARY": "New Knowledge Ecosystems: How &amp; What Do We Know?", 
        "LOCATION": "Austin Convention Center Room 12AB\n500 E Cesar Chavez St", 
        "DTEND": "20130311T120000", 
        "DTSTART": "20130311T110000"
      }, 
      {
        "UID": "event_IAP6543", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6543", 
        "SUMMARY": "Millennials Speak Out: How to Manage the GenX Boss", 
        "LOCATION": "Courtyard Marriott Rio Grande Ballroom\n300 E 4th St", 
        "DTEND": "20130311T120000", 
        "DTSTART": "20130311T110000"
      }, 
      {
        "UID": "event_IAP2543", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2543", 
        "SUMMARY": "Negotiating Open Source", 
        "LOCATION": "Four Seasons San Jacinto Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130311T120000", 
        "DTSTART": "20130311T110000"
      }, 
      {
        "UID": "event_IAP16149", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16149", 
        "SUMMARY": "The Mashable Variety Show", 
        "LOCATION": "Long Center Dell Hall\n701 W Riverside Dr", 
        "DTEND": "20130311T120000", 
        "DTSTART": "20130311T110000"
      }, 
      {
        "UID": "event_IAP716", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP716", 
        "SUMMARY": "Lawyered: Lessons from Foursquare, Meetup &amp; Etsy", 
        "LOCATION": "Hilton Austin Downtown Salon C\n500 E 4th St", 
        "DTEND": "20130311T120000", 
        "DTSTART": "20130311T110000"
      }, 
      {
        "UID": "event_IAP5681", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5681", 
        "SUMMARY": "About WYSIWYS: What You See Is What You Spec&#x27;d", 
        "LOCATION": "Austin Convention Center Ballroom BC\n500 E Cesar Chavez St", 
        "DTEND": "20130311T120000", 
        "DTSTART": "20130311T110000"
      }, 
      {
        "UID": "event_IAP14985", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP14985", 
        "SUMMARY": "The Art of the Acquisition: How to Sell a Startup", 
        "LOCATION": "Four Seasons Four Seasons Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130311T120000", 
        "DTSTART": "20130311T110000"
      }, 
      {
        "UID": "event_IAP3940", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3940", 
        "SUMMARY": "Asian Entrepreneurs Struggle with Fear of Failure", 
        "LOCATION": "Austin Convention Center Room 5ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130311T120000", 
        "DTSTART": "20130311T110000"
      }, 
      {
        "UID": "event_IAP4546", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4546", 
        "SUMMARY": "Bullying: Social Media as Problem &amp; Solution", 
        "LOCATION": "Austin Convention Center Room 9ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130311T120000", 
        "DTSTART": "20130311T110000"
      }, 
      {
        "UID": "event_IAP993702", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993702", 
        "SUMMARY": "How Composition Impacts Perception", 
        "LOCATION": "SXSW Create Create Meet Up Tent\n101 Red River St", 
        "DTEND": "20130311T120000", 
        "DTSTART": "20130311T110000"
      }, 
      {
        "UID": "event_IAP4580", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4580", 
        "SUMMARY": "Culture Hack: Libraries &amp; Museums Open for Making", 
        "LOCATION": "Omni Downtown Longhorn\n700 San Jacinto", 
        "DTEND": "20130311T120000", 
        "DTSTART": "20130311T110000"
      }, 
      {
        "UID": "event_IAP993478", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993478", 
        "SUMMARY": "Current Trends at SXSW Interactive", 
        "LOCATION": "Austin Convention Center Ballroom EF\n500 E Cesar Chavez St", 
        "DTEND": "20130311T120000", 
        "DTSTART": "20130311T110000"
      }, 
      {
        "UID": "event_IAP5659", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5659", 
        "SUMMARY": "Digital Time Machines &amp; the Future of Learning", 
        "LOCATION": "Austin Convention Center Room 10AB\n500 E Cesar Chavez St", 
        "DTEND": "20130311T120000", 
        "DTSTART": "20130311T110000"
      }, 
      {
        "UID": "event_IAP2406", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2406", 
        "SUMMARY": "Eating to Live Online: Virtual Food &amp; Real Life", 
        "LOCATION": "Sheraton Austin Capitol EFGH\n701 E 11th St", 
        "DTEND": "20130311T120000", 
        "DTSTART": "20130311T110000"
      }, 
      {
        "UID": "event_IAP4292", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4292", 
        "SUMMARY": "Embracing Analog: Why Physical Is Hot", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 1-4\n208 Barton Springs Rd", 
        "DTEND": "20130311T120000", 
        "DTSTART": "20130311T110000"
      }, 
      {
        "UID": "event_IAP3081", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3081", 
        "SUMMARY": "Fresh Prince + Downton Abbey: A Perfect Engagement", 
        "LOCATION": "Austin Convention Center Room 18ABCD\n500 E Cesar Chavez St", 
        "DTEND": "20130311T120000", 
        "DTSTART": "20130311T110000"
      }, 
      {
        "UID": "event_IAP742", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP742", 
        "SUMMARY": "The Future of Game Democratization", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 5-7\n208 Barton Springs Rd", 
        "DTEND": "20130311T120000", 
        "DTSTART": "20130311T110000"
      }, 
      {
        "UID": "event_IAP2157", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2157", 
        "SUMMARY": "Interface Transitions: Designing the Space Between", 
        "LOCATION": "Austin Convention Center Ballroom A\n500 E Cesar Chavez St", 
        "DTEND": "20130311T120000", 
        "DTSTART": "20130311T110000"
      }, 
      {
        "UID": "event_IAP6405", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6405", 
        "SUMMARY": "The London Teenage Coder Riot", 
        "LOCATION": "Austin Convention Center Room 10AB\n500 E Cesar Chavez St", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP4511", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4511", 
        "SUMMARY": "Hardware Hacking: From DIY to Revenue", 
        "LOCATION": "Four Seasons San Jacinto Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP10568", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP10568", 
        "SUMMARY": "Behind the Iron Curtain", 
        "LOCATION": "Austin Convention Center Room 5ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP2769", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2769", 
        "SUMMARY": "Time to Re-Boot: What Next for Podcasting?", 
        "LOCATION": "Austin Convention Center Room 12AB\n500 E Cesar Chavez St", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP454", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP454", 
        "SUMMARY": "Synthetic Brains, Facebook &amp; the New Revolution", 
        "LOCATION": "Omni Downtown Capital Ballroom\n700 San Jacinto", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP5913", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5913", 
        "SUMMARY": "The Social Media Chef", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 1-4\n208 Barton Springs Rd", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP4684", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4684", 
        "SUMMARY": "Shaping UX When Users Are at the Wheel", 
        "LOCATION": "Austin Convention Center Room 6AB\n500 E Cesar Chavez St", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP659", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP659", 
        "SUMMARY": "Scott McNealy: From Sun to Startup", 
        "LOCATION": "Hilton Austin Downtown Salon C\n500 E 4th St", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP2627", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2627", 
        "SUMMARY": "A Robot in Your Pocket: AI Powered Applications", 
        "LOCATION": "Austin Convention Center Room 18ABCD\n500 E Cesar Chavez St", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP4800", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4800", 
        "SUMMARY": "Publishing Graphic Novels in the Kickstarter Era", 
        "LOCATION": "Omni Downtown Longhorn\n700 San Jacinto", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP1957", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1957", 
        "SUMMARY": "Ok, Women Can&#x27;t Have It All, but Maybe No One Can", 
        "LOCATION": "Courtyard Marriott Rio Grande Ballroom\n300 E 4th St", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP4396", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4396", 
        "SUMMARY": "OAuth 2 for Identity &amp; Data Access", 
        "LOCATION": "Austin Convention Center Ballroom BC\n500 E Cesar Chavez St", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP5124", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5124", 
        "SUMMARY": "Black Twitter Activism, Bigger Than Hip Hop", 
        "LOCATION": "Austin Convention Center Room 9ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP16140", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16140", 
        "SUMMARY": "A Challenge from the President: 1M STEM Innovators", 
        "LOCATION": "Omni Downtown Lone Star\n700 San Jacinto", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP15696", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15696", 
        "SUMMARY": "Hey, Where&#x27;s My Robot Girlfriend?", 
        "LOCATION": "Hilton Austin Downtown Salon FGH\n500 E 4th St", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP5557", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5557", 
        "SUMMARY": "Drawing Conclusions: Why Everyone Should Draw", 
        "LOCATION": "Austin Convention Center Ballroom EF\n500 E Cesar Chavez St", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP2093", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2093", 
        "SUMMARY": "100 Year Starship: Interstellar Travel &amp; Beyond", 
        "LOCATION": "Austin Convention Center Ballroom D\n500 E Cesar Chavez St", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP2855", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2855", 
        "SUMMARY": "Mobile Phones &amp; eFuel Vouchers to Save Mothers", 
        "LOCATION": "Sheraton Austin Creekside\n701 E 11th St", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP3548", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3548", 
        "SUMMARY": "Miku: The Open-Source Girl Who Conquered the World", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 5-7\n208 Barton Springs Rd", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP5386", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5386", 
        "SUMMARY": "Do Good Work &amp; Everything Else Happens", 
        "LOCATION": "Austin Convention Center Ballroom A\n500 E Cesar Chavez St", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP6084", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6084", 
        "SUMMARY": "Digital Drama: Growing Up in the Age of Facebook", 
        "LOCATION": "Sheraton Austin Capitol EFGH\n701 E 11th St", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP2416", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2416", 
        "SUMMARY": "Damn the Man! Disrupting Regulated Industries", 
        "LOCATION": "Four Seasons Four Seasons Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP194", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP194", 
        "SUMMARY": "Curation + Crowdsourcing + Creation = Love", 
        "LOCATION": "Sheraton Austin Capitol ABCD\n701 E 11th St", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP6044", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6044", 
        "SUMMARY": "Creator vs. Audience: Next Chapter in Storytelling", 
        "LOCATION": "Omni Downtown Austin\n700 San Jacinto", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP6529", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6529", 
        "SUMMARY": "Creating &amp; Keeping a Kickass Photo Community", 
        "LOCATION": "SXSW Create Create Meet Up Tent\n101 Red River St", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP16059", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16059", 
        "SUMMARY": "Shaq Goes Social: The Big Interview", 
        "LOCATION": "Long Center Dell Hall\n701 W Riverside Dr", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP15963", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15963", 
        "SUMMARY": "21st Century Application Architectures", 
        "LOCATION": "Hilton Austin Downtown Salon JK\n500 E 4th St", 
        "DTEND": "20130311T163000", 
        "DTSTART": "20130311T153000"
      }, 
      {
        "UID": "event_IAP2552", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2552", 
        "SUMMARY": "The Art of Making Fun of Yourself", 
        "LOCATION": "Hilton Austin Downtown Salon FGH\n500 E 4th St", 
        "DTEND": "20130311T163000", 
        "DTSTART": "20130311T153000"
      }, 
      {
        "UID": "event_IAP16148", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16148", 
        "SUMMARY": "A Conversation with Steve Case", 
        "LOCATION": "Austin Convention Center Exhibit Hall 5\n500 E Cesar Chavez St", 
        "DTEND": "20130311T163000", 
        "DTSTART": "20130311T153000"
      }, 
      {
        "UID": "event_IAP15865", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15865", 
        "SUMMARY": "Kim Dotcom Speaks! A Skype Panel", 
        "LOCATION": "Long Center Dell Hall\n701 W Riverside Dr", 
        "DTEND": "20130311T163000", 
        "DTSTART": "20130311T153000"
      }, 
      {
        "UID": "event_IAP16114", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16114", 
        "SUMMARY": "The New Normal: Resilience in Crisis Recovery", 
        "LOCATION": "Austin Convention Center Ballroom D\n500 E Cesar Chavez St", 
        "DTEND": "20130311T163000", 
        "DTSTART": "20130311T153000"
      }, 
      {
        "UID": "event_IAP6596", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6596", 
        "SUMMARY": "Whoa Nellie! Content Strategy for Slow Experiences", 
        "LOCATION": "Austin Convention Center Ballroom EF\n500 E Cesar Chavez St", 
        "DTEND": "20130311T163000", 
        "DTSTART": "20130311T153000"
      }, 
      {
        "UID": "event_IAP3910", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3910", 
        "SUMMARY": "Version Controlling the News. How We Can Archive.", 
        "LOCATION": "Austin Convention Center Room 18ABCD\n500 E Cesar Chavez St", 
        "DTEND": "20130311T163000", 
        "DTSTART": "20130311T153000"
      }, 
      {
        "UID": "event_IAP3111", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3111", 
        "SUMMARY": "Shut Up &amp; Take My Money: LEGO Does Crowdsourcing", 
        "LOCATION": "Four Seasons San Jacinto Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130311T163000", 
        "DTSTART": "20130311T153000"
      }, 
      {
        "UID": "event_IAP4679", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4679", 
        "SUMMARY": "Sensoring the News: Detector-Driven Journalism", 
        "LOCATION": "Omni Downtown Longhorn\n700 San Jacinto", 
        "DTEND": "20130311T163000", 
        "DTSTART": "20130311T153000"
      }, 
      {
        "UID": "event_IAP4188", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4188", 
        "SUMMARY": "Sensor Technologies: The Future of Health?", 
        "LOCATION": "Sheraton Austin Creekside\n701 E 11th St", 
        "DTEND": "20130311T163000", 
        "DTSTART": "20130311T153000"
      }, 
      {
        "UID": "event_IAP7564", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP7564", 
        "SUMMARY": "Puzzle Clubhouse: Secrets of Crowdsourcing", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 5-7\n208 Barton Springs Rd", 
        "DTEND": "20130311T163000", 
        "DTSTART": "20130311T153000"
      }, 
      {
        "UID": "event_IAP5553", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5553", 
        "SUMMARY": "Presenting Complex Information with Simplicity", 
        "LOCATION": "Omni Downtown Austin\n700 San Jacinto", 
        "DTEND": "20130311T163000", 
        "DTSTART": "20130311T153000"
      }, 
      {
        "UID": "event_IAP5114", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5114", 
        "SUMMARY": "One Million Strong: Social Media &amp; the U.S. Army", 
        "LOCATION": "Sheraton Austin Capitol ABCD\n701 E 11th St", 
        "DTEND": "20130311T163000", 
        "DTSTART": "20130311T153000"
      }, 
      {
        "UID": "event_IAP3956", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3956", 
        "SUMMARY": "MLB.com Hits Home Run with Cloud Collaboration", 
        "LOCATION": "Austin Convention Center Room 12AB\n500 E Cesar Chavez St", 
        "DTEND": "20130311T163000", 
        "DTSTART": "20130311T153000"
      }, 
      {
        "UID": "event_IAP16111", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16111", 
        "SUMMARY": "Media Management and the Creative Process", 
        "LOCATION": "SXSW Create Create Meet Up Tent\n101 Red River St", 
        "DTEND": "20130311T163000", 
        "DTSTART": "20130311T153000"
      }, 
      {
        "UID": "event_IAP5874", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5874", 
        "SUMMARY": "The Making of a Meme", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 1-4\n208 Barton Springs Rd", 
        "DTEND": "20130311T163000", 
        "DTSTART": "20130311T153000"
      }, 
      {
        "UID": "event_IAP6161", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6161", 
        "SUMMARY": "Let Conscience Be Your Guide: Moral Design", 
        "LOCATION": "Austin Convention Center Ballroom A\n500 E Cesar Chavez St", 
        "DTEND": "20130311T163000", 
        "DTSTART": "20130311T153000"
      }, 
      {
        "UID": "event_IAP5590", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5590", 
        "SUMMARY": "How Shared Experiences Enable Global Understanding", 
        "LOCATION": "Austin Convention Center Room 6AB\n500 E Cesar Chavez St", 
        "DTEND": "20130311T163000", 
        "DTSTART": "20130311T153000"
      }, 
      {
        "UID": "event_IAP5711", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5711", 
        "SUMMARY": "How Minimalism Is Changing Entrepreneurship", 
        "LOCATION": "Omni Downtown Lone Star\n700 San Jacinto", 
        "DTEND": "20130311T163000", 
        "DTSTART": "20130311T153000"
      }, 
      {
        "UID": "event_IAP6736", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6736", 
        "SUMMARY": "How AI Is Enhancing the User Experience", 
        "LOCATION": "Austin Convention Center Ballroom BC\n500 E Cesar Chavez St", 
        "DTEND": "20130311T163000", 
        "DTSTART": "20130311T153000"
      }, 
      {
        "UID": "event_IAP4928", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4928", 
        "SUMMARY": "Edison vs. Tesla &amp; the Myth of the Lone Inventor", 
        "LOCATION": "Omni Downtown Capital Ballroom\n700 San Jacinto", 
        "DTEND": "20130311T163000", 
        "DTSTART": "20130311T153000"
      }, 
      {
        "UID": "event_IAP5418", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5418", 
        "SUMMARY": "The Cost of Surveillance", 
        "LOCATION": "Austin Convention Center Room 10AB\n500 E Cesar Chavez St", 
        "DTEND": "20130311T163000", 
        "DTSTART": "20130311T153000"
      }, 
      {
        "UID": "event_IAP3518", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3518", 
        "SUMMARY": "Building a Better UX R\u00e9sum\u00e9", 
        "LOCATION": "Courtyard Marriott Rio Grande Ballroom\n300 E 4th St", 
        "DTEND": "20130311T163000", 
        "DTSTART": "20130311T153000"
      }, 
      {
        "UID": "event_IAP6309", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6309", 
        "SUMMARY": "Berlin: A Founder&#x27;s Paradise?", 
        "LOCATION": "Hilton Austin Downtown Salon C\n500 E 4th St", 
        "DTEND": "20130311T163000", 
        "DTSTART": "20130311T153000"
      }, 
      {
        "UID": "event_IAP4542", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4542", 
        "SUMMARY": "B2B Social Marketing: Blazing New Trails", 
        "LOCATION": "Sheraton Austin Capitol EFGH\n701 E 11th St", 
        "DTEND": "20130311T163000", 
        "DTSTART": "20130311T153000"
      }, 
      {
        "UID": "event_IAP1904", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1904", 
        "SUMMARY": "Africa or Bust! Content, Monetization, Opportunity", 
        "LOCATION": "Austin Convention Center Room 5ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130311T163000", 
        "DTSTART": "20130311T153000"
      }, 
      {
        "UID": "event_IAP12986", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP12986", 
        "SUMMARY": "Diplomacy 2.0: Foreign Ministries on Social Media", 
        "LOCATION": "Austin Convention Center Room 9ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130311T163000", 
        "DTSTART": "20130311T153000"
      }, 
      {
        "UID": "event_IAP4161", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4161", 
        "SUMMARY": "The Rise of the Planet of the Creatives", 
        "LOCATION": "Omni Downtown Lone Star\n700 San Jacinto", 
        "DTEND": "20130311T180000", 
        "DTSTART": "20130311T170000"
      }, 
      {
        "UID": "event_IAP6213", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6213", 
        "SUMMARY": "Social Code Graph: The Future of Open Source", 
        "LOCATION": "Austin Convention Center Ballroom BC\n500 E Cesar Chavez St", 
        "DTEND": "20130311T180000", 
        "DTSTART": "20130311T170000"
      }, 
      {
        "UID": "event_IAP5144", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5144", 
        "SUMMARY": "Sparking Social Change with Content Integration", 
        "LOCATION": "Austin Convention Center Room 12AB\n500 E Cesar Chavez St", 
        "DTEND": "20130311T180000", 
        "DTSTART": "20130311T170000"
      }, 
      {
        "UID": "event_IAP2487", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2487", 
        "SUMMARY": "The Sketchbook Project: A Global Art Library Grows", 
        "LOCATION": "Omni Downtown Austin\n700 San Jacinto", 
        "DTEND": "20130311T180000", 
        "DTSTART": "20130311T170000"
      }, 
      {
        "UID": "event_IAP2722", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2722", 
        "SUMMARY": "WTF Is a DEO? The Mashup of Creativity &amp; Business", 
        "LOCATION": "Four Seasons San Jacinto Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130311T180000", 
        "DTSTART": "20130311T170000"
      }, 
      {
        "UID": "event_IAP6272", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6272", 
        "SUMMARY": "Privacy in a Location-Based World", 
        "LOCATION": "Sheraton Austin Capitol ABCD\n701 E 11th St", 
        "DTEND": "20130311T180000", 
        "DTSTART": "20130311T170000"
      }, 
      {
        "UID": "event_IAP3813", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3813", 
        "SUMMARY": "Powering Cures with Pure Human Endurance", 
        "LOCATION": "Austin Convention Center Room 6AB\n500 E Cesar Chavez St", 
        "DTEND": "20130311T180000", 
        "DTSTART": "20130311T170000"
      }, 
      {
        "UID": "event_IAP16041", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16041", 
        "SUMMARY": "How to Solve the World&#x27;s Problems", 
        "LOCATION": "Hilton Austin Downtown Salon FGH\n500 E 4th St", 
        "DTEND": "20130311T180000", 
        "DTSTART": "20130311T170000"
      }, 
      {
        "UID": "event_IAP16139", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16139", 
        "SUMMARY": "Gun Printing with Defense Distributed", 
        "LOCATION": "Hilton Austin Downtown Salon JK\n500 E 4th St", 
        "DTEND": "20130311T180000", 
        "DTSTART": "20130311T170000"
      }, 
      {
        "UID": "event_IAP15799", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15799", 
        "SUMMARY": "Connecting &amp; Empowering the Creative World", 
        "LOCATION": "Austin Convention Center Ballroom D\n500 E Cesar Chavez St", 
        "DTEND": "20130311T180000", 
        "DTSTART": "20130311T170000"
      }, 
      {
        "UID": "event_IAP2264", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2264", 
        "SUMMARY": "Addicted to Mobile, the New Cigarette", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 5-7\n208 Barton Springs Rd", 
        "DTEND": "20130311T180000", 
        "DTSTART": "20130311T170000"
      }, 
      {
        "UID": "event_IAP15826", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15826", 
        "SUMMARY": "Building New Experiences with Glass", 
        "LOCATION": "Austin Convention Center Ballroom A\n500 E Cesar Chavez St", 
        "DTEND": "20130311T180000", 
        "DTSTART": "20130311T170000"
      }, 
      {
        "UID": "event_IAP6780", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6780", 
        "SUMMARY": "Confessions of a Community Moderator", 
        "LOCATION": "Sheraton Austin Capitol EFGH\n701 E 11th St", 
        "DTEND": "20130311T180000", 
        "DTSTART": "20130311T170000"
      }, 
      {
        "UID": "event_IAP8868", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP8868", 
        "SUMMARY": "Crash &amp; Boon: Iceland, Women &amp; Business Success", 
        "LOCATION": "Austin Convention Center Room 5ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130311T180000", 
        "DTSTART": "20130311T170000"
      }, 
      {
        "UID": "event_IAP15821", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15821", 
        "SUMMARY": "Crowdfunding: A Catalyst for Local Economic Growth", 
        "LOCATION": "Four Seasons Four Seasons Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130311T180000", 
        "DTSTART": "20130311T170000"
      }, 
      {
        "UID": "event_IAP6526", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6526", 
        "SUMMARY": "Policy, Privacy &amp; the Technology of Sex Work", 
        "LOCATION": "Austin Convention Center Room 10AB\n500 E Cesar Chavez St", 
        "DTEND": "20130311T180000", 
        "DTSTART": "20130311T170000"
      }, 
      {
        "UID": "event_IAP14498", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP14498", 
        "SUMMARY": "Fixing Filter Failure: Engaging the Global Mind", 
        "LOCATION": "Omni Downtown Capital Ballroom\n700 San Jacinto", 
        "DTEND": "20130311T180000", 
        "DTSTART": "20130311T170000"
      }, 
      {
        "UID": "event_IAP7588", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP7588", 
        "SUMMARY": "The Future of 3D Printing", 
        "LOCATION": "Omni Downtown Longhorn\n700 San Jacinto", 
        "DTEND": "20130311T180000", 
        "DTSTART": "20130311T170000"
      }, 
      {
        "UID": "event_IAP3191", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3191", 
        "SUMMARY": "Hack You: The Human Body Is the Next Interface", 
        "LOCATION": "Sheraton Austin Creekside\n701 E 11th St", 
        "DTEND": "20130311T180000", 
        "DTSTART": "20130311T170000"
      }, 
      {
        "UID": "event_IAP4934", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4934", 
        "SUMMARY": "Hacker Girls: Why Aren\u2019t There More Women Coders?", 
        "LOCATION": "Courtyard Marriott Rio Grande Ballroom\n300 E 4th St", 
        "DTEND": "20130311T180000", 
        "DTSTART": "20130311T170000"
      }, 
      {
        "UID": "event_IAP6666", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6666", 
        "SUMMARY": "How Partisan Media Contributes to Healthy Politics", 
        "LOCATION": "Austin Convention Center Room 9ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130311T180000", 
        "DTSTART": "20130311T170000"
      }, 
      {
        "UID": "event_IAP8707", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP8707", 
        "SUMMARY": "Israeli Startups, Investing in People &amp; More...", 
        "LOCATION": "Hilton Austin Downtown Salon C\n500 E 4th St", 
        "DTEND": "20130311T180000", 
        "DTSTART": "20130311T170000"
      }, 
      {
        "UID": "event_IAP4199", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4199", 
        "SUMMARY": "Listening &amp; Leveraging in the Fashion Community", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 1-4\n208 Barton Springs Rd", 
        "DTEND": "20130311T180000", 
        "DTSTART": "20130311T170000"
      }, 
      {
        "UID": "event_IAP16011", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16011", 
        "SUMMARY": "&quot;Marketing Is BS&quot; (Mixer), Presented by Adobe", 
        "LOCATION": "Radisson Town Lake Town Lake Ballroom\n111 E Cesar Chavez", 
        "DTEND": "20130311T180000", 
        "DTSTART": "20130311T170000"
      }, 
      {
        "UID": "event_IAP4016", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4016", 
        "SUMMARY": "Fast Food &amp; Fact-Checking: Lessons from PolitiFact", 
        "LOCATION": "Austin Convention Center Room 18ABCD\n500 E Cesar Chavez St", 
        "DTEND": "20130311T180000", 
        "DTSTART": "20130311T170000"
      }, 
      {
        "UID": "event_IAP4516", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4516", 
        "SUMMARY": "Building a Million-Dollar Business", 
        "LOCATION": "Hilton Austin Downtown Salon C\n500 E 4th St", 
        "DTEND": "20130312T103000", 
        "DTSTART": "20130312T093000"
      }, 
      {
        "UID": "event_IAP3994", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3994", 
        "SUMMARY": "Cryptowars D\u00e9j\u00e0 Vu: Controlling Exports of Tech", 
        "LOCATION": "Austin Convention Center Room 9ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130312T103000", 
        "DTSTART": "20130312T093000"
      }, 
      {
        "UID": "event_IAP16130", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16130", 
        "SUMMARY": "Developing Meds in Space to Save Lives on Earth", 
        "LOCATION": "Austin Convention Center Ballroom BC\n500 E Cesar Chavez St", 
        "DTEND": "20130312T103000", 
        "DTSTART": "20130312T093000"
      }, 
      {
        "UID": "event_IAP6022", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6022", 
        "SUMMARY": "Designing for the Ears", 
        "LOCATION": "Austin Convention Center Room 18ABCD\n500 E Cesar Chavez St", 
        "DTEND": "20130312T103000", 
        "DTSTART": "20130312T093000"
      }, 
      {
        "UID": "event_IAP6601", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6601", 
        "SUMMARY": "Privacy in the Age of Augmented Reality", 
        "LOCATION": "Radisson Town Lake Town Lake Ballroom\n111 E Cesar Chavez", 
        "DTEND": "20130312T103000", 
        "DTSTART": "20130312T093000"
      }, 
      {
        "UID": "event_IAP3968", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3968", 
        "SUMMARY": "The Rise of the Impact Entrepreneur", 
        "LOCATION": "Four Seasons San Jacinto Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130312T103000", 
        "DTSTART": "20130312T093000"
      }, 
      {
        "UID": "event_IAP3938", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3938", 
        "SUMMARY": "Wanted: Mobile Dev with 40 Years Experience", 
        "LOCATION": "Austin Convention Center Room 5ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130312T120000", 
        "DTSTART": "20130312T110000"
      }, 
      {
        "UID": "event_IAP16042", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16042", 
        "SUMMARY": "Chaotic Good: The Right Alignment for Your Company", 
        "LOCATION": "Austin Convention Center Ballroom D\n500 E Cesar Chavez St", 
        "DTEND": "20130312T120000", 
        "DTSTART": "20130312T110000"
      }, 
      {
        "UID": "event_IAP6016", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6016", 
        "SUMMARY": "Jane Pratt: Secrets of a Publishing Renegade", 
        "LOCATION": "Austin Convention Center Exhibit Hall 5\n500 E Cesar Chavez St", 
        "DTEND": "20130312T120000", 
        "DTSTART": "20130312T110000"
      }, 
      {
        "UID": "event_IAP5588", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5588", 
        "SUMMARY": "Work Sucks, but Your RFP Doesn&#x27;t Have To", 
        "LOCATION": "Austin Convention Center Ballroom BC\n500 E Cesar Chavez St", 
        "DTEND": "20130312T120000", 
        "DTSTART": "20130312T110000"
      }, 
      {
        "UID": "event_IAP4551", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4551", 
        "SUMMARY": "Why Designers Should Care About Measuring Success", 
        "LOCATION": "Austin Convention Center Ballroom A\n500 E Cesar Chavez St", 
        "DTEND": "20130312T120000", 
        "DTSTART": "20130312T110000"
      }, 
      {
        "UID": "event_IAP15594", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15594", 
        "SUMMARY": "Who Owns Your Fans? Not You!", 
        "LOCATION": "Sheraton Austin Capitol EFGH\n701 E 11th St", 
        "DTEND": "20130312T120000", 
        "DTSTART": "20130312T110000"
      }, 
      {
        "UID": "event_IAP5955", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5955", 
        "SUMMARY": "What Does Guitar Hero Have to Do with Your Health?", 
        "LOCATION": "Sheraton Austin Creekside\n701 E 11th St", 
        "DTEND": "20130312T120000", 
        "DTSTART": "20130312T110000"
      }, 
      {
        "UID": "event_IAP984", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP984", 
        "SUMMARY": "Can Crowdfunding Save Local Government Budgets?", 
        "LOCATION": "Austin Convention Center Room 6AB\n500 E Cesar Chavez St", 
        "DTEND": "20130312T120000", 
        "DTSTART": "20130312T110000"
      }, 
      {
        "UID": "event_IAP4259", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4259", 
        "SUMMARY": "CEO at 21: Avoiding the Pitfalls of Young Founders", 
        "LOCATION": "Hilton Austin Downtown Salon D\n500 E 4th St", 
        "DTEND": "20130312T120000", 
        "DTSTART": "20130312T110000"
      }, 
      {
        "UID": "event_IAP993621", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993621", 
        "SUMMARY": "A Conversation with Nick Cave", 
        "LOCATION": "Austin Convention Center Room 18ABCD\n500 E Cesar Chavez St", 
        "DTEND": "20130312T120000", 
        "DTSTART": "20130312T110000"
      }, 
      {
        "UID": "event_IAP3500", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3500", 
        "SUMMARY": "Creating Great Analog Souvenirs for a Digital Era", 
        "LOCATION": "Omni Downtown Austin\n700 San Jacinto", 
        "DTEND": "20130312T120000", 
        "DTSTART": "20130312T110000"
      }, 
      {
        "UID": "event_IAP4886", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4886", 
        "SUMMARY": "Destroy Your Cubicle: Make the World Your Office", 
        "LOCATION": "Courtyard Marriott Rio Grande Ballroom\n300 E 4th St", 
        "DTEND": "20130312T120000", 
        "DTSTART": "20130312T110000"
      }, 
      {
        "UID": "event_IAP4572", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4572", 
        "SUMMARY": "Developing for the New Mobile Gamer", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 5-7\n208 Barton Springs Rd", 
        "DTEND": "20130312T120000", 
        "DTSTART": "20130312T110000"
      }, 
      {
        "UID": "event_IAP2057", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2057", 
        "SUMMARY": "DIY IP: Protect Yo Self, Don&#x27;t Wreck Yo Self", 
        "LOCATION": "Four Seasons San Jacinto Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130312T120000", 
        "DTSTART": "20130312T110000"
      }, 
      {
        "UID": "event_IAP6372", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6372", 
        "SUMMARY": "DJ Epistemology: Producing &amp; Knowing", 
        "LOCATION": "Austin Convention Center Room 10AB\n500 E Cesar Chavez St", 
        "DTEND": "20130312T120000", 
        "DTSTART": "20130312T110000"
      }, 
      {
        "UID": "event_IAP3096", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3096", 
        "SUMMARY": "Enchanted Objects", 
        "LOCATION": "Radisson Town Lake Town Lake Ballroom\n111 E Cesar Chavez", 
        "DTEND": "20130312T120000", 
        "DTSTART": "20130312T110000"
      }, 
      {
        "UID": "event_IAP8426", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP8426", 
        "SUMMARY": "Hype vs. Reality: Takeaways from SXSWi 2013", 
        "LOCATION": "Austin Convention Center Ballroom EF\n500 E Cesar Chavez St", 
        "DTEND": "20130312T120000", 
        "DTSTART": "20130312T110000"
      }, 
      {
        "UID": "event_IAP16124", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16124", 
        "SUMMARY": "STAMPEDE: Supercomputing for Big Data, Big Science", 
        "LOCATION": "Omni Downtown Capital Ballroom\n700 San Jacinto", 
        "DTEND": "20130312T120000", 
        "DTSTART": "20130312T110000"
      }, 
      {
        "UID": "event_IAP5193", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5193", 
        "SUMMARY": "Outsourcing &amp; Offshoring Social Customer Service", 
        "LOCATION": "Four Seasons Four Seasons Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130312T120000", 
        "DTSTART": "20130312T110000"
      }, 
      {
        "UID": "event_IAP6466", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6466", 
        "SUMMARY": "Not All Startup Accelerators Are Created Equal", 
        "LOCATION": "Hilton Austin Downtown Salon C\n500 E 4th St", 
        "DTEND": "20130312T120000", 
        "DTSTART": "20130312T110000"
      }, 
      {
        "UID": "event_IAP5006", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5006", 
        "SUMMARY": "A Manhattan Project of the Mind (or Brain Wars)", 
        "LOCATION": "Omni Downtown Longhorn\n700 San Jacinto", 
        "DTEND": "20130312T120000", 
        "DTSTART": "20130312T110000"
      }, 
      {
        "UID": "event_IAP6192", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6192", 
        "SUMMARY": "Louis CK After-Math: Distribution &amp; Ticketing 2.0", 
        "LOCATION": "Austin Convention Center Room 16AB\n500 E Cesar Chavez St", 
        "DTEND": "20130312T120000", 
        "DTSTART": "20130312T110000"
      }, 
      {
        "UID": "event_IAP6295", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6295", 
        "SUMMARY": "Integrating Digital into the Live Game Experience", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 1-4\n208 Barton Springs Rd", 
        "DTEND": "20130312T120000", 
        "DTSTART": "20130312T110000"
      }, 
      {
        "UID": "event_IAP1023", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1023", 
        "SUMMARY": "Learning Experience Design from Superman", 
        "LOCATION": "Omni Downtown Lone Star\n700 San Jacinto", 
        "DTEND": "20130312T120000", 
        "DTSTART": "20130312T110000"
      }, 
      {
        "UID": "event_IAP3870", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3870", 
        "SUMMARY": "Location! The Importance of Geo-Data", 
        "LOCATION": "Sheraton Austin Capitol ABCD\n701 E 11th St", 
        "DTEND": "20130312T120000", 
        "DTSTART": "20130312T110000"
      }, 
      {
        "UID": "event_IAP3214", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3214", 
        "SUMMARY": "Spread the Happy, Save the World", 
        "LOCATION": "Courtyard Marriott Rio Grande Ballroom\n300 E 4th St", 
        "DTEND": "20130312T133000", 
        "DTSTART": "20130312T123000"
      }, 
      {
        "UID": "event_IAP2025", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2025", 
        "SUMMARY": "Reputation as a Currency: Is the Resume Extinct?", 
        "LOCATION": "Austin Convention Center Ballroom EF\n500 E Cesar Chavez St", 
        "DTEND": "20130312T133000", 
        "DTSTART": "20130312T123000"
      }, 
      {
        "UID": "event_IAP16144", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16144", 
        "SUMMARY": "Media Crossroads: Which Way Is Up?", 
        "LOCATION": "Long Center Dell Hall\n701 W Riverside Dr", 
        "DTEND": "20130312T133000", 
        "DTSTART": "20130312T123000"
      }, 
      {
        "UID": "event_IAP16016", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16016", 
        "SUMMARY": "Esther Dyson, Release 0.9", 
        "LOCATION": "Austin Convention Center Ballroom D\n500 E Cesar Chavez St", 
        "DTEND": "20130312T133000", 
        "DTSTART": "20130312T123000"
      }, 
      {
        "UID": "event_IAP2117", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2117", 
        "SUMMARY": "The Big Power Shift in Media", 
        "LOCATION": "Austin Convention Center Exhibit Hall 5\n500 E Cesar Chavez St", 
        "DTEND": "20130312T133000", 
        "DTSTART": "20130312T123000"
      }, 
      {
        "UID": "event_IAP2521", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2521", 
        "SUMMARY": "AI Netizens: The State of Agents Online", 
        "LOCATION": "Sheraton Austin Capitol ABCD\n701 E 11th St", 
        "DTEND": "20130312T133000", 
        "DTSTART": "20130312T123000"
      }, 
      {
        "UID": "event_IAP15736", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15736", 
        "SUMMARY": "Bing Gordon: Gaming and the Future of TV", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 5-7\n208 Barton Springs Rd", 
        "DTEND": "20130312T133000", 
        "DTSTART": "20130312T123000"
      }, 
      {
        "UID": "event_OE02242", 
        "URL": "http://schedule.sxsw.com/2013/events/event_OE02242", 
        "SUMMARY": "Bing Gordon: Gaming and the Future of TV", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 5-7\n208 Barton Springs Rd", 
        "DTEND": "20130312T133000", 
        "DTSTART": "20130312T123000"
      }, 
      {
        "UID": "event_IAP1875", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1875", 
        "SUMMARY": "Creativity: From a Pile of Rocks to a Work of Art", 
        "LOCATION": "Omni Downtown Austin\n700 San Jacinto", 
        "DTEND": "20130312T133000", 
        "DTSTART": "20130312T123000"
      }, 
      {
        "UID": "event_IAP3725", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3725", 
        "SUMMARY": "Disrupting Dinner: Food Trucks, Top Chefs &amp; Yo Mama", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 1-4\n208 Barton Springs Rd", 
        "DTEND": "20130312T133000", 
        "DTSTART": "20130312T123000"
      }, 
      {
        "UID": "event_IAP6247", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6247", 
        "SUMMARY": "The End of Reality: The New Augmented Reality", 
        "LOCATION": "Omni Downtown Capital Ballroom\n700 San Jacinto", 
        "DTEND": "20130312T133000", 
        "DTSTART": "20130312T123000"
      }, 
      {
        "UID": "event_IAP3396", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3396", 
        "SUMMARY": "Engaging Government for Fun, Profit &amp; Meaning", 
        "LOCATION": "Austin Convention Center Room 5ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130312T133000", 
        "DTSTART": "20130312T123000"
      }, 
      {
        "UID": "event_IAP3836", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3836", 
        "SUMMARY": "Fashion &amp; Food: Transforming Visual Narration", 
        "LOCATION": "Sheraton Austin Capitol EFGH\n701 E 11th St", 
        "DTEND": "20130312T133000", 
        "DTSTART": "20130312T123000"
      }, 
      {
        "UID": "event_IAP3416", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3416", 
        "SUMMARY": "Follow the Patient for Meaningful Change", 
        "LOCATION": "Sheraton Austin Creekside\n701 E 11th St", 
        "DTEND": "20130312T133000", 
        "DTSTART": "20130312T123000"
      }, 
      {
        "UID": "event_IAP1224", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1224", 
        "SUMMARY": "Fools Fear Failure: Designing Better Ways to Fail", 
        "LOCATION": "Austin Convention Center Ballroom BC\n500 E Cesar Chavez St", 
        "DTEND": "20130312T133000", 
        "DTSTART": "20130312T123000"
      }, 
      {
        "UID": "event_IAP16029", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16029", 
        "SUMMARY": "From Coral Reefs to the Light Field: Making Waves", 
        "LOCATION": "Austin Convention Center Room 18ABCD\n500 E Cesar Chavez St", 
        "DTEND": "20130312T133000", 
        "DTSTART": "20130312T123000"
      }, 
      {
        "UID": "event_IAP5834", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5834", 
        "SUMMARY": "Fun &amp; Games with CSS3", 
        "LOCATION": "Omni Downtown Lone Star\n700 San Jacinto", 
        "DTEND": "20130312T133000", 
        "DTSTART": "20130312T123000"
      }, 
      {
        "UID": "event_IAP993258", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993258", 
        "SUMMARY": "Google[x]: Building a Moonshot Factory", 
        "LOCATION": "Austin Convention Center Ballroom A\n500 E Cesar Chavez St", 
        "DTEND": "20130312T133000", 
        "DTSTART": "20130312T123000"
      }, 
      {
        "UID": "event_IAP6600", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6600", 
        "SUMMARY": "In Defense of Mashups: Bootstrapping or Stealing?", 
        "LOCATION": "Four Seasons San Jacinto Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130312T133000", 
        "DTSTART": "20130312T123000"
      }, 
      {
        "UID": "event_IAP4518", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4518", 
        "SUMMARY": "Make It or Break It: Why Hot Startups Fail", 
        "LOCATION": "Hilton Austin Downtown Salon C\n500 E 4th St", 
        "DTEND": "20130312T133000", 
        "DTSTART": "20130312T123000"
      }, 
      {
        "UID": "event_IAP5412", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5412", 
        "SUMMARY": "Parsing Reality: Shaping Play with Connected Stuff", 
        "LOCATION": "Radisson Town Lake Town Lake Ballroom\n111 E Cesar Chavez", 
        "DTEND": "20130312T133000", 
        "DTSTART": "20130312T123000"
      }, 
      {
        "UID": "event_IAP4734", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4734", 
        "SUMMARY": "Will Crowdfunding for Businesses Succeed or Fail?", 
        "LOCATION": "Hilton Austin Downtown Salon D\n500 E 4th St", 
        "DTEND": "20130312T133000", 
        "DTSTART": "20130312T123000"
      }, 
      {
        "UID": "event_IAP6001", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6001", 
        "SUMMARY": "Why Shopping Will Never Be the Same", 
        "LOCATION": "Four Seasons Four Seasons Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130312T133000", 
        "DTSTART": "20130312T123000"
      }, 
      {
        "UID": "event_IAP3209", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3209", 
        "SUMMARY": "We Want Turtles! Giving Communities What They Want", 
        "LOCATION": "Austin Convention Center Room 10AB\n500 E Cesar Chavez St", 
        "DTEND": "20130312T133000", 
        "DTSTART": "20130312T123000"
      }, 
      {
        "UID": "event_IAP2986", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2986", 
        "SUMMARY": "Utopia/Dystopia: Inspiring the Next Digital Native", 
        "LOCATION": "Omni Downtown Longhorn\n700 San Jacinto", 
        "DTEND": "20130312T133000", 
        "DTSTART": "20130312T123000"
      }, 
      {
        "UID": "event_IAP4242", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4242", 
        "SUMMARY": "Privacy: Who Is In, Who Is Out?", 
        "LOCATION": "Austin Convention Center Room 6AB\n500 E Cesar Chavez St", 
        "DTEND": "20130312T133000", 
        "DTSTART": "20130312T123000"
      }, 
      {
        "UID": "event_IAP6602", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6602", 
        "SUMMARY": "Warhol Goes Social: Creativity in the Tech Age", 
        "LOCATION": "Sheraton Austin Capitol EFGH\n701 E 11th St", 
        "DTEND": "20130312T163000", 
        "DTSTART": "20130312T153000"
      }, 
      {
        "UID": "event_IAP3282", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3282", 
        "SUMMARY": "Ad Hacking for Startups", 
        "LOCATION": "Hilton Austin Downtown Salon D\n500 E 4th St", 
        "DTEND": "20130312T163000", 
        "DTSTART": "20130312T153000"
      }, 
      {
        "UID": "event_IAP3785", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3785", 
        "SUMMARY": "After the Hackathon", 
        "LOCATION": "Omni Downtown Longhorn\n700 San Jacinto", 
        "DTEND": "20130312T163000", 
        "DTSTART": "20130312T153000"
      }, 
      {
        "UID": "event_IAP4987", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4987", 
        "SUMMARY": "Applying the Leader\u2019s Code to Silicon Valley", 
        "LOCATION": "Four Seasons Four Seasons Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130312T163000", 
        "DTSTART": "20130312T153000"
      }, 
      {
        "UID": "event_IAP4566", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4566", 
        "SUMMARY": "The Art &amp; Science of Hacking an Industry", 
        "LOCATION": "Four Seasons San Jacinto Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130312T163000", 
        "DTSTART": "20130312T153000"
      }, 
      {
        "UID": "event_IAP4495", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4495", 
        "SUMMARY": "Breaking the Mold with Meaningful Design", 
        "LOCATION": "Austin Convention Center Ballroom A\n500 E Cesar Chavez St", 
        "DTEND": "20130312T163000", 
        "DTSTART": "20130312T153000"
      }, 
      {
        "UID": "event_IAP15517", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15517", 
        "SUMMARY": "Customer Support Gets Augmented", 
        "LOCATION": "Austin Convention Center Ballroom BC\n500 E Cesar Chavez St", 
        "DTEND": "20130312T163000", 
        "DTSTART": "20130312T153000"
      }, 
      {
        "UID": "event_IAP1896", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1896", 
        "SUMMARY": "Digital Outcasts: The New Bootstrapping", 
        "LOCATION": "Austin Convention Center Room 10AB\n500 E Cesar Chavez St", 
        "DTEND": "20130312T163000", 
        "DTSTART": "20130312T153000"
      }, 
      {
        "UID": "event_IAP1798", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1798", 
        "SUMMARY": "Geek Nirvana: Achieving Data-Driven Team Happiness", 
        "LOCATION": "Courtyard Marriott Rio Grande Ballroom\n300 E 4th St", 
        "DTEND": "20130312T163000", 
        "DTSTART": "20130312T153000"
      }, 
      {
        "UID": "event_IAP2884", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2884", 
        "SUMMARY": "How Women Are Driving the Gaming Industry Forward", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 5-7\n208 Barton Springs Rd", 
        "DTEND": "20130312T163000", 
        "DTSTART": "20130312T153000"
      }, 
      {
        "UID": "event_IAP6508", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6508", 
        "SUMMARY": "Is It Local? Scaling Local Infrastructures", 
        "LOCATION": "Hilton Austin Downtown Salon C\n500 E 4th St", 
        "DTEND": "20130312T163000", 
        "DTSTART": "20130312T153000"
      }, 
      {
        "UID": "event_IAP1930", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1930", 
        "SUMMARY": "Making Accessible Transportation Modern &amp; Cool", 
        "LOCATION": "Austin Convention Center Room 5ABC\n500 E Cesar Chavez St", 
        "DTEND": "20130312T163000", 
        "DTSTART": "20130312T153000"
      }, 
      {
        "UID": "event_IAP2649", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2649", 
        "SUMMARY": "New Technology for Conflict Prevention", 
        "LOCATION": "Austin Convention Center Room 6AB\n500 E Cesar Chavez St", 
        "DTEND": "20130312T163000", 
        "DTSTART": "20130312T153000"
      }, 
      {
        "UID": "event_IAP15792", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15792", 
        "SUMMARY": "The Next Generation of Recommendation Engines", 
        "LOCATION": "Sheraton Austin Capitol ABCD\n701 E 11th St", 
        "DTEND": "20130312T163000", 
        "DTSTART": "20130312T153000"
      }, 
      {
        "UID": "event_IAP4610", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4610", 
        "SUMMARY": "Omnipresent: When Virtual Meets Reality", 
        "LOCATION": "Radisson Town Lake Town Lake Ballroom\n111 E Cesar Chavez", 
        "DTEND": "20130312T163000", 
        "DTSTART": "20130312T153000"
      }, 
      {
        "UID": "event_IAP4088", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4088", 
        "SUMMARY": "Out with the Old: Disrupting the Home Care Market", 
        "LOCATION": "Sheraton Austin Creekside\n701 E 11th St", 
        "DTEND": "20130312T163000", 
        "DTSTART": "20130312T153000"
      }, 
      {
        "UID": "event_IAP1637", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1637", 
        "SUMMARY": "The Smile Epidemic", 
        "LOCATION": "Omni Downtown Austin\n700 San Jacinto", 
        "DTEND": "20130312T163000", 
        "DTSTART": "20130312T153000"
      }, 
      {
        "UID": "event_IAP3771", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3771", 
        "SUMMARY": "Smooth Scrum: Lessons from the Theatre", 
        "LOCATION": "Omni Downtown Lone Star\n700 San Jacinto", 
        "DTEND": "20130312T163000", 
        "DTSTART": "20130312T153000"
      }, 
      {
        "UID": "event_IAP6047", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6047", 
        "SUMMARY": "Space Tech After NASA: Boom Times for Innovation?", 
        "LOCATION": "Omni Downtown Capital Ballroom\n700 San Jacinto", 
        "DTEND": "20130312T163000", 
        "DTSTART": "20130312T153000"
      }, 
      {
        "UID": "event_IAP4565", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4565", 
        "SUMMARY": "Startup DNA: Hacking the Code", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 1-4\n208 Barton Springs Rd", 
        "DTEND": "20130312T163000", 
        "DTSTART": "20130312T153000"
      }, 
      {
        "UID": "event_IAP16028", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16028", 
        "SUMMARY": "Transitioning Alternative Comedy to TV", 
        "LOCATION": "Austin Convention Center Room 18ABCD\n500 E Cesar Chavez St", 
        "DTEND": "20130312T163000", 
        "DTSTART": "20130312T153000"
      }, 
      {
        "UID": "event_IAP16141", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16141", 
        "SUMMARY": "Change the Ratio: Conversations with Rachel Sklar", 
        "LOCATION": "Austin Convention Center Ballroom D\n500 E Cesar Chavez St", 
        "DTEND": "20130312T163000", 
        "DTSTART": "20130312T153000"
      }, 
      {
        "UID": "event_IAP16126", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16126", 
        "SUMMARY": "Forbes 30 Under 30: Meet Spotify&#x27;s Daniel Ek", 
        "LOCATION": "Long Center Dell Hall\n701 W Riverside Dr", 
        "DTEND": "20130312T163000", 
        "DTSTART": "20130312T153000"
      }, 
      {
        "UID": "event_IAP15892", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15892", 
        "SUMMARY": "Peter Thiel: You Are Not A Lottery Ticket", 
        "LOCATION": "Austin Convention Center Exhibit Hall 5\n500 E Cesar Chavez St", 
        "DTEND": "20130312T163000", 
        "DTSTART": "20130312T153000"
      }, 
      {
        "UID": "event_IAP15835", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15835", 
        "SUMMARY": "Bruce Sterling Closing Remarks", 
        "LOCATION": "Austin Convention Center Exhibit Hall 5\n500 E Cesar Chavez St", 
        "DTEND": "20130312T180000", 
        "DTSTART": "20130312T170000"
      }
    ], 
    "VERSION": "2.0", 
    "METHOD": "PUBLISH"
  }
}

 
 return objJson;
};

exports.teamlist = thelist();

