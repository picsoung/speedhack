$(function() ***REMOVED***

    $("input,textarea").jqBootstrapValidation(***REMOVED***
        preventSubmit: true,
        submitError: function($form, event, errors) ***REMOVED***
            // additional error messages or events
***REMOVED***,
        submitSuccess: function($form, event) ***REMOVED***
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) ***REMOVED***
                firstName = name.split(' ').slice(0, -1).join(' ');
    ***REMOVED***
            $.ajax(***REMOVED***
                url: "././mail/contact_me.php",
                type: "POST",
                data: ***REMOVED***
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
        ***REMOVED***,
                cache: false,
                success: function() ***REMOVED***
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
        ***REMOVED***,
                error: function() ***REMOVED***
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
        ***REMOVED***,
    ***REMOVED***)
***REMOVED***,
        filter: function() ***REMOVED***
            return $(this).is(":visible");
***REMOVED***,
***REMOVED***);

    $("a[data-toggle=\"tab\"]").click(function(e) ***REMOVED***
        e.preventDefault();
        $(this).tab("show");
***REMOVED***);
***REMOVED***);


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() ***REMOVED***
    $('#success').html('');
***REMOVED***);
