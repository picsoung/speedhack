if(Meteor.isClient){
    Meteor.startup(function () {
        _.extend(Notifications.defaultOptions, {
            timeout: 3000
        });

        Accounts.ui.config({
           passwordSignupFields: 'USERNAME_ONLY'
        });
        Houston.add_collection(Meteor.users);
        Houston.add_collection(Houston._admins);
    });
}
