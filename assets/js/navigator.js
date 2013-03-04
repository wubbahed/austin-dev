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
	{'location':'Courtyard Marriott Brazos 300 E 4th St','lat':'30.265731', 'long':'-97.740560'},
	//bars
	{'location':'609 Davis St Rainey St., Austin, TX ','lat':'30.260026', 'long':'-97.738756'},
	{'location':'1808 E Cesar Chavez St','lat':'30.257383', 'long':'-97.724951'},
	{'location':'709 E 6th St','lat':'30.265893', 'long':'-97.735703'},
	{'location':'609 Davis St at Rainey St','lat':'30.260026', 'long':'-97.738756'},
	{'location':'413 E. 6th Street 6th Between Trinity and Neches','lat':'30.266991', 'long':'-97.73884'},
	{'location':'400 W. 2nd St. Guadalupe St.','lat':'30.265423', 'long':'-97.747778'},
	{'location':'81 Rainey','lat':'30.25894', 'long':'-97.738475'},
	{'location':'1308 E 6th St','lat':'30.263953', 'long':'-97.728736'},
	{'location':'97 Rainey St. Driskill St.','lat':'30.260758', 'long':'-97.737883'},
	{'location':'2034 S. Lamar Blvd.','lat':'30.248942', 'long':'-97.768928'},
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
  console.log("GETTING INTO SUCCESS");
 // var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  var _lat =position.coords.latitude;// 30.281994;//30.262725;//
  var _long =position.coords.longitude; //-97.740418;//p-97.74019;
  var _okVenues = [];
  var _sessions = $('.location');
  var _locationArr = $('.map-address');
  console.log(locations);
  var _totalSessions = 0;
  var _li  =[];
  // first sort through the sessions
  for(i=0 ; i< _sessions.length; i++){
  		
		// strip off the address, carrige return in the json was breaking it
		var _shortName = _sessions[i].innerHTML.slice(0,_sessions[i].innerHTML.indexOf("\n"));
console.log(_shortName);
		//calculate the distance between current location and venue and add it to the parent li
		for(j=0; j < locations.locations.length; j++){
			
			if( locations.locations[j].location.indexOf(_shortName) >-1){
				var _distance = distance( _lat, _long, Number(locations.locations[j].lat), Number(locations.locations[j].long),'K');
				_li.push($(_sessions[i]).parent());
				$(_sessions[i]).parent().attr('distance',_distance );
				
				$(_locationArr[i]).attr('href',' http://maps.google.com/maps?q='+locations.locations[j].lat+','+locations.locations[j].long);
				  console.log($(_locationArr[i]));
				break;
			}
		}
		$(_sessions[i]).parent().parent().removeClass('hidden');
	
	}
	
	_li.sort(function(a, b) {
		
	    if(Number($(a).attr("distance")) > Number($(b).attr("distance")))
	        return 1;
	    else return -1;
	});
	
	$('#sessions').empty().html(_li);
	
	fadeIn();
	
	

}
function fadeIn(){
	if($(window).height()>=420){
      $('.overall-container').css({'height':(($(window).height()))+'px'});
     // $('.overall-container').css({'height':($(window).height())+'px'});
	} else{
		$('.overall-container').css({'height':'420px'});
	}
	//$('.overall-container').css({'height':($(window).height())+'px'});//+$(window).outerHeight )
	
	_sessions =$('#sessions li');
	//$('.navbar').delay(1750).animate({height:'25%'}, 500);
	//$('#Stage').delay(1750).animate({top:'0%'}, 500);
	for(i=0;i<_sessions.length;i++){
		$(_sessions[i]).removeClass('hidden');
		//$(_sessions[i]).parent().hide(0);
		$(_sessions[i]).css('top', $(window).height());
		//$(_sessions[i]).css('left', -$(window).width()*2);
		
		//	$(_sessions[i]).parent().delay(500+(500*i)).fadeIn(500);
			$(_sessions[i]).delay(850+(150*i)).animate({top:0, left:0}, (450), 'easeOutCubic', function(){$(this).find('.close').removeClass('hidden');$(this).find('.close').fadeIn()});
		
		//}
	}
	//	$(_sessions[0]).parent().animate({ backgroundColor: "#f6f6f6" }, 500);
	//	$(_sessions[1]).parent().animate({ backgroundColor: "#e3e3e3" }, 500);
	//	$(_sessions[2]).parent().animate({ backgroundColor: "#cccccc" }, 500);
		
		$(_sessions[0]).addClass('first');
		$(_sessions[1]).addClass('second');
		$(_sessions[2]).addClass('third');
		//add support for swiping
		
	$('.close').click(function (e) {
	  e.preventDefault();
	 
  	
	 $(this).slideUp(500);
	  var _newStart=0;
	  var _sessions = $('#sessions li').not('.hidden');
	  
	    for(i=0;i<_sessions.length;i++){
	    	
		  	if( $(this).parent().hasClass("first") && ( $(_sessions[i]).hasClass("first"))){
		  		 $(this).parent().removeClass('first');
		  		 $(_sessions[i]).slideUp(500 ,function() {
   				 // Animation complete.
   				  $(_sessions[i]).addClass('hidden');
  				});	
		  		$(_sessions[i+1]).removeClass('second');
		  		$(_sessions[i+1]).addClass('first');
		  		$(_sessions[i+2]).removeClass('third');
		  		$(_sessions[i+2]).addClass('second');
		  		$(_sessions[i+3]).addClass('third');
		  		break;
		  	} else if($(this).parent().hasClass("second")&& ($(_sessions[i]).hasClass("second"))){
		  		 $(this).parent().removeClass('second');
		  		 $(_sessions[i]).slideUp(500 ,function() {
   				 // Animation complete.
   				  $(_sessions[i]).addClass('hidden');
  				});	
		  		$(_sessions[i+1]).removeClass('third')
		  		$(_sessions[i+1]).addClass('second');
		  		$(_sessions[i+2]).addClass('third');
		  		break;
		  	} else if($(this).parent().hasClass("third")&& ( $(_sessions[i]).hasClass("third"))){
		  	 $(this).parent().removeClass('third');
		  		 $(_sessions[i]).slideUp(500 ,function() {
   				 // Animation complete.
   				  $(_sessions[i]).addClass('hidden');
  				});	
		  		$(_sessions[i+1]).addClass('third');
		  		break;
		  	}
	  	
	  }
	 
		
		
	});
	$(window).resize(function(){
	if($(window).height()>=420){
      $('.overall-container').css({'height':(($(window).height()))+'px'});
     // $('.overall-container').css({'height':($(window).height())+'px'});
	} else{
		$('.overall-container').css({'height':'420px'});
	}
    });
}
function error(msg) {
 // $('li').removeClass("hidden");
  	fadeIn();
   console.log(arguments);
}	
	
	window.addEventListener('unload', function() { $('body').hide(); } );
	
/*if (window.navigator.geolocation) {
  window.navigator.geolocation.getCurrentPosition(success, error, {'enableHighAccuracy':true,'timeout':7000,'maximumAge':0});
} else {
  error('not supported');
  
}*/


//	window.addEventListener("orientationchange", hideAddressBar );
	 
	//window.addEventListener("load", function(){
		jQuery(document).ready(function() {
		//'  <script src="/assets/js/planb_edgePreload.js"></script>',
		//window.addEventListener("orientationchange", hideAddressBar );
		$('#logo_holder img').css({ 'opacity' : 1.0 });
		//$('#logo_main').css({ 'opacity' : 1.0 });
		//$('#logo_holder').fadeIn('fast');
		//console.log($('#logo-base').css(opacity));
		//$('#logo-slash').css({ 'opacity' : 1.0 });
		if (window.navigator.geolocation) {
		  window.navigator.geolocation.getCurrentPosition(success, error, {'enableHighAccuracy':true,'timeout':7000,'maximumAge':0});
		} else {
		  error('not supported');
		  
		}
			/*		var slides = jQuery('#sessions li')
					var width = slides[0].width*.5; 
					slides
					.on('swiperight', function(e) {
							if($(this).position().left<'0'){
								$(this).animate({left:0},500);
							//	$(this).find('.close').animate({right:'52%'},500);
							} 
					})
					.on('swipeleft', function(e) {
						if($(this).position().left==0){
								$(this).animate({left:'-100%'},500);
							//	$(this).find('.close').animate({right:'8%'},500);
							}
					})
					.on('click', function(e) {
							if($(this).position().left<'0'){
								$(this).animate({left:0},500);
							//	$(this).find('.close').animate({right:'52%'},500);
							} else{
								$(this).animate({left:'-100%'},500);
							///	$(this).find('.close').animate({right:'8%'},500);
							}
					})
					
					.on('movestart', function(e) {
						// If the movestart heads off in a upwards or downwards
						// direction, prevent it so that the browser scrolls normally.
						if ((e.distX > e.distY && e.distX < -e.distY) ||
						    (e.distX < e.distY && e.distX > -e.distY)) {
							//e.preventDefault();
							return;
						}
					})
						// To allow the slide to keep step with the finger,
					// temporarily disable transitions.
					
					.on('touch', function(e) {
							if($(this).position().left<'0'){
								$(this).animate({left:0},500);
							//	$(this).find('.close').animate({right:'52%'},500);
							} else{
								$(this).animate({left:'-100%'},500);
								//$(this).find('.close').animate({right:'8%'},500);
							}
					})
					
					*/
	});
}(window.jQuery);