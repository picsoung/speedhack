/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() ***REMOVED***
    $('.page-scroll a').bind('click', function(event) ***REMOVED***
        var $anchor = $(this);
        $('html, body').stop().animate(***REMOVED***
            scrollTop: $($anchor.attr('href')).offset().top
***REMOVED***, 1500, 'easeInOutExpo');
        event.preventDefault();
***REMOVED***);
***REMOVED***);

// Floating label headings for the contact form
$(function() ***REMOVED***
    $("body").on("input propertychange", ".floating-label-form-group", function(e) ***REMOVED***
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
***REMOVED***).on("focus", ".floating-label-form-group", function() ***REMOVED***
        $(this).addClass("floating-label-form-group-with-focus");
***REMOVED***).on("blur", ".floating-label-form-group", function() ***REMOVED***
        $(this).removeClass("floating-label-form-group-with-focus");
***REMOVED***);
***REMOVED***);

// Highlight the top nav as scrolling occurs
$('body').scrollspy(***REMOVED***
    target: '.navbar-fixed-top'
***REMOVED***)

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() ***REMOVED***
    $('.navbar-toggle:visible').click();
***REMOVED***);