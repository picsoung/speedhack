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
        return Meteor.subscribe('event',this.params.slug);
    },
    data:function(){
        return Events.findOne({slug:this.params.slug})
    }
});


Router.route('/events/:slug/edit','editEvent', function () {
  this.render('editEvent');
  this.layout('defaultLayout');
});
