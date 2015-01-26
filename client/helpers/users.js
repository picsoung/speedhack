UI.registerHelper('profileBelongsCurrentUser',function(username)***REMOVED***
    if(Meteor.user())***REMOVED***
        var user = Meteor.user();
        return user.username == username
***REMOVED***
    return false;
***REMOVED***)
