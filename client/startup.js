if(Meteor.isClient)***REMOVED***
    Meteor.startup(function () ***REMOVED***
        _.extend(Notifications.defaultOptions, ***REMOVED***
            timeout: 3000
***REMOVED***);

        Accounts.ui.config(***REMOVED***
           passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
***REMOVED***);
***REMOVED***);
***REMOVED***
