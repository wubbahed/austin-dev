var template = require('../views/template-main');
var noSession = require('../views/no-session');
var test_data = require('../model/test-data');

var req = require("../node_modules/express/lib/request");
var http = require('http');
var url = require('url');

exports.get = function(req, res) {
	var teamlist = test_data.teamlist;
	var strTeam = "", i = 0;
	var query = require('url').parse(req.url, true).query;
	var date = new Date();
	var tzOffset = date.getTimezoneOffset();
	console.log("before: "+date);
	//var _tempDate = new Date(2013, 02, date.getDate(), date.getHours()-6, date.getMinutes());
	
	if(date.getTimezoneOffset() === 0){
		
		if(date.getDate()<11  ){
			date = new Date(2013, 02, date.getDate(), date.getHours()-6, date.getMinutes());
		
		} else{
			date = new Date(2013, 02, date.getDate(), date.getHours()-5, date.getMinutes());
		}
	}
	console.log("after: "+date);
	//a = new time.Date(1337324400000);
	//	console.log(query.dotw);
	if (query.dotw === undefined) {
		query.dotw = '';
	}
	switch(query.dotw) {
		case 'Thu': {
			//console.log("Thursday");
			date = new Date(2013, 02, 07, 18, 00);
			break;
		}
		case 'Fri': {
			//console.log("Friday");
			date = new Date(2013, 02, 08,  09, 35);
			break;
		}
		case 'Sat': {
			//console.log("Saturday");
			date = new Date(2013, 02, 09, 18, 23);
			break;
		}
		case 'Sun': {
			//console.log("Sunday");
			date = new Date(2013, 02, 10, date.getHours(), date.getMinutes());
			break;
		}
		case 'Mon': {
			//console.log("Monday");
			date = new Date(2013, 02, 11, date.getHours(), date.getMinutes());
			break;
		}
		case 'Tue': {
			//console.log("Tuesday");
			date = new Date(2013, 02, 12, date.getHours(), date.getMinutes());
			break;
		}
		case '': {
			//console.log("default");
			date = date;
			//date = new Date(2013, 02, 07, 18, 00);
			break;
		}
	}
//	date.setTimezone("US/Central");
	var current_date = date.getUTCDate();
	var current_hour = date.getHours();
	var current_mins = date.getMinutes();
	var _numsessions = 0;

	for ( i = 0; i < teamlist.VCALENDAR.VEVENT.length; ) {

		var _startTime = teamlist.VCALENDAR.VEVENT[i].DTSTART;
		//	console.log("startTime:"+_startTime);
		var year = _startTime.substring(0, 4);
		var month = (_startTime.substring(5, 6)) - 1;
		//date.getMonth();
		//(_startTime.substring(5,6)-01);
		var day = _startTime.substring(6, 8);
		//date.getDate();
		//_startTime.substring(7,8);
		var hour = _startTime.substring(9, 11);
		var min = _startTime.substring(11, 13);

		var _startDate = new Date(year, month, day, hour, min);
	//	_startDate.setTimezone("US/Central");
		var _endTime = teamlist.VCALENDAR.VEVENT[i].DTEND;
		//console.log(_endTime);
		var endyear = _endTime.substring(0, 4);
		var endmonth = date.getMonth();
		//(_endTime.substring(5,6)-1);
		var endday = date.getDate();
		//_endTime.substring(7,8);
		var endhour = _endTime.substring(9, 11);
		var endmin = _endTime.substring(11, 13);

		var _endDate = new Date(endyear, endmonth, endday, endhour, endmin);
	//	_endDate.setTimezone("US/Central");
		var _pmStart = "AM";
		var _pmEnd = "AM";
		
		_newStartTime = new Date(year, month, day, hour-1, min); 
	//	_newStartTime.setTimezone("US/Central");
		
		if ((date.getDate() == _startDate.getDate()  ) && date.getTime() >= _newStartTime.getTime() && (date.getTime() <= _endDate.getTime() || endhour == 09 )) {
			// && date.getTime() <= _endDate.getTime()
			//date.getTime() >= _startDate.getTime()&& date.getTime() <= _endDate.getTime()
			if (hour > 12) {
				hour = hour - 12;
				_pmStart = "PM";
			}
			if (endhour > 12) {
				endhour = endhour - 12;
				_pmEnd = "PM";
			}
			
			var _started = false;
			var _timeLeft = (_endDate.getTime() - date.getTime());
			
			if(date.getTime() < _startDate.getTime()){
				_timeLeft =  _startDate.getTime() - date.getTime(); 
				_started = true;
			}
			
			var _mins_left = Math.floor((_timeLeft / 1000 / 60));
			var _hours_left = Math.floor((_timeLeft / 1000 / 60 / 60));

			var vdaysdiff;
			// difference of the dates
			var vhourDiff;
			var vmindiff;
			var vsecdiff;

			vdaysdiff = Math.floor(_timeLeft / 1000 / 60 / 60 / 24);
			// in days
			_timeLeft -= vdaysdiff * 1000 * 60 * 60 * 24;

			vhourDiff = Math.floor(_timeLeft / 1000 / 60 / 60);
			// in hours
			_timeLeft -= vhourDiff * 1000 * 60 * 60;

			vmindiff = Math.floor(_timeLeft / 1000 / 60);
			// in minutes
			_timeLeft -= vmindiff * 1000 * 60;

			vsecdiff = Math.floor(_timeLeft / 1000);
			// in seconds

			//Text formatting
			var hourtext = '00';
			if (vhourDiff > 0) {
				hourtext = String(vhourDiff);
			}
			//  if (hourtext.length == 1){hourtext = '0' + hourtext};

			var mintext = '00';
			if (vmindiff > 0) {
				mintext = String(vmindiff);
			}
			if (mintext.length == 1) {
				mintext = '0' + mintext
			};
			//hourtext = date.getTimezoneOffset();
			var _timeText =  ""+hourtext + ':' + mintext + " Left";
			if(_started){
				 _timeText =  "Starts in "+hourtext + ':' + mintext +"";
			}
			//shows output as HH:MM
			//  duration.value= hourtext + ':' + mintext;
			//_timeText = new Date();
			var _strLocation= teamlist.VCALENDAR.VEVENT[i].LOCATION;
			
			if(teamlist.VCALENDAR.VEVENT[i].LOCATION.indexOf("\n") >-1){
				_strLocation = teamlist.VCALENDAR.VEVENT[i].LOCATION.slice(0, teamlist.VCALENDAR.VEVENT[i].LOCATION.indexOf("\n"));
			}
			
			var _gLocation = _strLocation.replace(/ /gi, "+");
			//console.log(_gLocation);
			strTeam = strTeam + "<li class='hidden'>" + "<button type='button' class='close hidden' ><img src='assets/img/close.png'></button>" +
			//"<div class='inital_data slide'>" +
			"<div class='summary '><a href='" + teamlist.VCALENDAR.VEVENT[i].URL + "'>" + teamlist.VCALENDAR.VEVENT[i].SUMMARY + "</a> </div>" +
			 "<div class='starts'>  " + hour + ":" + min + _pmStart + " - " + endhour + ":" + endmin + _pmEnd + " / " + _timeText+ "</div>" + 
			 "<div class='location'><a class='map-address' href=' http://maps.google.com/maps?q=" + _gLocation + "'>" + _strLocation + "</a></div>" +
			// " </div>" +

			"</li>";
			_numsessions++;
		}

		i = i + 1;
	}
	res.writeHead(200, {
		'Content-Type' : 'text/html'
	});
	function shuffle(array) {
	    var tmp, current, top = array.length;
	
	    if(top) while(--top) {
	    	current = Math.floor(Math.random() * (top + 1));
	    	tmp = array[current];
	    	array[current] = array[top];
	    	array[top] = tmp;
	    }
	
	    return array;
	}
	//var _startingDate = new Date(2013, 02, 07, 18, 00);
	//console.log("now: "+date);
	//console.log("_startingDate: "+_startingDate);
	//console.log(date.getHours() <= _startingDate.getHours());
	
	//if ( date.getDate() <= _startingDate.getDate() && date.getHours() < _startingDate.getHours() ) {

//if ( _numsessions <1 ) {

		//strTeam = noSession.build("<div>The ultimate SXSW backup plan.</div><div>Coming soon.</div>");
	//	res.write(noSession.build("Plan B", "<div>The ultimate SXSW backup plan.</div><div>Coming soon.</div>", "<div id='title'></div>"));
	//	res.end();

	//} else {
		
			var _funnyStuff = [ "<li class='hidden extra'>" + "<button type='button' class='close hidden' ><img src='assets/img/close.png'></button>" +
			"<div class='summary'>Or you could just get an early start on your hangover. </div>" +
			"</li>",
			"<li class='hidden extra'>" + "<button type='button' class='close hidden' ><img src='assets/img/close.png'></button>" +
			"<div class='summary'>Somewhere Lone Star and Tecate are doing a panel together.  </div>" +
			"</li>",
			"<li class='hidden extra'>" + "<button type='button' class='close hidden' ><img src='assets/img/close.png'></button>" +
			"<div class='summary'>Some fliers outside the convention center need proofreading.</div>" +
			"</li>",
			"<li class='hidden extra'>" + "<button type='button' class='close hidden' ><img src='assets/img/close.png'></button>" +
			"<div class='summary'>Ashleigh Banfield in flipping burgers at the CNN Grill!!!</div>" +
			"</li>",
			"<li class='hidden extra'>" + "<button type='button' class='close hidden' ><img src='assets/img/close.png'></button>" +
			"<div class='summary'>Is that brisket in your teeth? You might want to take care of that. </div>" +
			"</li>",
			"<li class='hidden extra'>" + "<button type='button' class='close hidden' ><img src='assets/img/close.png'></button>" +
			"<div class='summary'>You know music doesn't start till next week, right?</div>" +
			"</li>",
			"<li class='hidden extra'>" + "<button type='button' class='close hidden' ><img src='assets/img/close.png'></button>" +
			"<div class='summary'>Are you this picky at the Four Season breakfast Buffett?</div>" +
			"</li>"];
			
			_funnyStuff = shuffle(_funnyStuff);
			for (f=0;f<4;f++){
				strTeam = strTeam +	_funnyStuff[f];
			}
		
		strTeam = "<ul id='sessions' class="+date+">" + strTeam + "</ul>"
		var _night = '';
		var _logoPath = "planb_logo.png";
		
		if (date.getHours() >= 18 || date.getHours() < 5) {
			_night = '<link rel="stylesheet" href="/assets/css/night.css" />';
			_logoPath = "planb_logo_white.png";
		}
		res.write(template.build("Plan B", "<div id='title'></div><div id='right-title'>SXSW</div>", strTeam, _night, _logoPath));
		res.end();
	//}
}
