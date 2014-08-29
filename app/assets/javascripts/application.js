// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require foundation
//= require_tree .

$(function(){ $(document).foundation(); });

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


function initialize() {

	var styles = [
	    {
	        "featureType": "administrative",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "on"
	            },
	            {
	                "saturation": -100
	            },
	            {
	                "lightness": 20
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "on"
	            },
	            {
	                "saturation": -100
	            },
	            {
	                "lightness": 40
	            }
	        ]
	    },
	    {
	        "featureType": "water",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "on"
	            },
	            {
	                "saturation": -10
	            },
	            {
	                "lightness": 30
	            }
	        ]
	    },
	    {
	        "featureType": "landscape.man_made",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "simplified"
	            },
	            {
	                "saturation": -60
	            },
	            {
	                "lightness": 10
	            }
	        ]
	    },
	    {
	        "featureType": "landscape.natural",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "simplified"
	            },
	            {
	                "saturation": -60
	            },
	            {
	                "lightness": 60
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "off"
	            },
	            {
	                "saturation": -100
	            },
	            {
	                "lightness": 60
	            }
	        ]
	    },
	    {
	        "featureType": "transit",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "off"
	            },
	            {
	                "saturation": -100
	            },
	            {
	                "lightness": 60
	            }
	        ]
	    }
	]

	var styledMap = new google.maps.StyledMapType(styles, {name: "Area 405"});

	var mapOptions = {
		center: new google.maps.LatLng(39.306985, -76.618332),
		zoom: 15,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
		}
	};
	
	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');

	var icon = 'http://www.clker.com/cliparts/c/9/m/4/B/d/google-maps-grey-marker-w-shadow-th.png'

	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(39.306985, -76.610332),
		map: map,
		icon: icon,
		title:"Area 405"
	});

	map.setOptions({'scrollwheel': false});
}

google.maps.event.addDomListener(window, 'load', initialize);