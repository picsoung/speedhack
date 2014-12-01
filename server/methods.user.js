Meteor.methods(***REMOVED***
    addRoleToUser: function(username,role) ***REMOVED***
        var user = Meteor.users.findOne(***REMOVED***'username':username***REMOVED***);
        if(user)***REMOVED***
            Roles.addUsersToRoles(user._id,[role]);
            return user;
***REMOVED***else***REMOVED***
            throw new Meteor.Error("user-not-found","User does not exist");
***REMOVED***
***REMOVED***
    removeRoleToUser: function(userId,userRoles,role)***REMOVED***
        Roles.setUserRoles(userId, _.without(userRoles,role))
***REMOVED***
***REMOVED***)
