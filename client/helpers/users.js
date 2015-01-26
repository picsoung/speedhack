UI.registerHelper('profileBelongsCurrentUser',function(username){
    if(Meteor.user()){
        var user = Meteor.user();
        return user.username == username
    }
    return false;
})
