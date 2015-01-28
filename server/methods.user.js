Meteor.methods({
    addRoleToUser: function(username,role) {
        var user = Meteor.users.findOne({'username':username});
        if(user){
            Roles.addUsersToRoles(user._id,[role]);
            return user;
        }else{
            throw new Meteor.Error("user-not-found","User does not exist");
        }
    },
    removeRoleToUser: function(userId,userRoles,role){
        Roles.setUserRoles(userId, _.without(userRoles,role))
    },
    createNewUserFromEmail:function(emailAddress){
        var a = Accounts.createUser({
            username: emailAddress,
            email: emailAddress,
            password: 'bibi'
        })
        Accounts.sendEnrollmentEmail(a)
    }
})
