var thelist = function() {
 //var objJson = {"GroupName":"D","count":4,"teams":[{"country":"England"}, {"country":"France"}, {"country":"Sweden"}, {"country":"Ukraine"}]};
  
  
 /* request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var objJson = body; // Print the google web page.
    console.log(body);
  }
  
})
*/
 
 var objJson = {
  "VCALENDAR": {
    "X-WR-CALNAME": "Kyle Bunch's SXSW Schedule", 
    "CALSCALE": "GREGORIAN", 
    "VEVENT": [
      {
        "UID": "event_IAP15948", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15948", 
        "SUMMARY": "Hackathon for Social Good", 
        "LOCATION": "AT&amp;T Conference Center Classroom 104\n1900 University Ave", 
        "DTEND": "20130308T183000", 
        "DTSTART": "20130308T093000"
      }, 
       {
        "UID": "event_IAP15948", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16070", 
        "SUMMARY": "OMMA: Is Mobile Really a Branding Vehicle?", 
        "LOCATION": "AT&T Conference Center Salon C\n1900 University Ave", 
        "DTEND": "20130308T103000", 
        "DTSTART": "20130308T093000"
      }, 
       {
        "UID": "event_IAP15948", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16070", 
        "SUMMARY": "OMMA: The Next Big Thing IS Not a Gadget", 
        "LOCATION": "AT&T Conference Center Salon C\n1900 University Ave", 
        "DTEND": "20130308T120000", 
        "DTSTART": "20130308T110000"
      }, 
       {
        "UID": "event_IAP16074", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16074", 
        "SUMMARY": "OMMA: What Marketers Should Ask Themselves About Social", 
        "LOCATION": "AT&T Conference Center Salon C\n1900 University Ave", 
        "DTEND": "20130308T133000", 
        "DTSTART": "20130308T123000"
      },
       {
        "UID": "event_OE02267", 
        "URL": "http://schedule.sxsw.com/2013/events/event_OE02267", 
        "SUMMARY": "Interact with NASA at the James Webb Telescope Exhibit", 
        "LOCATION": "Long Center 701 W Riverside Dr", 
        "DTEND": "20130308T23000", 
        "DTSTART": "20130308T120000"
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
        "UID": "event_IAP15862", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15862", 
        "SUMMARY": "Health 2.0 Code-a-Thon", 
        "LOCATION": "Sheraton Austin Capitol View South\n701 E 11th St", 
        "DTEND": "20130308T180000", 
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
        "UID": "event_IAP15973", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15973", 
        "SUMMARY": "Opening Remarks from Bre Pettis", 
        "LOCATION": "Austin Convention Center Exhibit Hall 5\n500 E Cesar Chavez St", 
        "DTEND": "20130308T150000", 
        "DTSTART": "20130308T140000"
      }, 
      {
        "UID": "event_OE01963", 
        "URL": "http://schedule.sxsw.com/2013/events/event_OE01963", 
        "SUMMARY": "SXSW Ping Pong Tournament", 
        "LOCATION": "Hilton Austin Downtown Room 400/402\n500 E 4th St", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T140000"
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
        "UID": "event_IAP4719", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4719", 
        "SUMMARY": "Survival Strategies for Brands in China", 
        "LOCATION": "Austin Convention Center Room 6AB\n500 E Cesar Chavez St", 
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
        "UID": "event_IAP36", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP36", 
        "SUMMARY": "Data &amp; Gamification: Value to the Enterprise", 
        "LOCATION": "Four Seasons Four Seasons Ballroom\n98 San Jacinto Blvd", 
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
        "UID": "event_IAP16040", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16040", 
        "SUMMARY": "#pathonly: Social&#x27;s Shift Towards Real Privacy", 
        "LOCATION": "Hilton Austin Downtown Salon FGH\n500 E 4th St", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
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
        "UID": "event_IAP3595", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3595", 
        "SUMMARY": "Spreadable Media: Value, Meaning &amp; Network Culture", 
        "LOCATION": "Austin Convention Center Ballroom EF\n500 E Cesar Chavez St", 
        "DTEND": "20130308T180000", 
        "DTSTART": "20130308T170000"
      }, 
      {
        "UID": "event_IAP16147", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16147", 
        "SUMMARY": "Aaron Swartz Town Hall", 
        "LOCATION": "Austin Convention Center Ballroom A\n500 E Cesar Chavez St", 
        "DTEND": "20130308T200000", 
        "DTSTART": "20130308T183000"
      }, 
      {
        "UID": "event_IAP6631", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6631", 
        "SUMMARY": "Saving the Couch Potatoes: The Cloud-y Future of TV", 
        "LOCATION": "AT&amp;T Conference Center Classroom 106\n1900 University Ave", 
        "DTEND": "20130309T183000", 
        "DTSTART": "20130309T093000"
      }, 
      {
        "UID": "event_IAP6002", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6002", 
        "SUMMARY": "Prototype or Die", 
        "LOCATION": "AT&amp;T Conference Center Classroom 203\n1900 University Ave", 
        "DTEND": "20130309T133000", 
        "DTSTART": "20130309T093000"
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
        "UID": "event_IAP4300", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4300", 
        "SUMMARY": "Sources in the Social Media Age", 
        "LOCATION": "Austin Convention Center Room 12AB\n500 E Cesar Chavez St", 
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
        "UID": "event_IAP7583", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP7583", 
        "SUMMARY": "The Grocery Store: Going \u201cTech\u201d Fresh to Survive", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 1-4\n208 Barton Springs Rd", 
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
        "UID": "event_IAP5188", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5188", 
        "SUMMARY": "Beyond Mobile: Where No Geek Has Gone Before", 
        "LOCATION": "Austin Convention Center Ballroom BC\n500 E Cesar Chavez St", 
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
        "UID": "event_IAP3578", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3578", 
        "SUMMARY": "The Hacker&#x27;s Guide to the Galaxy", 
        "LOCATION": "Austin Convention Center Ballroom EF\n500 E Cesar Chavez St", 
        "DTEND": "20130309T120000", 
        "DTSTART": "20130309T110000"
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
        "UID": "event_IAP1797", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1797", 
        "SUMMARY": "A Home on the Web: The State of Blogging in 2013", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 5-7\n208 Barton Springs Rd", 
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
        "UID": "event_IAP3828", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3828", 
        "SUMMARY": "Tweets from the DMZ: Social Media in North Korea", 
        "LOCATION": "Austin Convention Center Ballroom EF\n500 E Cesar Chavez St", 
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
        "UID": "event_OE02417", 
        "URL": "http://schedule.sxsw.com/2013/events/event_OE02417", 
        "SUMMARY": "Chevy Tweethouse", 
        "LOCATION": "Mellow Johnnys Bike Shop \n400 Nueces St", 
        "DTEND": "20130310T000000", 
        "DTSTART": "20130309T140000"
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
        "UID": "event_IAP4911", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4911", 
        "SUMMARY": "Muppets to Mastery: UX Principles from Jim Henson", 
        "LOCATION": "Austin Convention Center Ballroom A\n500 E Cesar Chavez St", 
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
        "UID": "event_IAP15888", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15888", 
        "SUMMARY": "Chuck Lorre: In Conversation with Neil Gaiman", 
        "LOCATION": "Long Center Dell Hall\n701 W Riverside Dr", 
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
        "UID": "event_IAP15912", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15912", 
        "SUMMARY": "How Electrical Signals Can Give You Superpowers", 
        "LOCATION": "Hilton Austin Downtown Salon JK\n500 E 4th St", 
        "DTEND": "20130309T163000", 
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
        "UID": "event_IAP2511", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2511", 
        "SUMMARY": "Designing for User Generated Chaos", 
        "LOCATION": "Austin Convention Center Ballroom BC\n500 E Cesar Chavez St", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T170000"
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
        "UID": "event_IAP4450", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4450", 
        "SUMMARY": "Present Shock: When Everything Happens Now", 
        "LOCATION": "Austin Convention Center Ballroom D\n500 E Cesar Chavez St", 
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
        "UID": "event_IAP4678", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4678", 
        "SUMMARY": "What&#x27;s So Funny About Innovation?", 
        "LOCATION": "Austin Convention Center Ballroom A\n500 E Cesar Chavez St", 
        "DTEND": "20130309T180000", 
        "DTSTART": "20130309T170000"
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
        "UID": "event_IAP4957", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4957", 
        "SUMMARY": "The Secrets of Generation Flux", 
        "LOCATION": "Four Seasons San Jacinto Ballroom\n98 San Jacinto Blvd", 
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
        "UID": "event_IAP15691", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15691", 
        "SUMMARY": "Andy Rubin Conversation with Guy Kawasaki", 
        "LOCATION": "Austin Convention Center Exhibit Hall 5\n500 E Cesar Chavez St", 
        "DTEND": "20130310T120000", 
        "DTSTART": "20130310T110000"
      }, 
      {
        "UID": "event_IAP6677", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6677", 
        "SUMMARY": "Putting Customers at the Center of Your Business", 
        "LOCATION": "Austin Convention Center Ballroom G\n500 E Cesar Chavez St", 
        "DTEND": "20130310T112000", 
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
        "UID": "event_IAP657", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP657", 
        "SUMMARY": "How 3D Printing Changed My Life", 
        "LOCATION": "Hilton Austin Downtown Room 616AB\n500 E 4th St", 
        "DTEND": "20130310T114500", 
        "DTSTART": "20130310T113000"
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
        "UID": "event_OE01913", 
        "URL": "http://schedule.sxsw.com/2013/events/event_OE01913", 
        "SUMMARY": "Sustainable Stories from \u2018Disposable\u2019 Content", 
        "LOCATION": "Austin Convention Center Next Stage EH 3/4\n500 E Cesar Chavez St", 
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
        "UID": "event_IAP15566", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15566", 
        "SUMMARY": "Digital Disruption: Brands as Culture Participants", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 5-7\n208 Barton Springs Rd", 
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
        "UID": "event_OE02060", 
        "URL": "http://schedule.sxsw.com/2013/events/event_OE02060", 
        "SUMMARY": "From YouTube to Global Sensations: The Ap\u201dpeel\u201d of Annoying Orange", 
        "LOCATION": "Palmer Events Center Exhibit Hall 1\n900 Barton Springs Rd", 
        "DTEND": "20130310T144500", 
        "DTSTART": "20130310T140000"
      }, 
      {
        "UID": "event_IAP993340", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993340", 
        "SUMMARY": "Tina Roth Eisenberg Keynote", 
        "LOCATION": "Austin Convention Center Exhibit Hall 5\n500 E Cesar Chavez St", 
        "DTEND": "20130310T150000", 
        "DTSTART": "20130310T140000"
      }, 
      {
        "UID": "event_OE02132", 
        "URL": "http://schedule.sxsw.com/2013/events/event_OE02132", 
        "SUMMARY": "Ekaterina Walter - Book Signing", 
        "LOCATION": "Austin Convention Center Ballroom D Foyer\n500 E Cesar Chavez St", 
        "DTEND": "20130310T152000", 
        "DTSTART": "20130310T150000"
      }, 
      {
        "UID": "event_IAP15875", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15875", 
        "SUMMARY": "The Signal &amp; the Noise", 
        "LOCATION": "Austin Convention Center Exhibit Hall 5\n500 E Cesar Chavez St", 
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
        "UID": "event_IAP2789", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2789", 
        "SUMMARY": "Art, Activism &amp; Augmented Reality", 
        "LOCATION": "Omni Downtown Austin\n700 San Jacinto", 
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
        "UID": "event_IAP15945", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15945", 
        "SUMMARY": "Gates of Heaven, Gates of Hell", 
        "LOCATION": "Hilton Austin Downtown Salon FGH\n500 E 4th St", 
        "DTEND": "20130310T163000", 
        "DTSTART": "20130310T153000"
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
        "UID": "event_IAP6491", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6491", 
        "SUMMARY": "Death of the Couch Potato: The Future of Social TV", 
        "LOCATION": "Austin Convention Center Room 18ABCD\n500 E Cesar Chavez St", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP5512", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5512", 
        "SUMMARY": "Identity+30: The Future of Identity", 
        "LOCATION": "Sheraton Austin Capitol View South\n701 E 11th St", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
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
        "UID": "event_IAP5055", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5055", 
        "SUMMARY": "Global News After the Twitter Revolutions", 
        "LOCATION": "Austin Convention Center Room 12AB\n500 E Cesar Chavez St", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T170000"
      }, 
      {
        "UID": "event_IAP6671", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6671", 
        "SUMMARY": "Interaction Literacy &amp; Participatory Design", 
        "LOCATION": "Hilton Austin Downtown Room 615AB\n500 E 4th St", 
        "DTEND": "20130310T180000", 
        "DTSTART": "20130310T174500"
      }, 
      {
        "UID": "event_IAP16009", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16009", 
        "SUMMARY": "&quot;Marketing Is BS&quot; (Part I), Presented by Adobe", 
        "LOCATION": "Radisson Town Lake Town Lake Ballroom\n111 E Cesar Chavez", 
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
        "UID": "event_IAP15528", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15528", 
        "SUMMARY": "Death by Demographics: Killing Off Your Ad Budgets", 
        "LOCATION": "Austin Convention Center Room 12AB\n500 E Cesar Chavez St", 
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
        "UID": "event_OE02599", 
        "URL": "http://schedule.sxsw.com/2013/events/event_OE02599", 
        "SUMMARY": "ATX Over Easy Breakfast with Local Tech Companies Presented by R/GA and the Austin Chamber", 
        "LOCATION": "Fogo de Chao \n309 E 3rd St", 
        "DTEND": "20130311T113000", 
        "DTSTART": "20130311T093000"
      }, 
      {
        "UID": "event_OE02144", 
        "URL": "http://schedule.sxsw.com/2013/events/event_OE02144", 
        "SUMMARY": "Porter Gale - Book Signing", 
        "LOCATION": "Austin Convention Center Ballroom D Foyer\n500 E Cesar Chavez St", 
        "DTEND": "20130311T105000", 
        "DTSTART": "20130311T103000"
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
        "UID": "event_IAP1819", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1819", 
        "SUMMARY": "New Knowledge Ecosystems: How &amp; What Do We Know?", 
        "LOCATION": "Austin Convention Center Room 12AB\n500 E Cesar Chavez St", 
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
        "UID": "event_IAP4546", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4546", 
        "SUMMARY": "Bullying: Social Media as Problem &amp; Solution", 
        "LOCATION": "Austin Convention Center Room 9ABC\n500 E Cesar Chavez St", 
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
        "UID": "event_IAP4380", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4380", 
        "SUMMARY": "Sign of the Times: The Evolution of Ambient", 
        "LOCATION": "Hilton Austin Downtown Room 615AB\n500 E 4th St", 
        "DTEND": "20130311T120000", 
        "DTSTART": "20130311T114500"
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
        "UID": "event_IAP194", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP194", 
        "SUMMARY": "Curation + Crowdsourcing + Creation = Love", 
        "LOCATION": "Sheraton Austin Capitol ABCD\n701 E 11th St", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP5927", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5927", 
        "SUMMARY": "Brands, Bloggers &amp; the Social Commerce Future", 
        "LOCATION": "Sheraton Austin Capitol View North\n701 E 11th St", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP14995", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP14995", 
        "SUMMARY": "The Future of Location: From Social to Utility", 
        "LOCATION": "Austin Convention Center Exhibit Hall 5\n500 E Cesar Chavez St", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP993527", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993527", 
        "SUMMARY": "Man Meet Machine: The Internet of Things Meet Up", 
        "LOCATION": "Empire \n606 E 7th St", 
        "DTEND": "20130311T133000", 
        "DTSTART": "20130311T123000"
      }, 
      {
        "UID": "event_IAP993337", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993337", 
        "SUMMARY": "Julie Uhrman &amp; Josh Topolsky Keynote", 
        "LOCATION": "Austin Convention Center Exhibit Hall 5\n500 E Cesar Chavez St", 
        "DTEND": "20130311T150000", 
        "DTSTART": "20130311T140000"
      }, 
      {
        "UID": "event_OE02544", 
        "URL": "http://schedule.sxsw.com/2013/events/event_OE02544", 
        "SUMMARY": "SXSW Comedy: Tomorrow Is Better Than Today (A Mischief Session)", 
        "LOCATION": "The North Door \n501 N I-35", 
        "DTEND": "20130311T150000", 
        "DTSTART": "20130311T140000"
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
        "UID": "event_IAP5874", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5874", 
        "SUMMARY": "The Making of a Meme", 
        "LOCATION": "Hyatt Regency Austin Texas Ballroom 1-4\n208 Barton Springs Rd", 
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
        "UID": "event_IAP3111", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3111", 
        "SUMMARY": "Shut Up &amp; Take My Money: LEGO Does Crowdsourcing", 
        "LOCATION": "Four Seasons San Jacinto Ballroom\n98 San Jacinto Blvd", 
        "DTEND": "20130311T163000", 
        "DTSTART": "20130311T153000"
      }, 
      {
        "UID": "event_FP990468", 
        "URL": "http://schedule.sxsw.com/2013/events/event_FP990468", 
        "SUMMARY": "Visual Conversation: Being at The Center of Social\u00a0", 
        "LOCATION": "Austin Convention Center Ballroom G\n500 E Cesar Chavez St", 
        "DTEND": "20130311T163000", 
        "DTSTART": "20130311T153000"
      }, 
      {
        "UID": "event_IAP428", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP428", 
        "SUMMARY": "Wheel of Synergy: A Drill-Down into Business Speak", 
        "LOCATION": "Courtyard Marriott Brazos\n300 E 4th St", 
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
        "UID": "event_IAP3191", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP3191", 
        "SUMMARY": "Hack You: The Human Body Is the Next Interface", 
        "LOCATION": "Sheraton Austin Creekside\n701 E 11th St", 
        "DTEND": "20130311T180000", 
        "DTSTART": "20130311T170000"
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
        "UID": "event_IAP1283", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP1283", 
        "SUMMARY": "TacoJournalism: Revenge of the Taco Blogger", 
        "LOCATION": "Hilton Austin Downtown Room 615AB\n500 E 4th St", 
        "DTEND": "20130311T173000", 
        "DTSTART": "20130311T171500"
      }, 
      {
        "UID": "event_OE02163", 
        "URL": "http://schedule.sxsw.com/2013/events/event_OE02163", 
        "SUMMARY": "Jesse Schell - Book Reading", 
        "LOCATION": "Austin Convention Center Ballroom D Foyer\n500 E Cesar Chavez St", 
        "DTEND": "20130311T175000", 
        "DTSTART": "20130311T173000"
      }, 
      {
        "UID": "event_IAP4849", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4849", 
        "SUMMARY": "New Domains Have Landed: Now What!?", 
        "LOCATION": "Hilton Austin Downtown Room 616AB\n500 E 4th St", 
        "DTEND": "20130311T174500", 
        "DTSTART": "20130311T173000"
      }, 
      {
        "UID": "event_IAP6143", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6143", 
        "SUMMARY": "Boldly Go: Enterprise Apps, from Idea to Market", 
        "LOCATION": "AT&amp;T Conference Center Classroom 204\n1900 University Ave", 
        "DTEND": "20130312T133000", 
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
        "UID": "event_IAP6022", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6022", 
        "SUMMARY": "Pandora and TechCrunch Dissect Music &amp; Tech", 
        "LOCATION": "Austin Convention Center Room 18ABCD\n500 E Cesar Chavez St", 
        "DTEND": "20130312T103000", 
        "DTSTART": "20130312T093000"
      }, 
      {
        "UID": "event_IAP4745", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4745", 
        "SUMMARY": "Interfaces, Accessibility &amp; Superheroes", 
        "LOCATION": "AT&amp;T Conference Center Classroom 202\n1900 University Ave", 
        "DTEND": "20130312T133000", 
        "DTSTART": "20130312T093000"
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
        "UID": "event_IAP6192", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP6192", 
        "SUMMARY": "Louis CK After-Math: Distribution &amp; Ticketing 2.0", 
        "LOCATION": "Austin Convention Center Room 16AB\n500 E Cesar Chavez St", 
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
        "UID": "event_IAP16042", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP16042", 
        "SUMMARY": "Chaotic Good: The Right Alignment for Your Company", 
        "LOCATION": "Austin Convention Center Ballroom D\n500 E Cesar Chavez St", 
        "DTEND": "20130312T120000", 
        "DTSTART": "20130312T110000"
      }, 
      {
        "UID": "event_IAP5960", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP5960", 
        "SUMMARY": "Culture Is King: An Integrated Life Approach", 
        "LOCATION": "Courtyard Marriott Brazos\n300 E 4th St", 
        "DTEND": "20130312T120000", 
        "DTSTART": "20130312T110000"
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
        "UID": "event_OE01962", 
        "URL": "http://schedule.sxsw.com/2013/events/event_OE01962", 
        "SUMMARY": "Virtual 2Pac: Setting the Stage for a New Form of Entertainment", 
        "LOCATION": "Austin Convention Center Next Stage EH 3/4\n500 E Cesar Chavez St", 
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
        "UID": "event_IAP2117", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2117", 
        "SUMMARY": "The Big Power Shift in Media", 
        "LOCATION": "Austin Convention Center Exhibit Hall 5\n500 E Cesar Chavez St", 
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
        "UID": "event_IAP993258", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP993258", 
        "SUMMARY": "Google[x]: Building a Moonshot Factory", 
        "LOCATION": "Austin Convention Center Ballroom A\n500 E Cesar Chavez St", 
        "DTEND": "20130312T133000", 
        "DTSTART": "20130312T123000"
      }, 
      {
        "UID": "event_IAP2969", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP2969", 
        "SUMMARY": "Matthew Inman Keynote", 
        "LOCATION": "Austin Convention Center Exhibit Hall 5\n500 E Cesar Chavez St", 
        "DTEND": "20130312T150000", 
        "DTSTART": "20130312T140000"
      }, 
      {
        "UID": "event_OE02074", 
        "URL": "http://schedule.sxsw.com/2013/events/event_OE02074", 
        "SUMMARY": "SXSW Interactive Accelerator: Mobile Technologies", 
        "LOCATION": "Hilton Austin Downtown Salon A/B\n500 E 4th St", 
        "DTEND": "20130312T150000", 
        "DTSTART": "20130312T140000"
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
        "UID": "event_IAP15892", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15892", 
        "SUMMARY": "Peter Thiel: You Are Not A Lottery Ticket", 
        "LOCATION": "Austin Convention Center Exhibit Hall 5\n500 E Cesar Chavez St", 
        "DTEND": "20130312T163000", 
        "DTSTART": "20130312T153000"
      }, 
      {
        "UID": "event_IAP15597", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP15597", 
        "SUMMARY": "How to Get Fans to Spread Your Message", 
        "LOCATION": "AT&amp;T Conference Center Classroom 204\n1900 University Ave", 
        "DTEND": "20130312T180000", 
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
        "UID": "event_IAP4610", 
        "URL": "http://schedule.sxsw.com/2013/events/event_IAP4610", 
        "SUMMARY": "Omnipresent: When Virtual Meets Reality", 
        "LOCATION": "Radisson Town Lake Town Lake Ballroom\n111 E Cesar Chavez", 
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
      }, 
      {
        "UID": "event_OE02578", 
        "URL": "http://schedule.sxsw.com/2013/events/event_OE02578", 
        "SUMMARY": "Deadmau5 &amp; Richie Hawtin: Talk. Techno. Technology.", 
        "LOCATION": "Austin Convention Center Room 12AB\n500 E Cesar Chavez St", 
        "DTEND": "20130312T180000", 
        "DTSTART": "20130312T170000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4e6304f28877954de876e8d3", 
        "SUMMARY": "Bar Ilegal", 
        "LOCATION": "609 Davis St Rainey St.", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4e6304f28877954de876e8d3", 
        "SUMMARY": "Bar Ilegal", 
        "LOCATION": "609 Davis St Rainey St.", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4e6304f28877954de876e8d3", 
        "SUMMARY": "Bar Ilegal", 
        "LOCATION": "609 Davis St Rainey St.", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4e6304f28877954de876e8d3", 
        "SUMMARY": "Bar Ilegal", 
        "LOCATION": "609 Davis St Rainey St.", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4e6304f28877954de876e8d3", 
        "SUMMARY": "Bar Ilegal", 
        "LOCATION": "609 Davis St Rainey St.", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      }, 
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4e6304f28877954de876e8d3", 
        "SUMMARY": "Bar Ilegal", 
        "LOCATION": "609 Davis St Rainey St.", 
        "DTEND": "20130313T080000", 
        "DTSTART": "20130312T180000"
      },
	  //weather Up
	  {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4e6304f28877954de876e8d3", 
        "SUMMARY": "Weather Up", 
        "LOCATION": "1808 E Cesar Chavez St", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4f5f7143e4b0912b841f3e19", 
        "SUMMARY": "Weather Up", 
        "LOCATION": "1808 E Cesar Chavez St", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4f5f7143e4b0912b841f3e19", 
        "SUMMARY": "Weather Up", 
        "LOCATION": "1808 E Cesar Chavez St", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4f5f7143e4b0912b841f3e19", 
        "SUMMARY": "Weather Up", 
        "LOCATION": "1808 E Cesar Chavez St", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4f5f7143e4b0912b841f3e19", 
        "SUMMARY": "Weather Up", 
        "LOCATION": "1808 E Cesar Chavez St", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      }, 
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4f5f7143e4b0912b841f3e19", 
        "SUMMARY": "Weather Up", 
        "LOCATION": "1808 E Cesar Chavez St", 
        "DTEND": "20130313T080000", 
        "DTSTART": "20130312T180000"
      },		
      // Easy Tiger
       {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4d6e81901c1041bd009d5d28", 
        "SUMMARY": "Easy Tiger", 
        "LOCATION": "709 E 6th St", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4d6e81901c1041bd009d5d28", 
        "SUMMARY": "Easy Tiger", 
        "LOCATION": "709 E 6th St", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4d6e81901c1041bd009d5d28", 
        "SUMMARY": "Easy Tiger", 
        "LOCATION": "709 E 6th St", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4d6e81901c1041bd009d5d28", 
        "SUMMARY": "Easy Tiger", 
        "LOCATION": "709 E 6th St", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4d6e81901c1041bd009d5d28", 
        "SUMMARY": "Easy Tiger", 
        "LOCATION": "709 E 6th St", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      }, 
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4d6e81901c1041bd009d5d28", 
        "SUMMARY": "Easy Tiger", 
        "LOCATION": "709 E 6th St", 
        "DTEND": "20130313T080000", 
        "DTSTART": "20130312T180000"
      },
       // Clive Bar
       {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4ac4e402f964a520729f20e3", 
        "SUMMARY": "Clive Bar", 
        "LOCATION": "609 Davis St at Rainey St", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4ac4e402f964a520729f20e3", 
        "SUMMARY": "Clive Bar", 
        "LOCATION": "609 Davis St at Rainey St", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4ac4e402f964a520729f20e3", 
        "SUMMARY": "Clive Bar", 
        "LOCATION": "609 Davis St at Rainey St", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4ac4e402f964a520729f20e3", 
        "SUMMARY": "Clive Bar", 
        "LOCATION": "609 Davis St at Rainey St", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4ac4e402f964a520729f20e3", 
        "SUMMARY": "Clive Bar", 
        "LOCATION": "609 Davis St at Rainey St", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      }, 
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4ac4e402f964a520729f20e3", 
        "SUMMARY": "Clive Bar", 
        "LOCATION": "609 Davis St at Rainey St", 
        "DTEND": "20130313T080000", 
        "DTSTART": "20130312T180000"
      },			
      //Burnside's Tavern
       {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/511d218a29a69162c8f427af", 
        "SUMMARY": "Burnside's Tavern", 
        "LOCATION": "413 E. 6th St. btw Trinity and Neches", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/511d218a29a69162c8f427af", 
        "SUMMARY": "Burnside's Tavern", 
        "LOCATION": "413 E. 6th St. btw Trinity and Neches", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/511d218a29a69162c8f427af", 
        "SUMMARY": "Burnside's Tavern", 
        "LOCATION": "413 E. 6th St. btw Trinity and Neches", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/511d218a29a69162c8f427af", 
        "SUMMARY": "Burnside's Tavern", 
        "LOCATION": "413 E. 6th St. btw Trinity and Neches", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/511d218a29a69162c8f427af", 
        "SUMMARY": "Burnside's Tavern", 
        "LOCATION": "413 E. 6th St. btw Trinity and Neches", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      }, 
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/511d218a29a69162c8f427af", 
        "SUMMARY": "Burnside's Tavern", 
        "LOCATION": "413 E. 6th St. btw Trinity and Neches", 
        "DTEND": "20130313T080000", 
        "DTSTART": "20130312T180000"
      },
      //Malverde
       {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/49bfd5e7f964a52029551fe3", 
        "SUMMARY": "Malverde", 
        "LOCATION": "400 W. 2nd St. Guadalupe St.", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/49bfd5e7f964a52029551fe3", 
        "SUMMARY": "Malverde", 
        "LOCATION": "400 W. 2nd St. Guadalupe St.", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/49bfd5e7f964a52029551fe3", 
        "SUMMARY": "Malverde", 
        "LOCATION": "400 W. 2nd St. Guadalupe St.", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/49bfd5e7f964a52029551fe3", 
        "SUMMARY": "Malverde", 
        "LOCATION": "400 W. 2nd St. Guadalupe St.", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/49bfd5e7f964a52029551fe3", 
        "SUMMARY": "Malverde", 
        "LOCATION": "400 W. 2nd St. Guadalupe St.", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      }, 
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/49bfd5e7f964a52029551fe3", 
        "SUMMARY": "Malverde", 
        "LOCATION": "400 W. 2nd St. Guadalupe St.", 
        "DTEND": "20130313T080000", 
        "DTSTART": "20130312T180000"
      },
      //Bangers
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4feb8f93e4b0a19839c43cd2", 
        "SUMMARY": "Banger's Sausage House & Beer Garden", 
        "LOCATION": "81 Rainey", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4feb8f93e4b0a19839c43cd2", 
        "SUMMARY": "Banger's Sausage House & Beer Garden", 
        "LOCATION": "81 Rainey", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4feb8f93e4b0a19839c43cd2", 
        "SUMMARY": "Banger's Sausage House & Beer Garden", 
        "LOCATION": "81 Rainey", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4feb8f93e4b0a19839c43cd2", 
        "SUMMARY": "Banger's Sausage House & Beer Garden", 
        "LOCATION": "81 Rainey", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4feb8f93e4b0a19839c43cd2", 
        "SUMMARY": "Banger's Sausage House & Beer Garden", 
        "LOCATION": "81 Rainey", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      }, 
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4feb8f93e4b0a19839c43cd2", 
        "SUMMARY": "Banger's Sausage House & Beer Garden", 
        "LOCATION": "81 Rainey", 
        "DTEND": "20130313T080000", 
        "DTSTART": "20130312T180000"
      },
      //Rio Rita
       {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/47d130fdf964a520114e1fe3", 
        "SUMMARY": "Rio Rita", 
        "LOCATION": "1308 E 6th St", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/47d130fdf964a520114e1fe3", 
        "SUMMARY": "Rio Rita", 
        "LOCATION": "1308 E 6th St", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/47d130fdf964a520114e1fe3", 
        "SUMMARY": "Rio Rita", 
        "LOCATION": "1308 E 6th St", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/47d130fdf964a520114e1fe3", 
        "SUMMARY": "Rio Rita", 
        "LOCATION": "1308 E 6th St", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/47d130fdf964a520114e1fe3", 
        "SUMMARY": "Rio Rita", 
        "LOCATION": "1308 E 6th St", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      }, 
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/47d130fdf964a520114e1fe3", 
        "SUMMARY": "Rio Rita", 
        "LOCATION": "1308 E 6th St", 
        "DTEND": "20130313T080000", 
        "DTSTART": "20130312T180000"
      },
      //Lustre Pearl Bar
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/49ee9350f964a5206e681fe3", 
        "SUMMARY": "Lustre Pearl Bar", 
        "LOCATION": "97 Rainey St. Driskill St.", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/49ee9350f964a5206e681fe3", 
        "SUMMARY": "Lustre Pearl Bar", 
        "LOCATION": "97 Rainey St. Driskill St.", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/49ee9350f964a5206e681fe3", 
        "SUMMARY": "Lustre Pearl Bar", 
        "LOCATION": "97 Rainey St. Driskill St.", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/49ee9350f964a5206e681fe3", 
        "SUMMARY": "Lustre Pearl Bar", 
        "LOCATION": "97 Rainey St. Driskill St.", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/49ee9350f964a5206e681fe3", 
        "SUMMARY": "Lustre Pearl Bar", 
        "LOCATION": "97 Rainey St. Driskill St.", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      }, 
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/49ee9350f964a5206e681fe3", 
        "SUMMARY": "Lustre Pearl Bar", 
        "LOCATION": "97 Rainey St. Driskill St.", 
        "DTEND": "20130313T080000", 
        "DTSTART": "20130312T180000"
      },
      
      // The Horseshoe Lounge
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b13b00f964a520aef31ee3", 
        "SUMMARY": "The Horseshoe Lounge", 
        "LOCATION": "2034 S. Lamar Blvd.", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b13b00f964a520aef31ee3", 
        "SUMMARY": "The Horseshoe Lounge", 
        "LOCATION": "2034 S. Lamar Blvd.", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b13b00f964a520aef31ee3", 
        "SUMMARY": "The Horseshoe Lounge", 
        "LOCATION": "2034 S. Lamar Blvd.", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b13b00f964a520aef31ee3", 
        "SUMMARY": "The Horseshoe Lounge", 
        "LOCATION": "2034 S. Lamar Blvd.", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b13b00f964a520aef31ee3", 
        "SUMMARY": "The Horseshoe Lounge", 
        "LOCATION": "2034 S. Lamar Blvd.", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      },
       //  The Fox Tavern
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4f530026e4b02d0eb4133142", 
        "SUMMARY": "The Fox Tavern", 
        "LOCATION": "601 W. 6th Street", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4f530026e4b02d0eb4133142", 
        "SUMMARY": "The Fox Tavern", 
        "LOCATION": "601 W. 6th Street", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4f530026e4b02d0eb4133142", 
        "SUMMARY": "The Fox Tavern", 
        "LOCATION": "601 W. 6th Street", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4f530026e4b02d0eb4133142", 
        "SUMMARY": "The Fox Tavern", 
        "LOCATION": "601 W. 6th Street", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4f530026e4b02d0eb4133142", 
        "SUMMARY": "The Fox Tavern", 
        "LOCATION": "601 W. 6th Street", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      },
      
         //  The Chicago House
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/5101c5a8067dec76eb896585", 
        "SUMMARY": "The Chicago House", 
        "LOCATION": "607 Trinity St.", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/5101c5a8067dec76eb896585", 
        "SUMMARY": "The Chicago House", 
        "LOCATION": "607 Trinity St.", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/5101c5a8067dec76eb896585", 
        "SUMMARY": "The Chicago House", 
        "LOCATION": "607 Trinity St.", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/5101c5a8067dec76eb896585", 
        "SUMMARY": "The Chicago House", 
        "LOCATION": "607 Trinity St.", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/5101c5a8067dec76eb896585", 
        "SUMMARY": "The Chicago House", 
        "LOCATION": "607 Trinity St.", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      },
      // HandleBar
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4f45c9c5e4b00441a2db379c", 
        "SUMMARY": "HandleBar", 
        "LOCATION": "121 E 5th St Brazos", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4f45c9c5e4b00441a2db379c", 
        "SUMMARY": "HandleBar", 
        "LOCATION": "121 E 5th St Brazos", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4f45c9c5e4b00441a2db379c", 
        "SUMMARY": "HandleBar", 
        "LOCATION": "121 E 5th St Brazos", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4f45c9c5e4b00441a2db379c", 
        "SUMMARY": "HandleBar", 
        "LOCATION": "121 E 5th St Brazos", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4f45c9c5e4b00441a2db379c", 
        "SUMMARY": "HandleBar", 
        "LOCATION": "121 E 5th St Brazos", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      },
      //Shangri-La
       {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/49e03d51f964a52048611fe3", 
        "SUMMARY": "Shangri-La", 
        "LOCATION": "1016 E 6th St at Medina St", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/49e03d51f964a52048611fe3", 
        "SUMMARY": "Shangri-La", 
        "LOCATION": "1016 E 6th St at Medina St", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/49e03d51f964a52048611fe3", 
        "SUMMARY": "Shangri-La", 
        "LOCATION": "1016 E 6th St at Medina St", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/49e03d51f964a52048611fe3", 
        "SUMMARY": "Shangri-La", 
        "LOCATION": "1016 E 6th St at Medina St", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/49e03d51f964a52048611fe3", 
        "SUMMARY": "Shangri-La", 
        "LOCATION": "1016 E 6th St at Medina St", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      },
      //The Driskill Hotel Bar
       {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4ba2fdc6f964a520b02638e3", 
        "SUMMARY": "The Driskill Hotel Bar", 
        "LOCATION": "604 Brazos St 6th St", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4ba2fdc6f964a520b02638e3", 
        "SUMMARY": "The Driskill Hotel Bar", 
        "LOCATION": "604 Brazos St 6th St", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4ba2fdc6f964a520b02638e3", 
        "SUMMARY": "The Driskill Hotel Bar", 
        "LOCATION": "604 Brazos St 6th St", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4ba2fdc6f964a520b02638e3", 
        "SUMMARY": "The Driskill Hotel Bar", 
        "LOCATION": "604 Brazos St 6th St", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4ba2fdc6f964a520b02638e3", 
        "SUMMARY": "The Driskill Hotel Bar", 
        "LOCATION": "604 Brazos St 6th St", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      },
      //The White Horse
       {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4ed54d9329c2bbe661cf0501", 
        "SUMMARY": "The White Horse", 
        "LOCATION": "500 Comal St", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4ed54d9329c2bbe661cf0501", 
        "SUMMARY": "The White Horse", 
        "LOCATION": "500 Comal St", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4ed54d9329c2bbe661cf0501", 
        "SUMMARY": "The White Horse", 
        "LOCATION": "500 Comal St", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4ed54d9329c2bbe661cf0501", 
        "SUMMARY": "The White Horse", 
        "LOCATION": "500 Comal St", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4ed54d9329c2bbe661cf0501", 
        "SUMMARY": "The White Horse", 
        "LOCATION": "500 Comal St", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      },
      //Continental Club
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b52f80f964a52051001fe3", 
        "SUMMARY": "Continental Club", 
        "LOCATION": "1315 S. Congress Ave.", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b52f80f964a52051001fe3", 
        "SUMMARY": "Continental Club", 
        "LOCATION": "1315 S. Congress Ave.", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b52f80f964a52051001fe3", 
        "SUMMARY": "Continental Club", 
        "LOCATION": "1315 S. Congress Ave.", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b52f80f964a52051001fe3", 
        "SUMMARY": "Continental Club", 
        "LOCATION": "1315 S. Congress Ave.", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b52f80f964a52051001fe3", 
        "SUMMARY": "Continental Club", 
        "LOCATION": "1315 S. Congress Ave.", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      },
      //The Liberty
       {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4a50231cf964a520ffaf1fe3", 
        "SUMMARY": "The Liberty", 
        "LOCATION": "1618 1/2 E 6th St.", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4a50231cf964a520ffaf1fe3", 
        "SUMMARY": "The Liberty", 
        "LOCATION": "1618 1/2 E 6th St.", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4a50231cf964a520ffaf1fe3", 
        "SUMMARY": "The Liberty", 
        "LOCATION": "1618 1/2 E 6th St.", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4a50231cf964a520ffaf1fe3", 
        "SUMMARY": "The Liberty", 
        "LOCATION": "1618 1/2 E 6th St.", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4a50231cf964a520ffaf1fe3", 
        "SUMMARY": "The Liberty", 
        "LOCATION": "1618 1/2 E 6th St.", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      },
      // Broken Spoke
       {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b13b00f964a52071f31ee3", 
        "SUMMARY": "Broken Spoke", 
        "LOCATION": "3201 S. Lamar Blvd.", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b13b00f964a52071f31ee3", 
        "SUMMARY": "Broken Spoke", 
        "LOCATION": "3201 S. Lamar Blvd.", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b13b00f964a52071f31ee3", 
        "SUMMARY": "Broken Spoke", 
        "LOCATION": "3201 S. Lamar Blvd.", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b13b00f964a52071f31ee3", 
        "SUMMARY": "Broken Spoke", 
        "LOCATION": "3201 S. Lamar Blvd.", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b13b00f964a52071f31ee3", 
        "SUMMARY": "Broken Spoke", 
        "LOCATION": "3201 S. Lamar Blvd.", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      },
       // Hotel San Jose
       {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/449d7dd6f964a520b8341fe3", 
        "SUMMARY": "Hotel San Jose", 
        "LOCATION": "1316 S. Congress Ave.", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/449d7dd6f964a520b8341fe3", 
        "SUMMARY": "Hotel San Jose", 
        "LOCATION": "1316 S. Congress Ave.", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/449d7dd6f964a520b8341fe3", 
        "SUMMARY": "Hotel San Jose", 
        "LOCATION": "1316 S. Congress Ave.", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/449d7dd6f964a520b8341fe3", 
        "SUMMARY": "Hotel San Jose", 
        "LOCATION": "1316 S. Congress Ave.", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/449d7dd6f964a520b8341fe3", 
        "SUMMARY": "Hotel San Jose", 
        "LOCATION": "1316 S. Congress Ave.", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      },
       // Guero's
       {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/45f2a42df964a520e3431fe3", 
        "SUMMARY": "Guero's", 
        "LOCATION": "1412 S. Congress Ave.", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/45f2a42df964a520e3431fe3", 
        "SUMMARY": "Guero's", 
        "LOCATION": "1412 S. Congress Ave.", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/45f2a42df964a520e3431fe3", 
        "SUMMARY": "Guero's", 
        "LOCATION": "1412 S. Congress Ave.", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/45f2a42df964a520e3431fe3", 
        "SUMMARY": "Guero's", 
        "LOCATION": "1412 S. Congress Ave.", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/45f2a42df964a520e3431fe3", 
        "SUMMARY": "Guero's", 
        "LOCATION": "1412 S. Congress Ave.", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      },
      //Ego's Lounge
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40ec8e80f964a5202c0a1fe3", 
        "SUMMARY": "Ego's Lounge", 
        "LOCATION": "510 S. Congress Ave.", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40ec8e80f964a5202c0a1fe3", 
        "SUMMARY": "Ego's Lounge", 
        "LOCATION": "510 S. Congress Ave.", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40ec8e80f964a5202c0a1fe3", 
        "SUMMARY": "Ego's Lounge", 
        "LOCATION": "510 S. Congress Ave.", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40ec8e80f964a5202c0a1fe3", 
        "SUMMARY": "Ego's Lounge", 
        "LOCATION": "510 S. Congress Ave.", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40ec8e80f964a5202c0a1fe3", 
        "SUMMARY": "Ego's Lounge", 
        "LOCATION": "510 S. Congress Ave.", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      }, //Cloak Room
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b13b00f964a52081f31ee3", 
        "SUMMARY": "Cloak Room", 
        "LOCATION": "1300 Colorado St.", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b13b00f964a52081f31ee3", 
        "SUMMARY": "Cloak Room", 
        "LOCATION": "1300 Colorado St.", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b13b00f964a52081f31ee3", 
        "SUMMARY": "Cloak Room", 
        "LOCATION": "1300 Colorado St.", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b13b00f964a52081f31ee3", 
        "SUMMARY": "Cloak Room", 
        "LOCATION": "1300 Colorado St.", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b13b00f964a52081f31ee3", 
        "SUMMARY": "Cloak Room", 
        "LOCATION": "1300 Colorado St.", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      },
      //Bar Congress
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4d8a30f224bf145602c7ce5d", 
        "SUMMARY": "Bar Congress", 
        "LOCATION": "200 Congress Avenue", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4d8a30f224bf145602c7ce5d", 
        "SUMMARY": "Bar Congress", 
        "LOCATION": "200 Congress Avenue", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4d8a30f224bf145602c7ce5d", 
        "SUMMARY": "Bar Congress", 
        "LOCATION": "200 Congress Avenue", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4d8a30f224bf145602c7ce5d", 
        "SUMMARY": "Bar Congress", 
        "LOCATION": "200 Congress Avenue", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4d8a30f224bf145602c7ce5d", 
        "SUMMARY": "Bar Congress", 
        "LOCATION": "200 Congress Avenue", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      },
      //Craft Pride
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/5125600de4b0b833e8efa5fa", 
        "SUMMARY": "Craft Pride", 
        "LOCATION": "61 Rainey St", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/5125600de4b0b833e8efa5fa", 
        "SUMMARY": "Craft Pride", 
        "LOCATION": "61 Rainey St", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/5125600de4b0b833e8efa5fa", 
        "SUMMARY": "Craft Pride", 
        "LOCATION": "61 Rainey St", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/5125600de4b0b833e8efa5fa", 
        "SUMMARY": "Craft Pride", 
        "LOCATION": "61 Rainey St", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/5125600de4b0b833e8efa5fa", 
        "SUMMARY": "Craft Pride", 
        "LOCATION": "61 Rainey St", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      },
      //Donn's Depot
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b13b00f964a52097f31ee3", 
        "SUMMARY": "Donn's Depot", 
        "LOCATION": "1600 W. 5th St.", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b13b00f964a52097f31ee3", 
        "SUMMARY": "Donn's Depot", 
        "LOCATION": "1600 W. 5th St.", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b13b00f964a52097f31ee3", 
        "SUMMARY": "Donn's Depot", 
        "LOCATION": "1600 W. 5th St.", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b13b00f964a52097f31ee3", 
        "SUMMARY": "Donn's Depot", 
        "LOCATION": "1600 W. 5th St.", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b13b00f964a52097f31ee3", 
        "SUMMARY": "Donn's Depot", 
        "LOCATION": "1600 W. 5th St.", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      },
         //Sway Thai
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/5032659de4b0202f728f6166", 
        "SUMMARY": "Sway Thai", 
        "LOCATION": "1417 S 1st St", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/5032659de4b0202f728f6166", 
        "SUMMARY": "Sway Thai", 
        "LOCATION": "1417 S 1st St", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/5032659de4b0202f728f6166", 
        "SUMMARY": "Sway Thai", 
        "LOCATION": "1417 S 1st St", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/5032659de4b0202f728f6166", 
        "SUMMARY": "Sway Thai", 
        "LOCATION": "1417 S 1st St", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/5032659de4b0202f728f6166", 
        "SUMMARY": "Sway Thai", 
        "LOCATION": "1417 S 1st St", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      },
        //Yellow Jacket Social Club
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4d5f3bc3ef378cfa3d206da6", 
        "SUMMARY": "Yellow Jacket Social Club", 
        "LOCATION": "1700 E 5th St.", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4d5f3bc3ef378cfa3d206da6", 
        "SUMMARY": "Yellow Jacket Social Club", 
        "LOCATION": "1700 E 5th St.", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4d5f3bc3ef378cfa3d206da6", 
        "SUMMARY": "Yellow Jacket Social Club", 
        "LOCATION": "1700 E 5th St.", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4d5f3bc3ef378cfa3d206da6", 
        "SUMMARY": "Yellow Jacket Social Club", 
        "LOCATION": "1700 E 5th St.", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4d5f3bc3ef378cfa3d206da6", 
        "SUMMARY": "Yellow Jacket Social Club", 
        "LOCATION": "1700 E 5th St.", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      },
       //Rio Rita
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/47d130fdf964a520114e1fe3", 
        "SUMMARY": "Rio Rita", 
        "LOCATION": "1308 E 6th St", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/47d130fdf964a520114e1fe3", 
        "SUMMARY": "Rio Rita", 
        "LOCATION": "1308 E 6th St", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/47d130fdf964a520114e1fe3", 
        "SUMMARY": "Rio Rita", 
        "LOCATION": "1308 E 6th St", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/47d130fdf964a520114e1fe3", 
        "SUMMARY": "Rio Rita", 
        "LOCATION": "1308 E 6th St", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/47d130fdf964a520114e1fe3", 
        "SUMMARY": "Rio Rita", 
        "LOCATION": "1308 E 6th St", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      },
        //East Side Showroom
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4a5684e3f964a52051b51fe3", 
        "SUMMARY": "East Side Showroom", 
        "LOCATION": "1100 E. 6th St.", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4a5684e3f964a52051b51fe3", 
        "SUMMARY": "East Side Showroom", 
        "LOCATION": "1100 E. 6th St.", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4a5684e3f964a52051b51fe3", 
        "SUMMARY": "East Side Showroom", 
        "LOCATION": "1100 E. 6th St.", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4a5684e3f964a52051b51fe3", 
        "SUMMARY": "East Side Showroom", 
        "LOCATION": "1100 E. 6th St.", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4a5684e3f964a52051b51fe3", 
        "SUMMARY": "East Side Showroom", 
        "LOCATION": "1100 E. 6th St.", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      },
       //The Grackle
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4d3678dfedbd3704d5d46ae3", 
        "SUMMARY": "The Grackle", 
        "LOCATION": "1700 E. 6th St.", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4d3678dfedbd3704d5d46ae3", 
        "SUMMARY": "The Grackle", 
        "LOCATION": "1700 E. 6th St.", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4d3678dfedbd3704d5d46ae3", 
        "SUMMARY": "The Grackle", 
        "LOCATION": "1700 E. 6th St.", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4d3678dfedbd3704d5d46ae3", 
        "SUMMARY": "The Grackle", 
        "LOCATION": "1700 E. 6th St.", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4d3678dfedbd3704d5d46ae3", 
        "SUMMARY": "The Grackle", 
        "LOCATION": "1700 E. 6th St.", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      },
      //The Lobby Lounge at Four Seasons Hotel Austin
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4b9962bef964a520897735e3", 
        "SUMMARY": "The Lobby Lounge at Four Seasons Hotel Austin", 
        "LOCATION": "98 San Jacinto Blvd", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4b9962bef964a520897735e3", 
        "SUMMARY": "The Lobby Lounge at Four Seasons Hotel Austin", 
        "LOCATION": "98 San Jacinto Blvd", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4b9962bef964a520897735e3", 
        "SUMMARY": "The Lobby Lounge at Four Seasons Hotel Austin", 
        "LOCATION": "98 San Jacinto Blvd", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4b9962bef964a520897735e3", 
        "SUMMARY": "The Lobby Lounge at Four Seasons Hotel Austin", 
        "LOCATION": "98 San Jacinto Blvd", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/4b9962bef964a520897735e3", 
        "SUMMARY": "The Lobby Lounge at Four Seasons Hotel Austin", 
        "LOCATION": "98 San Jacinto Blvd", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      },
       //Spider House Patio Bar & Cafe
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b3de00f964a5200f001fe3", 
        "SUMMARY": "Spider House Patio Bar & Cafe", 
        "LOCATION": "500 W. 29th St.", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b3de00f964a5200f001fe3", 
        "SUMMARY": "Spider House Patio Bar & Cafe", 
        "LOCATION": "500 W. 29th St.", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b3de00f964a5200f001fe3", 
        "SUMMARY": "Spider House Patio Bar & Cafe", 
        "LOCATION": "500 W. 29th St.", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b3de00f964a5200f001fe3", 
        "SUMMARY": "Spider House Patio Bar & Cafe", 
        "LOCATION": "500 W. 29th St.", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/40b3de00f964a5200f001fe3", 
        "SUMMARY": "Spider House Patio Bar & Cafe", 
        "LOCATION": "500 W. 29th St.", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      },
       //Longbranch Inn
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/455c6786f964a520713d1fe3", 
        "SUMMARY": "Longbranch Inn", 
        "LOCATION": "1133 E 11th St", 
        "DTEND": "20130308T080000", 
        "DTSTART": "20130307T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/455c6786f964a520713d1fe3", 
        "SUMMARY": "Longbranch Inn", 
        "LOCATION": "1133 E 11th St", 
        "DTEND": "20130309T080000", 
        "DTSTART": "20130308T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/455c6786f964a520713d1fe3", 
        "SUMMARY": "Longbranch Inn", 
        "LOCATION": "1133 E 11th St", 
        "DTEND": "20130310T080000", 
        "DTSTART": "20130309T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/455c6786f964a520713d1fe3", 
        "SUMMARY": "Longbranch Inn", 
        "LOCATION": "1133 E 11th St", 
        "DTEND": "20130311T080000", 
        "DTSTART": "20130310T180000"
      },
      {
        "UID": "event_Bar", 
        "URL": "https://foursquare.com/venue/455c6786f964a520713d1fe3", 
        "SUMMARY": "Longbranch Inn", 
        "LOCATION": "1133 E 11th St", 
        "DTEND": "20130312T080000", 
        "DTSTART": "20130311T180000"
      }
      
    ], 
    "X-WR-TIMEZONE": "US/Central", 
    "VERSION": "2.0", 
    "METHOD": "PUBLISH"
  }
}

 
 return objJson;
};

exports.teamlist = thelist();

