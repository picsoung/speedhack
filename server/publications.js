Meteor.publish('events',function(){
    return Events.find({});
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

Meteor.publish('currentUserTeam',function(user){
    var username = user.profile.username
    return Teams.find({$or:[{owner:username},{teammate_1:username},{teammate_2:username}]});
})


Meteor.publish('solutionsByUser',function(username,eventSlug){
    var team = Teams.findOne({$or:[{owner:username},{teammate_1:username},{teammate_2:username}]});

    return Solutions.find({$and:[{team_name:team.name},{event_slug:eventSlug}]})
});

Meteor.publish('solutionsPerSponsor',function(sponsorSlug){
    return Solutions.find({sponsor:sponsorSlug});
})
