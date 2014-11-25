Meteor.methods({
    // addRoleToUser:function(userId, role){
    //     Roles.addUsersToRoles(userId,role)
    // }
    addSponsorToEvent:function(eventId,eventName,eventLogo,eventUrl){
        if (isLoggedAdmin()){
            Events.update({_id:eventId},{$push: {
                sponsors:{
                    name: eventName,
                    logo: eventLogo,
                    url: eventUrl
                }
            }})
        }
    },
    removeSponsorFromEvent:function(eventSlug,sponsorName){
        console.log(eventSlug,sponsorName)
        if (isLoggedAdmin()){
            Events.update({slug:eventSlug},{$pull: {
                sponsors:{
                    name: sponsorName
                }
            }})
        }
    }
})

var isLoggedAdmin = function(){
    var loggedInUser = Meteor.user()

    if (!loggedInUser ||
        !Roles.userIsInRole(loggedInUser,
                            ['admin'])) {
      throw new Meteor.Error(403, "Access denied")
    }
    return true
}
