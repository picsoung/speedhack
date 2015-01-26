AutoForm.hooks(***REMOVED***
    updateUserForm: ***REMOVED***
        // TODO to a verified email
        // after: ***REMOVED***
        //     insert: function(error, result, template) ***REMOVED***
        //         console.log(result);
        // ***REMOVED***
        //     update: function(error, result, template) ***REMOVED***
        //         console.log("REEE",result)
        // ***REMOVED***
        // ***REMOVED***
        onSubmit: function (insertDoc, updateDoc, currentDoc) ***REMOVED***
            console.log("@@@@@@@@@",insertDoc)
            schemas.User.clean(doc);
            this.done();
            return false;
***REMOVED***,
        onSuccess:function(operation, result, template)***REMOVED***
            var user = Meteor.users.findOne(***REMOVED***username:template.data.doc.username***REMOVED***)
            var url = Gravatar.imageUrl(user.emails[0].address, ***REMOVED***
                secure:true
    ***REMOVED***);
            Meteor.users.update(user._id,***REMOVED***$set:***REMOVED***'profile.profile_picture_url':url***REMOVED******REMOVED***)

            Router.go('users.show',***REMOVED***'username':template.data.doc.username***REMOVED***);
***REMOVED***,
        onError: function(operation, error, template) ***REMOVED***
            console.log(operation,error)
            if(error.error == 409)***REMOVED***
                Notifications.error('Error', 'Email address is already in use.');
    ***REMOVED***

***REMOVED***,

***REMOVED***
***REMOVED***);
