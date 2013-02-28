!function ($) {
	
	var locations ={'locations':[
	{'location':'Wanderlust Wanderlust 206 E 4th St','lat':'30.265913','long':'-97.741637'},
	{'location':'Hilton Austin Downtown Salon D 500 E 4th St','lat':'30.26267','long':'-97.740201'},
	{'location':'Hilton Austin Downtown Salon ABC 500 E 4th St','lat':'30.265418','long':'-97.738319'},
	{'location':'Hilton Austin Downtown Salon JK 500 E 4th St','lat':'30.265418','long':'-97.738319'},
	{'location':'Hilton Austin Downtown Salon FGH 500 E 4th St','lat':'30.265418','long':'-97.738319'},
	{'location':'Hilton Austin Downtown Room 616AB 500 E 4th St','lat':'30.265418','long':'-97.738319'},
	{'location':'Hilton Austin Downtown Room 615AB 500 E 4th St','lat':'30.265418','long':'-97.738319'},
	{'location':'Hilton Austin Downtown Salon A/B 500 E 4th St','lat':'30.265418','long':'-97.738319'},
	{'location':'Hilton Austin Downtown Room 400/402 500 E 4th St','lat':'30.265418','long':'-97.738319'},
	
	{'location':'Austin Convention Center Ballroom A 500 E Cesar Chavez St','lat':'30.262621','long':'-97.739747'},//30.262621,-97.739747
	{'location':'Austin Convention Center Ballroom B 500 E Cesar Chavez St','lat':'30.262976','long':'-97.739367'},
	{'location':'Austin Convention Center Ballroom C 500 E Cesar Chavez St','lat':'30.265418','long':'-97.739265'},
	{'location':'Austin Convention Center Ballroom BC 500 E Cesar Chavez St','lat':'30.265418','long':'-97.739265'},
	{'location':'Austin Convention Center Ballroom D Foyer 500 E Cesar Chavez St','lat':'30.264435','long':'-97.739541'},
	{'location':'Austin Convention Center Ballroom D 500 E Cesar Chavez St','lat':'30.264435','long':'-97.739541'},
	{'location':'Austin Convention Center Ballroom E 500 E Cesar Chavez St','lat':'30.264319','long':'-97.739871'},
	{'location':'Austin Convention Center Ballroom EF 500 E Cesar Chavez St','lat':'30.264502','long':'-97.73982'},
	{'location':'Austin Convention Center Ballroom G 500 E Cesar Chavez St','lat':'30.264688','long':'-97.739753'},
	{'location':'Austin Convention Center Room EF 500 E Cesar Chavez St','lat':'30.265418','long':'-97.738319'},
	{'location':'Austin Convention Center Exhibit Hall 5 500 E Cesar Chavez St','lat':'30.264421','long':'-97.738484'},
	{'location':'Austin Convention Center Room 9ABC 500 E Cesar Chavez St','lat':'30.264421','long':'-97.738484'},
	{'location':'Austin Convention Center Room 18ABCD 500 E Cesar Chavez St','lat':'30.264067','long':'-97.738701'},
	{'location':'Austin Convention Center Room 10AB 500 E Cesar Chavez St','lat':'30.264067','long':'-97.738701'},
	{'location':'Austin Convention Center Room 6AB 500 E Cesar Chavez St','lat':'30.265418','long':'-97.738319'},
	{'location':'Austin Convention Center Room 5ABC 500 E Cesar Chavez St','lat':'30.265418','long':'-97.738319'},
	{'location':'Austin Convention Center Room 12AB 500 E Cesar Chavez St','lat':'30.264067','long':'-97.738701'},
	{'location':'Austin Convention Center Room 16AB 500 E Cesar Chavez St','lat':'30.264067','long':'-97.738701'},
	{'location':'Austin Convention Center Next Stage EH 3/4 500 E Cesar Chavez St','lat':'30.262621','long':'-97.739747'},
	
	{'location':'Four Seasons San Jacinto Ballroom 98 San Jacinto Blvd','lat':'30.262534','long':'-97.742907'},
	{'location':'Omni Downtown Longhorn 700 San Jacinto','lat':'30.268876','long':'-97.740389'},
	{'location':'Omni Downtown Lone Star 700 San Jacinto','lat':'30.268876','long':'-97.740389'},
	{'location':'Driskill Hotel Maximilian 604 Brazos St','lat':'30.26801','long':'-97.741829'},
	{'location':'AT&amp;T Conference Center Classroom 105 1900 University Ave','lat':'30.281994','long':'-97.74019'},
	{'location':'AT&amp;T Conference Center Classroom 104\n1900 University Ave','lat':'30.281994','long':'-97.74019'},
	{'location':'AT&amp;T Conference Center Classroom 204 1900 University Ave','lat':'30.281994','long':'-97.74019'},
	{'location':'AT&amp;T Conference Center Classroom 202 1900 University Ave','lat':'30.281994','long':'-97.74019'},
	
	{'location':'Sheraton Austin Creekside 701 E 11th St','lat':'30.27031', 'long':'-97.734225'},
	{'location':'Sheraton Austin Capitol View South 701 E 11th St','lat':'30.27033', 'long':'-97.734332'},
	{'location':'Sheraton Austin Capitol View North 701 E 11th St','lat':'30.27033', 'long':'-97.734332'},
	{'location':'Sheraton Austin Capitol EFGH 701 E 11th St','lat':'30.27033', 'long':'-97.734332'},
	{'location':'Sheraton Austin Capitol ABCD 701 E 11th St','lat':'30.27031', 'long':'-97.734225'},
	
	{'location':'Long Center Dell Hall 701 W Riverside Dr','lat':'30.260465', 'long':'-97.751171'},
	{'location':'Palmer Events Center Exhibit Hall 1 900 Barton Springs Rd','lat':'30.26054', 'long':'-97.752807'},
	{'location':'Radisson Town Lake Town Lake Ballroom 111 E Cesar Chavez','lat':'30.263047', 'long':'-97.743712'},
	
	{'location':'Hyatt Regency Austin Big Bend 208 Barton Springs Rd','lat':'30.260778', 'long':'-97.746552'},
	{'location':'Hyatt Regency Austin Texas Ballroom 5-7 208 Barton Springs Rd','lat':'30.260778', 'long':'-97.746552'},
	{'location':'Hyatt Regency Austin Texas Ballroom 1-4 208 Barton Springs Rd','lat':'30.260778', 'long':'-97.746552'},
	
	{'location':'Fogo de Chao 309 E 3rd St','lat':'30.26424', 'long':'-97.74069'},
	{'location':'Empire 606 E 7th St','lat':'30.267457', 'long':'-97.736027'},
	{'location':'The North Door 501 N I-35','lat':'30.264948', 'long':'-97.734193'},
	{'location':'Mellow Johnny\u2019s Bike Shop 400 Nueces St','lat':'30.268146', 'long':'-97.749242'},
	{'location':'Courtyard Marriott Rio Grande Ballroom 300 E 4th St','lat':'30.265731', 'long':'-97.740560'},
	{'location':'Courtyard Marriott Brazos 300 E 4th St','lat':'30.265731', 'long':'-97.740560'}
	]}
	

function distance(lat1, lon1, lat2, lon2, unit) {
	var radlat1 = Math.PI * lat1/180
	var radlat2 = Math.PI * lat2/180
	var radlon1 = Math.PI * lon1/180
	var radlon2 = Math.PI * lon2/180
	var theta = lon1-lon2
	var radtheta = Math.PI * theta/180
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist)
	dist = dist * 180/Math.PI
	dist = dist * 60 * 1.1515
	if (unit=="K") { dist = dist * 1.609344 }
	if (unit=="N") { dist = dist * 0.8684 }
	return dist
}  	
function success(position) {
  
 // var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  var _lat =30.268543//position.coords.latitude;// 30.281994;//30.262725;//
  var _long =-97.742027;//position.coords.longitude; //-97.740418;//p-97.74019;
  var _okVenues = [];
  var _sessions = $('.location');
  var _totalSessions = 0;
  var _li  =[];
  // first sort through the sessions
  for(i=0 ; i< _sessions.length; i++){
  		console.log("getting here:"+1);
		// strip off the address, carrige return in the json was breaking it
		var _shortName = _sessions[i].innerHTML.slice(0,_sessions[i].innerHTML.indexOf("\n"));
		// iterate through the locations and when we have a match, 
		//calculate the distance between current location and venue and add it to the parent li
		for(j=0; j < locations.locations.length; j++){
			console.log("getting here:"+2);
			if( locations.locations[j].location.indexOf(_shortName) >-1){
				var _distance = distance( _lat, _long, Number(locations.locations[j].lat), Number(locations.locations[j].long),'K');
				_li.push($(_sessions[i]).parent());
				$(_sessions[i]).parent().attr('distance',_distance );
				break;
			}
		}
		$(_sessions[i]).parent().removeClass('hidden');
	
	}
	
	_li.sort(function(a, b) {
		console.log("getting here:"+3);
	    if(Number($(a).attr("distance")) > Number($(b).attr("distance")))
	        return 1;
	    else return -1;
	});
	
	$('#sessions').empty().html(_li);
	console.log("getting here:"+4);
	fadeIn();
	
	

}
function fadeIn(){
	$('.overall-container').css({'height':(($(window).height()))+'px'});
	
	_sessions = $('.location');
	$('.navbar').delay(1750).animate({height:'25%'}, 500);
	for(i=0;i<_sessions.length;i++){
		$(_sessions[i]).parent().removeClass('hidden');
		$(_sessions[i]).parent().hide(0);
		
	//	if(i<3){
			
			$(_sessions[i]).parent().delay(1800+(500*i)).fadeIn(500);
		
		//}
	}
	
	$('.close').click(function (e) {
	  e.preventDefault();
	  $(this).parent().slideUp('500');
	});
	$(window).resize(function(){
		console.log("resizing the window");
      $('.overall-container').css({'height':(($(window).height()))+'px'});
    });
}
function error(msg) {
 // $('li').removeClass("hidden");
  	fadeIn();
  // console.log(arguments);
}	
	
	
	
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error, {'enableHighAccuracy':true,'timeout':10000,'maximumAge':0});
} else {
  error('not supported');
  
}




}(window.jQuery);