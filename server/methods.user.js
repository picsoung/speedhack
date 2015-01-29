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
    createUpdateUserFromEmail:function(emailAddress,eventOptions)***REMOVED***
        var existing_user = Meteor.users.findOne(***REMOVED***"emails.address":emailAddress***REMOVED***)
        if(existing_user)***REMOVED***
            // send email Thank you for signing up for #### , remember your username, login here
            console.log(existing_user.emails[0].address)
            var e = Events.findOne(***REMOVED***slug:eventOptions.slug***REMOVED***)
            e.date = moment(e.startDate).format('DD/MM/YYYY')
            
            Email.send(***REMOVED***
                from:"SpeedHack.io <no-reply@speedhack.io>",
                to: existing_user.emails[0].address,
                subject: "Thank you for register to "+eventOptions.name,
                html: Handlebars.templates['emails.thankYouSigningUpExistingUser'](***REMOVED*** user:existing_user,event:e ***REMOVED***)
    ***REMOVED***);
***REMOVED***else***REMOVED***
            var new_user = Accounts.createUser(***REMOVED***
                username: emailAddress,
                email: emailAddress,
                password: 'bibi'
    ***REMOVED***)
            Accounts.sendEnrollmentEmail(new_user)
***REMOVED***
***REMOVED***
    sendResetEmail:function(userId)***REMOVED***
        // Accounts.sendResetPasswordEmail(userId)
        Accounts.sendEnrollmentEmail(userId)
        // Accounts.sendVerificationEmail(userId)
***REMOVED***
***REMOVED***)
