// Event that are currently running
// startDate <= currentDate <= endDate
// one hour before
Template.registerHelper('openEventOptions',function()***REMOVED***
    var events = Events.find(***REMOVED***$and:[***REMOVED***startDate:***REMOVED***$lte:new Date().substractHours(1)***REMOVED******REMOVED***,***REMOVED***endDate:***REMOVED***$gte:new Date()***REMOVED******REMOVED***]***REMOVED***,***REMOVED***fields:***REMOVED***slug:1,name:1***REMOVED******REMOVED***).fetch();
    var results = [];
    _.each(events, function(e) ***REMOVED***
        results.push(***REMOVED***label:e.name,value:e.slug***REMOVED***)
***REMOVED***);
    return results;
***REMOVED***)

Date.prototype.substractHours= function(h)***REMOVED***
    this.setHours(this.getHours()-h);
    return this;
***REMOVED***
Date.prototype.addHours= function(h)***REMOVED***
    this.setHours(this.getHours()+h);
    return this;
***REMOVED***
