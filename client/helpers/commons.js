// Event that are currently running
// startDate <= currentDate <= endDate
Template.registerHelper('openEventOptions',function()***REMOVED***
    var events = Events.find(***REMOVED***$and:[***REMOVED***startDate:***REMOVED***$lte:new Date()***REMOVED******REMOVED***,***REMOVED***endDate:***REMOVED***$gte:new Date()***REMOVED******REMOVED***]***REMOVED***,***REMOVED***fields:***REMOVED***slug:1,name:1***REMOVED******REMOVED***).fetch();
    var results = [];
    _.each(events, function(e) ***REMOVED***
        results.push(***REMOVED***label:e.name,value:e.slug***REMOVED***)
***REMOVED***);
    console.log(results)
    return results;
***REMOVED***)
