if(Meteor.isClient){
    Meteor.startup(function () {
        _.extend(Notifications.defaultOptions, {
            timeout: 3000
        });
    });
}
