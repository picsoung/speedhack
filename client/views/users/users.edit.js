AutoForm.hooks({
    updateUserForm: {
        // TODO to a verified email
        // after: {
        //     insert: function(error, result, template) {
        //         console.log(result);
        //     },
        //     update: function(error, result, template) {
        //         console.log("REEE",result)
        //     }
        // }
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            console.log("@@@@@@@@@",insertDoc)
            schemas.User.clean(doc);
            this.done();
            return false;
        },
        onSuccess:function(operation, result, template){
            var user = Meteor.users.findOne({username:template.data.doc.username})
            var url = Gravatar.imageUrl(user.emails[0].address, {
                secure:true
            });
            Meteor.users.update(user._id,{$set:{'profile.profile_picture_url':url}})

            Router.go('users.show',{'username':template.data.doc.username});
        },
        onError: function(operation, error, template) {
            console.log(operation,error)
            if(error.error == 409){
                Notifications.error('Error', 'Email address is already in use.');
            }

        },

    }
});
