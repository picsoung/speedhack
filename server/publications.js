Meteor.publish('users',function()***REMOVED***
    return Meteor.users.find(***REMOVED******REMOVED***);
***REMOVED***)

Meteor.publish('events',function()***REMOVED***
    return Events.find(***REMOVED******REMOVED***);
***REMOVED***)

Meteor.publish('eventsLight',function()***REMOVED***
    return Events.find(***REMOVED******REMOVED***,***REMOVED***fields:***REMOVED***slug:1,image:1,sponsors:1***REMOVED***,sort: ***REMOVED***startDate: -1***REMOVED******REMOVED***);
***REMOVED***)

Meteor.publish('event',function(slug)***REMOVED***
    return Events.find(***REMOVED***slug:slug***REMOVED***);
***REMOVED***)

Meteor.publish('eventPerSponsor',function(sponsorSlug)***REMOVED***
    return Events.find(***REMOVED***'sponsors.name':sponsorSlug***REMOVED***)
***REMOVED***)

Meteor.publish(null, function ()***REMOVED***
  return Meteor.roles.find(***REMOVED******REMOVED***)
***REMOVED***)

Meteor.publish('teams',function()***REMOVED***
    return Teams.find(***REMOVED******REMOVED***);
***REMOVED***)
Meteor.publish('teamsByEvent',function(eventSlug)***REMOVED***
        return Teams.find(***REMOVED***event_slug:eventSlug***REMOVED***);
***REMOVED***);
Meteor.publish("teamsPerSponsor", function(sponsorSlug,eventSlug)***REMOVED***
    var solutions = Solutions.find(***REMOVED***$and:[
        ***REMOVED***event_slug:eventSlug***REMOVED***,
        ***REMOVED***sponsor:sponsorSlug***REMOVED***,
        ***REMOVED***passed:true***REMOVED***,
        ***REMOVED***judged:true***REMOVED***
        ]***REMOVED***,***REMOVED***fields:***REMOVED***team_name:1***REMOVED******REMOVED***).fetch();

    var solutionsByTeam = _.groupBy(solutions,function(num)***REMOVED***return num.team_name***REMOVED***)

    var teamsNames = []
    _.each(solutionsByTeam,function(key,val)***REMOVED***
        teamsNames.push(val)
***REMOVED***)

    return Teams.find(***REMOVED***name:***REMOVED***$in:teamsNames***REMOVED******REMOVED***);
***REMOVED***);

Meteor.publish('solutions',function()***REMOVED***
    return Solutions.find(***REMOVED******REMOVED***);
***REMOVED***)

Meteor.publish('currentUserTeam',function(user)***REMOVED***
    var username = user.username
    return Teams.find(***REMOVED***$or:[***REMOVED***owner:username***REMOVED***,***REMOVED***teammate_1:username***REMOVED***,***REMOVED***teammate_2:username***REMOVED***]***REMOVED***);
***REMOVED***)

Meteor.publish('solutionsByUser',function(username,eventSlug)***REMOVED***
    var team = Teams.findOne(***REMOVED***
        $and:[
            ***REMOVED***$or:[***REMOVED***owner:username***REMOVED***,***REMOVED***teammate_1:username***REMOVED***,***REMOVED***teammate_2:username***REMOVED***]***REMOVED***,
            ***REMOVED***event_slug:eventSlug***REMOVED***
        ]
***REMOVED***);
    if(team)
        return Solutions.find(***REMOVED***$and:[***REMOVED***team_name:team.name***REMOVED***,***REMOVED***event_slug:eventSlug***REMOVED***]***REMOVED***)

    return []
***REMOVED***);

Meteor.publish('solutionsPerSponsor',function(sponsorSlug)***REMOVED***
    return Solutions.find(***REMOVED***sponsor:sponsorSlug***REMOVED***);
***REMOVED***)

Meteor.publish('solutionsByEvent',function(eventSlug)***REMOVED***
    return Solutions.find(***REMOVED***event_slug:eventSlug***REMOVED***);
***REMOVED***)
