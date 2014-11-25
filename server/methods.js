Meteor.methods(***REMOVED***
    // addRoleToUser:function(userId, role)***REMOVED***
    //     Roles.addUsersToRoles(userId,role)
    // ***REMOVED***
    addSponsorToEvent:function(eventId,eventName,eventLogo,eventUrl)***REMOVED***
        if (isLoggedAdmin())***REMOVED***
            Events.update(***REMOVED***_id:eventId***REMOVED***,***REMOVED***$push: ***REMOVED***
                sponsors:***REMOVED***
                    name: eventName,
                    logo: eventLogo,
                    url: eventUrl
        ***REMOVED***
    ***REMOVED******REMOVED***)
***REMOVED***
***REMOVED***
    removeSponsorFromEvent:function(eventSlug,sponsorName)***REMOVED***
        console.log(eventSlug,sponsorName)
        if (isLoggedAdmin())***REMOVED***
            Events.update(***REMOVED***slug:eventSlug***REMOVED***,***REMOVED***$pull: ***REMOVED***
                sponsors:***REMOVED***
                    name: sponsorName
        ***REMOVED***
    ***REMOVED******REMOVED***)
***REMOVED***
***REMOVED***
***REMOVED***)

var isLoggedAdmin = function()***REMOVED***
    var loggedInUser = Meteor.user()

    if (!loggedInUser ||
        !Roles.userIsInRole(loggedInUser,
                            ['admin'])) ***REMOVED***
      throw new Meteor.Error(403, "Access denied")
***REMOVED***
    return true
***REMOVED***
