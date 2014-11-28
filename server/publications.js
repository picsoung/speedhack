Meteor.publish('events',function()***REMOVED***
    return Events.find(***REMOVED******REMOVED***);
***REMOVED***)

Meteor.publish('eventsLight',function()***REMOVED***
    return Events.find(***REMOVED******REMOVED***,***REMOVED***fields:***REMOVED***slug:1,image:1***REMOVED***,sort: ***REMOVED***startDate: -1***REMOVED******REMOVED***);
***REMOVED***)

Meteor.publish('event',function(slug)***REMOVED***
    return Events.find(***REMOVED***slug:slug***REMOVED***);
***REMOVED***)

Meteor.publish(null, function ()***REMOVED***
  return Meteor.roles.find(***REMOVED******REMOVED***)
***REMOVED***)

Meteor.publish('teams',function()***REMOVED***
    return Teams.find(***REMOVED******REMOVED***);
***REMOVED***)

Meteor.publish('currentUserTeam',function(user)***REMOVED***
    var username = user.profile.username
    return Teams.find(***REMOVED***$or:[***REMOVED***owner:username***REMOVED***,***REMOVED***teammate_1:username***REMOVED***,***REMOVED***teammate_2:username***REMOVED***]***REMOVED***);
***REMOVED***)


Meteor.publish('solutionsByUser',function(username,eventSlug)***REMOVED***
    var team = Teams.findOne(***REMOVED***$or:[***REMOVED***owner:username***REMOVED***,***REMOVED***teammate_1:username***REMOVED***,***REMOVED***teammate_2:username***REMOVED***]***REMOVED***);

    return Solutions.find(***REMOVED***$and:[***REMOVED***team_name:team.name***REMOVED***,***REMOVED***event_slug:eventSlug***REMOVED***]***REMOVED***)
***REMOVED***);

Meteor.publish('solutionsPerSponsor',function(sponsorSlug)***REMOVED***
    return Solutions.find(***REMOVED***sponsor:sponsorSlug***REMOVED***);
***REMOVED***)

Meteor.publish('solutionsByEvent',function(eventSlug)***REMOVED***
    return Solutions.find(***REMOVED***event_slug:eventSlug***REMOVED***);
***REMOVED***)
