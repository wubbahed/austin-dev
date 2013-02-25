!function ($) {
	
	var locations ={'locations':[
	{'location':'Wanderlust Wanderlust 206 E 4th St','lat':'30.265913','long':'-97.741637'},
	{'location':'Hilton Austin Downtown Salon D 500 E 4th St','lat':'30.26267','long':'-97.740201'},
	{'location':'Hilton Austin Downtown Salon ABC 500 E 4th St','lat':'30.265418','long':'-97.738319'},
	{'location':'Austin Convention Center Ballroom A 500 E Cesar Chavez St','lat':'30.262621','long':'-97.739747'},//30.262621,-97.739747
	{'location':'Austin Convention Center Ballroom B 500 E Cesar Chavez St','lat':'30.262976','long':'-97.739367'},
	{'location':'Austin Convention Center Ballroom C 500 E Cesar Chavez St','lat':'30.265418','long':'-97.739265'},
	{'location':'Austin Convention Center Exhibit Hall 5 500 E Cesar Chavez St','lat':'30.264421','long':'-97.738484'},
	{'location':'Austin Convention Center Room 18ABCD 500 E Cesar Chavez St','lat':'30.264067','long':'-97.738701'},
	{'location':'Austin Convention Center Room 6AB 500 E Cesar Chavez St','lat':'30.265418','long':'-97.738319'},
	{'location':'Austin Convention Center Ballroom D 500 E Cesar Chavez St','lat':'30.264435','long':'-97.739541'},
	{'location':'Austin Convention Center Ballroom E 500 E Cesar Chavez St','lat':'30.264319','long':'-97.739871'},
	{'location':'Austin Convention Center Ballroom F 500 E Cesar Chavez St','lat':'30.264502','long':'-97.73982'},
	{'location':'Austin Convention Center Ballroom G 500 E Cesar Chavez St','lat':'30.264688','long':'-97.739753'},
	{'location':'Austin Convention Center Room EF 500 E Cesar Chavez St','lat':'30.265418','long':'-97.738319'},
	{'location':'Four Seasons San Jacinto Ballroom 98 San Jacinto Blvd','lat':'30.262534','long':'-97.742907'},
	{'location':'Omni Downtown Longhorn 700 San Jacinto','lat':'30.268876','long':'-97.740389'},
	{'location':'Driskill Hotel Maximilian\n604 Brazos St','lat':'30.26801','long':'-97.741829'},
	{'location':'AT&amp;T Conference Center Classroom 105 1900 University Ave','lat':'30.281994','long':'-97.74019'},
	{'location':'AT&amp;T Conference Center Classroom 204 1900 University Ave','lat':'30.281994','long':'-97.74019'},
	{'location':'Sheraton Austin Creekside 701 E 11th St','lat':'30.27031', 'long':'-97.734225'},
	{'location':'Sheraton Austin Capitol ABCD 701 E 11th St','lat':'30.27031', 'long':'-97.734225'},
	{'location':'Radisson Town Lake Town Lake Ballroom 111 E Cesar Chavez','lat':'30.263047', 'long':'-97.743712'},
	{'location':'Hyatt Regency Austin Big Bend 208 Barton Springs Rd','lat':'30.260778', 'long':'-97.746552'},
	{'location':'Courtyard Marriott Rio Grande Ballroom 300 E 4th St','lat':'30.265731', 'long':'-97.740560'},//30.265731, -97.740560
	]}
	
function filterVenues(_arr){
	var _sessions = $('.location');
	var _totalSessions = 0;
	for(i=0 ;i< _sessions.length; i++){
		var _shortName = _sessions[i].innerHTML.slice(0,_sessions[i].innerHTML.indexOf("\n"));
		for(j=0;j<_arr.length; j++){
			if( _arr[j].indexOf(_shortName) >-1){
				$(_sessions[i]).parent().removeClass('hidden');
				_totalSessions++;
				break;
			}
		}
	}
	if(_totalSessions <1){
		$('li').removeClass("hidden");
	}
};	
	
function success(position) {
  
 // var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  var _lat =position.coords.latitude;// 30.281994;//30.262725;//
  var _long =position.coords.longitude; //-97.740418;//p-97.74019;
  var _okVenues = [];
  console.log("position.coords.:"+position.coords.altitude);
  function filterLocations(_tolerence){
  	for(i=0; i<locations.locations.length; i++){
  		var _latDiff = (Math.abs(Number(locations.locations[i].lat) - _lat));
  		var _longDiff = (Math.abs(Number(locations.locations[i].long) - _long));
  		if(_latDiff<= _tolerence && _longDiff <= _tolerence){
  			//console.log(locations.locations[i].location);
  			_okVenues.push(locations.locations[i].location);
  		}
  	}
  		console.log("_tolerence:"+_tolerence);
  		console.log(" _okVenues.length:"+ _okVenues.length);
  		
  	if(_tolerence >= .01 && _okVenues.length < 1  ){
  		_tolerence = _tolerence+.0025;
  		console.log("tolernce:"+_tolerence);
  		filterLocations(_tolerence);
  	} else if(_okVenues.length < 1){
  		$('li').removeClass("hidden");
  	} 
  	
 }
  filterLocations(.0025);	 
  filterVenues(_okVenues);
}

function error(msg) {
  $('li').removeClass("hidden");
  // console.log(arguments);
}	
	
	
	
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error, {'enableHighAccuracy':true,'timeout':10000,'maximumAge':0});
} else {
  error('not supported');
  
}





}(window.jQuery);