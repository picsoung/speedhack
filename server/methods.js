Meteor.methods({
    addSponsorToEvent:function(eventId,eventName,eventLogo,eventUrl){
        if (isLoggedAdmin()){
            Events.update({_id:eventId},{$push: {
                sponsors:{
                    name: eventName,
                    logo: eventLogo,
                    url: eventUrl,
                    points: 5
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
    },
    updateSolutionStatus: function(solutionId, status){
        if(isLoggedJudge || isLoggedAdmin()){ //judge role or admin
            Solutions.update({_id:solutionId},{$set:{passed:status}})
        }
    },
    updateSolutionJudgedStatus:function(solutionId, status){
        if(isLoggedJudge || isLoggedAdmin()){ //judge role or admin
            Solutions.update({_id:solutionId},{$set:{judged:status,judged_on:new Date()}})
        }
    }
})

var isLoggedJudge = function(){
    var loggedInUser = Meteor.user()

    if (!loggedInUser ||
        !Roles.userIsInRole(loggedInUser,
                            ['judge'])) {
      throw new Meteor.Error(403, "Access denied")
    }
    return true
}

var isLoggedAdmin = function(){
    var loggedInUser = Meteor.user()

    if (!loggedInUser ||
        !Roles.userIsInRole(loggedInUser,
                            ['admin'])) {
      throw new Meteor.Error(403, "Access denied")
    }
    return true
}
