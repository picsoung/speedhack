Router.route('/events', ***REMOVED***
    name: "events.list",
    template: 'eventsList',
    waitOn: function () ***REMOVED***
        return Meteor.subscribe('events');
***REMOVED***
***REMOVED***);

Router.route('/events/create','newEvent', function () ***REMOVED***
  this.render('newEvent');
  this.layout('defaultLayout');
***REMOVED***);

Router.route('/events/:slug',***REMOVED***
    name: "event.show",
    template: 'eventShow',
     waitOn: function () ***REMOVED***
         console.log("USER",Meteor.user())
        return [Meteor.subscribe('event',this.params.slug),Meteor.subscribe('solutionsByUser',Meteor.user().profile.username,this.params.slug)];
***REMOVED***
    data:function()***REMOVED***
        return Events.findOne(***REMOVED***slug:this.params.slug***REMOVED***)
***REMOVED***
    fastRender:true
***REMOVED***);


Router.route('/events/:slug/edit','editEvent', function () ***REMOVED***
  this.render('editEvent');
  this.layout('defaultLayout');
***REMOVED***);
