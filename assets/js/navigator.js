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
	{'location':'Omni Downtown Austin 700 San Jacinto','lat':'30.268876','long':'-97.740389'},
	{'location':'Driskill Hotel Maximilian 604 Brazos St','lat':'30.26801','long':'-97.741829'},
	{'location':'AT&T Conference Center Classroom 105 1900 University Ave','lat':'30.281994','long':'-97.74019'},
	{'location':'AT&T Conference Center Classroom 104 1900 University Ave','lat':'30.281994','long':'-97.74019'},
	{'location':'AT&T Conference Center Classroom 106 1900 University Ave','lat':'30.281994','long':'-97.74019'},
	{'location':'AT&T Conference Center Classroom 204 1900 University Ave','lat':'30.281994','long':'-97.74019'},
	{'location':'AT&T Conference Center Classroom 202 1900 University Ave','lat':'30.281994','long':'-97.74019'},
	{'location':'AT&T Conference Center Salon C 1900 University Ave','lat':'30.281994','long':'-97.74019'},
	
	
	{'location':'Sheraton Austin Creekside 701 E 11th St','lat':'30.27031', 'long':'-97.734225'},
	{'location':'Sheraton Austin Capitol View South 701 E 11th St','lat':'30.27033', 'long':'-97.734332'},
	{'location':'Sheraton Austin Capitol View North 701 E 11th St','lat':'30.27033', 'long':'-97.734332'},
	{'location':'Sheraton Austin Capitol EFGH 701 E 11th St','lat':'30.27033', 'long':'-97.734332'},
	{'location':'Sheraton Austin Capitol ABCD 701 E 11th St','lat':'30.27031', 'long':'-97.734225'},
	
	{'location':'Long Center Dell Hall 701 W Riverside Dr','lat':'30.260465', 'long':'-97.751171'},
	{'location':'Long Center\n701 W Riverside Dr','lat':'30.260465', 'long':'-97.751171'},
	{'location':'Palmer Events Center Exhibit Hall 1 900 Barton Springs Rd','lat':'30.26054', 'long':'-97.752807'},
	{'location':'Radisson Town Lake Town Lake Ballroom 111 E Cesar Chavez','lat':'30.263047', 'long':'-97.743712'},
	
	{'location':'Hyatt Regency Austin Big Bend 208 Barton Springs Rd','lat':'30.260778', 'long':'-97.746552'},
	{'location':'Hyatt Regency Austin Texas Ballroom 5-7 208 Barton Springs Rd','lat':'30.260778', 'long':'-97.746552'},
	{'location':'Hyatt Regency Austin Texas Ballroom 1-4 208 Barton Springs Rd','lat':'30.260778', 'long':'-97.746552'},
	
	{'location':'Fogo de Chao 309 E 3rd St','lat':'30.26424', 'long':'-97.74069'},
	{'location':'Empire 606 E 7th St','lat':'30.267457', 'long':'-97.736027'},
	{'location':'The North Door 501 N I-35','lat':'30.264948', 'long':'-97.734193'},
	{'location':'Mellow Johnnys Bike Shop 400 Nueces St','lat':'30.268146', 'long':'-97.749242'},
	{'location':'Courtyard Marriott Rio Grande Ballroom 300 E 4th St','lat':'30.265731', 'long':'-97.740560'},
	{'location':'Courtyard Marriott Brazos 300 E 4th St','lat':'30.265731', 'long':'-97.740560'},
	//bars
	{'location':'609 Davis St Rainey St., Austin, TX ','lat':'30.260026', 'long':'-97.738756'},
	{'location':'1808 E Cesar Chavez St','lat':'30.257383', 'long':'-97.724951'},
	{'location':'709 E 6th St','lat':'30.265893', 'long':'-97.735703'},
	{'location':'609 Davis St at Rainey St','lat':'30.260026', 'long':'-97.738756'},
	{'location':'413 E. 6th St. btw Trinity and Neches','lat':'30.266991', 'long':'-97.73884'},
	{'location':'400 W. 2nd St. Guadalupe St.','lat':'30.265423', 'long':'-97.747778'},
	{'location':'81 Rainey','lat':'30.25894', 'long':'-97.738475'},
	{'location':'1308 E 6th St','lat':'30.263953', 'long':'-97.728736'},
	{'location':'97 Rainey St. Driskill St.','lat':'30.260758', 'long':'-97.737883'},
	{'location':'2034 S. Lamar Blvd.','lat':'30.248942', 'long':'-97.768928'},
	{'location':'601 W. 6th Street','lat':'30.269572', 'long':'-97.748668'},
	{'location':'607 Trinity St.','lat':'30.267669', 'long':'-97.738995'},
	{'location':'121 E 5th St Brazos','lat':'30.266723', 'long':'-97.742046'},
	{'location':'1016 E 6th St at Medina St','lat':'30.26502', 'long':'-97.731607'},
	{'location':'604 Brazos St 6th St','lat':'30.268016', 'long':'-97.741764'},
	{'location':'500 Comal St','lat':'30.262585', 'long':'-97.726987'},
	{'location':'1315 S. Congress Ave.','lat':'30.250521', 'long':'-97.749096'},
	{'location':'1618 1/2 E 6th St.','lat':'30.262659', 'long':'-97.725052'},
	{'location':'3201 S. Lamar Blvd.','lat':'30.241082', 'long':'-97.785334'},
	{'location':'1316 S. Congress Ave.','lat':'30.250662', 'long':'-97.749631'}, 
	{'location':'1412 S. Congress Ave.','lat':'30.249164', 'long':'-97.750105'}, 
	{'location':'510 S. Congress Ave.','lat':'30.256245', 'long':'-97.747523'}, 
	{'location':'1300 Colorado St.','lat':'30.275785', 'long':'-97.742115'}, 
	{'location':'200 Congress Avenue','lat':'30.264551', 'long':'-97.74432'}, 
	{'location':'61 Rainey St','lat':'30.257974', 'long':'-97.738912'}, 
	{'location':'1600 W. 5th St.','lat':'30.274083', 'long':'-97.763367'},
	{'location':'1417 S 1st St','lat':'30.250174', 'long':'-97.754671'},
	{'location':'1700 E 5th St.','lat':'30.261673', 'long':'-97.724829'},
	{'location':'1308 E 6th St','lat':'30.263953', 'long':'-97.728772'},
	{'location':'1100 E. 6th St.','lat':'30.26486', 'long':'-97.731299'},
	{'location':'1700 E. 6th St.','lat':'30.262537', 'long':'-97.724242'},
	{'location':'98 San Jacinto Blvd','lat':'30.261626', 'long':'-97.741469'},
	{'location':'500 W. 29th St.','lat':'30.29554', 'long':'-97.741781'},
	{'location':'1133 E 11th St','lat':'30.268642', 'long':'-97.728144'},
	
	]}
	


	function distance(lat1, lon1, lat2, lon2, unit) {
		var radlat1 = Math.PI * lat1 / 180
		var radlat2 = Math.PI * lat2 / 180
		var radlon1 = Math.PI * lon1 / 180
		var radlon2 = Math.PI * lon2 / 180
		var theta = lon1 - lon2
		var radtheta = Math.PI * theta / 180
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		dist = Math.acos(dist)
		dist = dist * 180 / Math.PI
		dist = dist * 60 * 1.1515
		if (unit == "K") {
			dist = dist * 1.609344
		}
		if (unit == "N") {
			dist = dist * 0.8684
		}
		return dist
	}  	


	function success(position) {
		var _lat = position.coords.latitude;
		// 30.281994;//30.262725;//
		var _long = position.coords.longitude;
		var _okVenues = [];
		var _sessions = $('.location');
		var _locationArr = $('.map-address');
		var _totalSessions = 0;
		var _li = [];
		var _getTime = new Date();
		for ( i = 0; i < _sessions.length; i++) {

			// strip off the address, carrige return in the json was breaking it
			var _shortName = $(_sessions[i]).text();
			_li.push($(_sessions[i]).parent());
			for ( j = 0; j < locations.locations.length; j++) {
				//	console.log(locations.locations[j].location.indexOf(_shortName));Feas
				if (locations.locations[j].location.indexOf(_shortName) > -1) {
					var _distance = distance(_lat, _long, Number(locations.locations[j].lat), Number(locations.locations[j].long), 'K');
					//_li.push($(_sessions[i]).parent());
					$(_sessions[i]).parent().attr('distance', _distance);

					$(_locationArr[i]).attr('href', ' http://maps.google.com/maps?q=' + locations.locations[j].lat + ',' + locations.locations[j].long);
					break;
				}
			}
			$(_sessions[i]).parent().parent().removeClass('hidden');

		}

		_li.sort(function(a, b) {

			if (Number($(a).attr("distance")) > Number($(b).attr("distance")))
				return 1;
			else
				return -1;
		});
		// remove close btns if not enough results
		var _extras = $("#sessions .extra");
		_li.push(_extras);
		
		$('#sessions').empty().html(_li);
		

		fadeIn();

	}


	function fadeIn() {
		if ($(window).height() >= 420) {
			$('.overall-container').css({
				'height' : (($(window).height())) + 'px'
			});
		} else {
			$('.overall-container').css({
				'height' : '420px'
			});
		}

		_sessions = $('#sessions li');
		for ( i = 0; i < _sessions.length; i++) {
			$(_sessions[i]).removeClass('hidden');
			$(_sessions[i]).css('top', $(window).height());
			//$(_sessions[i]).css('left', -$(window).width()*2);

			//	$(_sessions[i]).parent().delay(500+(500*i)).fadeIn(500);
			$(_sessions[i]).delay(850 + (150 * i)).animate({
				top : 0,
				left : 0
			}, (450), 'easeOutCubic', function() {
			//	console.log(_sessions.length);
				if(_sessions.length>=3){
					$(this).find('.close').removeClass('hidden');
					$(this).find('.close').fadeIn();
				} 
			});
		}

		$(_sessions[0]).addClass('first');
		$(_sessions[1]).addClass('second');
		$(_sessions[2]).addClass('third');
		//add support for swiping
		//console.log("sessions length on start: "+_sessions.length);
		
		$('.close').click(function(e) {
			e.preventDefault();

			//$(this).slideUp(500);
			var _newStart = 0;
			var _sessions = $('#sessions li').not('.hidden');

			for ( i = 0; i < _sessions.length; i++) {

				if ($(this).parent().hasClass("first") && ( $(_sessions[i]).hasClass("first"))) {
					//$(this).parent().removeClass('first');
				//	$(_sessions[i]).addClass('hiding');
					$(_sessions[i]).slideUp(500, function() {
						// Animation complete.
						$(_sessions[i]).addClass('hidden');
						$(_sessions[i]).parent().removeClass('first');
					});
					$(_sessions[i + 1]).removeClass('second');
					$(_sessions[i + 1]).addClass('first');
					$(_sessions[i + 2]).removeClass('third');
					$(_sessions[i + 2]).addClass('second');
					$(_sessions[i + 3]).addClass('third');
					break;
				} else if ($(this).parent().hasClass("second") && ($(_sessions[i]).hasClass("second"))) {
					
					//$(_sessions[i]).addClass('hiding');
					$(_sessions[i]).slideUp(500, function() {
						// Animation complete.
						$(_sessions[i]).addClass('hidden');
						$(_sessions[i]).parent().removeClass('second');
					});
					$(_sessions[i + 1]).removeClass('third')
					$(_sessions[i + 1]).addClass('second');
					$(_sessions[i + 2]).addClass('third');
					break;
				} else if ($(this).parent().hasClass("third") && ( $(_sessions[i]).hasClass("third"))) {
					//$(this).parent().removeClass('third');
				//	$(_sessions[i]).addClass('hiding');
					$(_sessions[i]).slideUp( 500, function() {
						// Animation complete.
						$(_sessions[i]).addClass('hidden');
						$(_sessions[i]).parent().removeClass('third');
					});
					$(_sessions[i + 1]).addClass('third');
					break;
				}
			}
	

		});

	}

	function error(msg) {
	 // $('li').removeClass("hidden");
	  	fadeIn();
	  // console.log(arguments);
	}	
		
	
	
	jQuery(document).ready(function() {
		
		window.addEventListener('unload', function() { $('body').hide(); } );
		
		$('#logo_holder img').css({ 'opacity' : 1.0 });
		
		if (window.navigator.geolocation) {
		  window.navigator.geolocation.getCurrentPosition(success, error, {'enableHighAccuracy':true,'timeout':7000,'maximumAge':0});
		  // window.navigator.geolocation.watchPosition(success, error, {'enableHighAccuracy':true,'timeout':7000,'maximumAge':0});
		} else {
		  error('not supported');
		  
		}
		
		$(window).resize(function() {
			if ($(window).height() >= 420) {
				$('.overall-container').css({
					'height' : (($(window).height())) + 'px'
				});
				// $('.overall-container').css({'height':($(window).height())+'px'});
			} else {
				$('.overall-container').css({
					'height' : '420px'
				});
			}
		}); 

	
	});
}(window.jQuery);