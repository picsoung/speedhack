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
    createUpdateUserFromEmail:function(emailAddress,eventOptions){
        var existing_user = Meteor.users.findOne({"emails.address":emailAddress})
        if(existing_user){
            // send email Thank you for signing up for #### , remember your username, login here
            console.log(existing_user.emails[0].address)
            var e = Events.findOne({slug:eventOptions.slug})
            e.date = moment(e.startDate).format('DD/MM/YYYY')
            
            Email.send({
                from:"SpeedHack.io <no-reply@speedhack.io>",
                to: existing_user.emails[0].address,
                subject: "Thank you for register to "+eventOptions.name,
                html: Handlebars.templates['emails.thankYouSigningUpExistingUser']({ user:existing_user,event:e })
            });
        }else{
            var new_user = Accounts.createUser({
                username: emailAddress,
                email: emailAddress,
                password: 'bibi'
            })
            Accounts.sendEnrollmentEmail(new_user)
        }
    },
    sendResetEmail:function(userId){
        // Accounts.sendResetPasswordEmail(userId)
        Accounts.sendEnrollmentEmail(userId)
        // Accounts.sendVerificationEmail(userId)
    }
})
