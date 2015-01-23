Meteor.publish('users',function(){
    return Meteor.users.find({});
})

Meteor.publish('events',function(){
    return Events.find({});
})

Meteor.publish('eventsLight',function(){
    return Events.find({},{fields:{slug:1,image:1,sponsors:1},sort: {startDate: -1}});
})

Meteor.publish('event',function(slug){
    return Events.find({slug:slug});
})

Meteor.publish('eventPerSponsor',function(sponsorSlug){
    return Events.find({'sponsors.name':sponsorSlug})
})

Meteor.publish(null, function (){
  return Meteor.roles.find({})
})

Meteor.publish('teams',function(){
    return Teams.find({});
})
Meteor.publish('teamsByEvent',function(eventSlug){
        return Teams.find({event_slug:eventSlug});
});
Meteor.publish("teamsPerSponsor", function(sponsorSlug,eventSlug){
    var solutions = Solutions.find({$and:[
        {event_slug:eventSlug},
        {sponsor:sponsorSlug},
        {passed:true},
        {judged:true}
        ]},{fields:{team_name:1}}).fetch();

    var solutionsByTeam = _.groupBy(solutions,function(num){return num.team_name})

    var teamsNames = []
    _.each(solutionsByTeam,function(key,val){
        teamsNames.push(val)
    })

    return Teams.find({name:{$in:teamsNames}});
});

Meteor.publish('solutions',function(){
    return Solutions.find({});
})

Meteor.publish('currentUserTeam',function(user){
    var username = user.username
    return Teams.find({$or:[{owner:username},{teammate_1:username},{teammate_2:username}]});
})

Meteor.publish('solutionsByUser',function(username,eventSlug){
    var team = Teams.findOne({
        $and:[
            {$or:[{owner:username},{teammate_1:username},{teammate_2:username}]},
            {event_slug:eventSlug}
        ]
    });
    if(team)
        return Solutions.find({$and:[{team_name:team.name},{event_slug:eventSlug}]})

    return []
});

Meteor.publish('solutionsPerSponsor',function(sponsorSlug){
    return Solutions.find({sponsor:sponsorSlug});
})

Meteor.publish('solutionsByEvent',function(eventSlug){
    return Solutions.find({event_slug:eventSlug});
})
