var template = require('../views/template-main');
var test_data = require('../model/test-data');
var req = require("../node_modules/express/lib/request");
var http = require('http');
var url = require('url');


exports.get = function(req, res) {
	var teamlist = test_data.teamlist;
	var strTeam = "", i = 0;
	var query = require('url').parse(req.url,true).query;
	var date = new Date();
//	console.log(query.dotw);
	if(query.dotw === undefined){
		query.dotw = '';
	}
	switch(query.dotw){
		case 'Thu':{
			console.log("Thursday");
			date = new Date(2013, 02, 07, 15, 30 );
			break;
		}
		case 'Fri':{
			console.log("Friday");
			date = new Date(2013, 02, 08, 17, 30 );
			break;
		}
		case 'Sat':{
			console.log("Saturday");
			date = new Date(2013, 02, 09, 18, 23 );
			break;
		}
		case 'Sun':{
			console.log("Sunday");
			date = new Date(2013, 02, 10, 15, 30 );
			break;
		}
		case 'Mon':{
			console.log("Monday");
			date = new Date(2013, 02, 11, 15, 30 );
			break;
		}
		case 'Tue':{
			console.log("Tuesday");
			date = new Date(2013, 02, 12, 15, 30 );
			break;
		}
		case '':{
			console.log("default");
			date = new Date(2013, 02, 09, 9, 45 );
			break;
		}
	}
	console.log(date);
	var current_date = date.getUTCDate();
	var current_hour = date.getHours();
	var current_mins = date.getMinutes();
	var _numsessions = 0;
	
	
	
	
	for ( i = 0; i < teamlist.VCALENDAR.VEVENT.length; ) {

		var _startTime = teamlist.VCALENDAR.VEVENT[i].DTSTART;
	//	console.log("startTime:"+_startTime);
		var year = _startTime.substring(0, 4);
		var month = (_startTime.substring(5,6))-1;//date.getMonth();
		//(_startTime.substring(5,6)-01);
		var day = _startTime.substring(6,8);//date.getDate();
		//_startTime.substring(7,8);
		var hour = _startTime.substring(9, 11);
		var min = _startTime.substring(11, 13);
		
		var _startDate = new Date(year, month, day, hour, min);
	
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
		var _pmStart = "AM";
		var _pmEnd = "AM";

		// if(date >= _startDate && date <=_endDate ){ put this in once we get closer
		
		console.log("date.getDate() ==_startDate.getDate()"+date.getDate() ==_startDate.getDate());
		console.log("date.getTime() >= _startDate.getTime():"+date.getTime() >= _startDate.getTime());
		console.log("date.getTime() <= _endDate.getTime()"+date.getTime() <= _endDate.getTime());
		
		
		//console.log("_endDate.getTime():"+_endDate.getTime());
		if ( (date.getDate() == _startDate.getDate()) && date.getTime() >= _startDate.getTime() && (date.getTime() <= _endDate.getTime() || endhour==02 )) {// && date.getTime() <= _endDate.getTime()
			//date.getTime() >= _startDate.getTime()&& date.getTime() <= _endDate.getTime()
			console.log("getting here");
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
			 //  if (hourtext.length == 1){hourtext = '0' + hourtext};                                                              
			
			   var mintext = '00';                           
			   if (vmindiff > 0){ mintext = String(vmindiff);}
			   if (mintext.length == 1){mintext = '0' + mintext};
			
			  //shows output as HH:MM 
			 //  duration.value= hourtext + ':' + mintext;
			  
			 var _strLocation = teamlist.VCALENDAR.VEVENT[i].LOCATION.slice(0,teamlist.VCALENDAR.VEVENT[i].LOCATION.indexOf("\n"));
			var _gLocation = _strLocation.replace(/ /gi, "+");
			console.log(_gLocation);
			strTeam = strTeam + "<li class='hidden'>"+
			"<button type='button' class='close hidden' ><img src='assets/img/close.png'></button>"+
			"<div class='inital_data slide'>" +
				"<div class='summary '>" + teamlist.VCALENDAR.VEVENT[i].SUMMARY + " </div>"+
				"<div class='starts'>  " + hour + ":" + min + _pmStart +" - "+ endhour + ":" + endmin + _pmEnd + " / "+ hourtext + ':' + mintext +" Left</div>"+
			  	"<div class='location'>" + _strLocation + "</div>" +
			 " </div>" +
			 "<div class='more slide'>" +
			  	"<div class='more-info'><a href='" + teamlist.VCALENDAR.VEVENT[i].URL + "'>More Info</a></div>" +
			  		"<div class='map'><a class='map-address' href=' http://maps.google.com/maps?q=" + _gLocation + "'>View on Map</a></div>"+
			 "</div>" +
			  "</li>";
			_numsessions++;
		}

		i = i + 1;
	}
	if (_numsessions < 1) {
		var noSession = require('../views/no-session');
		strTeam = noSession.build( "<li>Hmmm, nothing really seems to be going on right now, time to grab a taco...</li>");
	}else{
		strTeam = "<ul id='sessions'>" + strTeam + "</ul>"
	}
	res.writeHead(200, {
		'Content-Type' : 'text/html'
	});
	var _night = '';
	console.log(date);
	if(date.getHours() >= 16 || date.getHours() < 5){
		_night = '<link rel="stylesheet" href="/assets/css/night.css" />';
	}
	res.write(template.build("R/GA - Plan B", "<div id='title'></div><div id='right-title'>SXSW</div>", strTeam, _night));
	res.end();
}
