// Event that are currently running
// startDate <= currentDate <= endDate
// one hour before
Template.registerHelper('openEventOptions',function(){
    var events = Events.find({$and:[{startDate:{$lte:new Date()}},{endDate:{$gte:new Date()}}]},{fields:{slug:1,name:1}}).fetch();
    var results = [];
    _.each(events, function(e) {
        results.push({label:e.name,value:e.slug})
    });
    return results;
})

Template.registerHelper('currentJudgeSponsor',function(){
   var user = Meteor.user()
   var roles = user.roles
   var judge  =_.filter(roles, function(obj){ return obj.match(/judge_/)})[0];
   if(judge)
    return judge.replace("judge_","")
})

Template.registerHelper('isAJudge',function(){
    var user = Meteor.user()
    var roles = user.roles
    var judge  =_.filter(roles, function(obj){ return obj.match(/judge_/)});
    return !_.isEmpty(judge)
})

Date.prototype.substractHours= function(h){
    this.setHours(this.getHours()-h);
    return this;
}
Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}
