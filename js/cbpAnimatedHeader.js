/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() ***REMOVED***

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-fixed-top' ),
		didScroll = false,
		changeHeaderOn = 300;

	function init() ***REMOVED***
		window.addEventListener( 'scroll', function( event ) ***REMOVED***
			if( !didScroll ) ***REMOVED***
				didScroll = true;
				setTimeout( scrollPage, 250 );
			***REMOVED***
		***REMOVED***, false );
	***REMOVED***

	function scrollPage() ***REMOVED***
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) ***REMOVED***
			classie.add( header, 'navbar-shrink' );
		***REMOVED***
		else ***REMOVED***
			classie.remove( header, 'navbar-shrink' );
		***REMOVED***
		didScroll = false;
	***REMOVED***

	function scrollY() ***REMOVED***
		return window.pageYOffset || docElem.scrollTop;
	***REMOVED***

	init();

***REMOVED***)();