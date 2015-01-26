// Event that are currently running
// startDate <= currentDate <= endDate
// one hour before
Template.registerHelper('openEventOptions',function()***REMOVED***
    var events = Events.find(***REMOVED***$and:[***REMOVED***startDate:***REMOVED***$lte:new Date()***REMOVED******REMOVED***,***REMOVED***endDate:***REMOVED***$gte:new Date()***REMOVED******REMOVED***]***REMOVED***,***REMOVED***fields:***REMOVED***slug:1,name:1***REMOVED******REMOVED***).fetch();
    var results = [];
    _.each(events, function(e) ***REMOVED***
        results.push(***REMOVED***label:e.name,value:e.slug***REMOVED***)
***REMOVED***);
    return results;
***REMOVED***)

Template.registerHelper('currentJudgeSponsor',function()***REMOVED***
   var user = Meteor.user()
   var roles = user.roles
   var judge  =_.filter(roles, function(obj)***REMOVED*** return obj.match(/judge_/)***REMOVED***)[0];
   if(judge)
    return judge.replace("judge_","")
***REMOVED***)

Template.registerHelper('isAJudge',function()***REMOVED***
    var user = Meteor.user()
    var roles = user.roles
    var judge  =_.filter(roles, function(obj)***REMOVED*** return obj.match(/judge_/)***REMOVED***);
    return !_.isEmpty(judge)
***REMOVED***)

Date.prototype.substractHours= function(h)***REMOVED***
    this.setHours(this.getHours()-h);
    return this;
***REMOVED***
Date.prototype.addHours= function(h)***REMOVED***
    this.setHours(this.getHours()+h);
    return this;
***REMOVED***

UI.registerHelper('addIndex', function (all) ***REMOVED***
    return _.map(all, function(val, index) ***REMOVED***
        return ***REMOVED***index: index, value: val***REMOVED***;
***REMOVED***);
***REMOVED***);
