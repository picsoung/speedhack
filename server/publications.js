Meteor.publish('events',function()***REMOVED***
    return Events.find(***REMOVED******REMOVED***);
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
