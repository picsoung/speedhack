// Event that are currently running
// startDate <= currentDate <= endDate
Template.registerHelper('openEventOptions',function(){
    var events = Events.find({$and:[{startDate:{$lte:new Date()}},{endDate:{$gte:new Date()}}]},{fields:{slug:1,name:1}}).fetch();
    var results = [];
    _.each(events, function(e) {
        results.push({label:e.name,value:e.slug})
    });
    console.log(results)
    return results;
})
