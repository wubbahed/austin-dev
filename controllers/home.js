var template = require('../views/template-main');
var test_data = require('../model/test-data');

exports.get = function(req, res) {
	var teamlist = test_data.teamlist;
	var strTeam = "", i = 0;

	var date = new Date();
	var current_date = date.getUTCDate();
	var current_hour = date.getHours();
	var current_mins = date.getMinutes();
	var _numsessions = 0;
	for ( i = 0; i < teamlist.VCALENDAR.VEVENT.length; ) {

		var _startTime = teamlist.VCALENDAR.VEVENT[i].DTSTART;
		//console.log(_startTime);
		var year = _startTime.substring(0, 4);
		var month = date.getMonth();
		//(_startTime.substring(5,6)-01);
		var day = date.getDate();
		//_startTime.substring(7,8);
		var hour = _startTime.substring(9, 11);
		var min = _startTime.substring(11, 13);
		var _startDate = new Date(year, month, day, hour, min);

		var _endTime = teamlist.VCALENDAR.VEVENT[i].DTEND;
		//console.log(_endTime);
		var endyear = _endTime.substring(0, 4);
		var endmonth = date.getMonth();
		;//(_endTime.substring(5,6)-1);
		var endday = date.getDate();
		;//_endTime.substring(7,8);
		var endhour = _endTime.substring(9, 11);
		var endmin = _endTime.substring(11, 13);

		var _endDate = new Date(endyear, endmonth, endday, endhour, endmin);
		var _pmStart = "AM";
		var _pmEnd = "AM";

		// if(date >= _startDate && date <=_endDate ){ put this in once we get closer

		//console.log("_startDate.getTime():"+_startDate.getTime());
		//console.log("currentTime:"+date.getTime());
		//console.log("_endDate.getTime():"+_endDate.getTime());
		if (date.getTime() >= _startDate.getTime() && date.getTime() <= _endDate.getTime()) {// && date.getTime() <= _endDate.getTime()
			//date.getTime() >= _startDate.getTime()&& date.getTime() <= _endDate.getTime()
			if (hour > 12) {
				hour = hour - 12;
				_pmStart = "PM";
			}
			if (endhour > 12) {
				endhour = endhour - 12;
				_pmEnd = "PM";
			}
			var _timeLeft = (_endDate.getTime() - date.getTime());
			
			 var _mins_left = Math.floor((_timeLeft/1000/60));
			 var _hours_left = Math.floor((_timeLeft/1000/60 /60));
			 
			   var vdaysdiff; // difference of the dates
			   var vhourDiff;
			   var vmindiff;
			   var vsecdiff;
			
			   vdaysdiff = Math.floor(_timeLeft/1000/60/60/24);  // in days
			   _timeLeft -= vdaysdiff*1000*60*60*24;
			
			   vhourDiff = Math.floor(_timeLeft/1000/60/60);  // in hours
			   _timeLeft -= vhourDiff*1000*60*60;
			
			   vmindiff = Math.floor(_timeLeft/1000/60); // in minutes
			   _timeLeft -= vmindiff*1000*60;
			
			   vsecdiff= Math.floor(_timeLeft/1000);  // in seconds
			
			   //Text formatting
			   var hourtext = '00';
			   if (vhourDiff > 0){ hourtext = String(vhourDiff);}
			   if (hourtext.length == 1){hourtext = '0' + hourtext};                                                              
			
			   var mintext = '00';                           
			   if (vmindiff > 0){ mintext = String(vmindiff);}
			   if (mintext.length == 1){mintext = '0' + mintext};
			
			  //shows output as HH:MM 
			 //  duration.value= hourtext + ':' + mintext;
			 
			 
			
			strTeam = strTeam + "<li class='hidden'><div class='summary'>" + teamlist.VCALENDAR.VEVENT[i].SUMMARY + "</div>" + "<div class='location'>" + teamlist.VCALENDAR.VEVENT[i].LOCATION + "</div>" +
			 "<div class='starts'> Starts: " + hour + ":" + min + _pmStart + "</div>"+
			 "<div class='ends'> Ends: " + endhour + ":" + endmin + _pmEnd + "</div>" 
			 + "<div class='time-left'> Time Left: " + hourtext + ':' + mintext + "</div>" 
			 + "<div class='more-info'> More Info: <a href='" + teamlist.VCALENDAR.VEVENT[i].URL + "'>Here</a></div>" 
			 + "</li>";
			_numsessions++;
		}

		i = i + 1;
	}
	if (_numsessions < 1) {
		var noSession = require('../views/no-session');
		strTeam = noSession.build( "<li>Hmmm, nothing really seems to be going on right now, time to grab a taco...</li>");
	}
	strTeam = "<ul>" + strTeam + "</ul>"
	res.writeHead(200, {
		'Content-Type' : 'text/html'
	});
	res.write(template.build("R/GA - Going South ", "<div id='title'>Plan 'B'</div>", strTeam));
	res.end();
}
