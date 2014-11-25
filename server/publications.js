Meteor.publish('events',function(){
    return Events.find({});
})

Meteor.publish('event',function(slug){
    return Events.find({slug:slug});
})

Meteor.publish(null, function (){
  return Meteor.roles.find({})
})
