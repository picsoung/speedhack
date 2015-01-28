if(Meteor.isClient){
    Meteor.startup(function () {
        _.extend(Notifications.defaultOptions, {
            timeout: 3000
        });

        Accounts.ui.config({
           passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
        });
    });
}
