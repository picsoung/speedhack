if(Meteor.isClient)***REMOVED***
    Meteor.startup(function () ***REMOVED***
        _.extend(Notifications.defaultOptions, ***REMOVED***
            timeout: 3000
***REMOVED***);

        Accounts.ui.config(***REMOVED***
           passwordSignupFields: 'USERNAME_ONLY'
***REMOVED***);
        Houston.add_collection(Meteor.users);
        Houston.add_collection(Houston._admins);
***REMOVED***);
***REMOVED***
