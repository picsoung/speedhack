// Event that are currently running
// startDate <= currentDate <= endDate
// one hour before
Template.registerHelper('openEventOptions',function(){
    var events = Events.find({$and:[{startDate:{$lte:new Date().substractHours(1)}},{endDate:{$gte:new Date()}}]},{fields:{slug:1,name:1}}).fetch();
    var results = [];
    _.each(events, function(e) {
        results.push({label:e.name,value:e.slug})
    });
    return results;
})

Date.prototype.substractHours= function(h){
    this.setHours(this.getHours()-h);
    return this;
}
Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}
