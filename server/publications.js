Meteor.publish('users',function(){
    return Meteor.users.find({});
})

Meteor.publish('events',function(){
    return Events.find({});
})

Meteor.publish('eventsLight',function(){
    return Events.find({},{fields:{slug:1,image:1},sort: {startDate: -1}});
})

Meteor.publish('event',function(slug){
    return Events.find({slug:slug});
})

Meteor.publish(null, function (){
  return Meteor.roles.find({})
})

Meteor.publish('teams',function(){
    return Teams.find({});
})

Meteor.publish('solutions',function(){
    return Solutions.find({});
})

Meteor.publish('currentUserTeam',function(user){
    var username = user.profile.username
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
