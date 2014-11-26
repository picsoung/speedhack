Router.route('/events', {
    name: "events.list",
    template: 'eventsList',
    waitOn: function () {
        return Meteor.subscribe('events');
    }
});

Router.route('/events/create','newEvent', function () {
  this.render('newEvent');
  this.layout('defaultLayout');
});

Router.route('/events/:slug',{
    name: "event.show",
    template: 'eventShow',
     waitOn: function () {
         console.log("USER",Meteor.user())
        return [Meteor.subscribe('event',this.params.slug),Meteor.subscribe('solutionsByUser',Meteor.user().profile.username,this.params.slug)];
    },
    data:function(){
        return Events.findOne({slug:this.params.slug})
    },
    fastRender:true
});


Router.route('/events/:slug/edit','editEvent', function () {
  this.render('editEvent');
  this.layout('defaultLayout');
});
