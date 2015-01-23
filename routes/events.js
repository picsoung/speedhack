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
         if(Meteor.user())
            return [Meteor.subscribe('event',this.params.slug),Meteor.subscribe('solutionsByUser',Meteor.user().username,this.params.slug)];

        return Meteor.subscribe('event',this.params.slug)
***REMOVED***
    data:function()***REMOVED***
        return Events.findOne(***REMOVED***slug:this.params.slug***REMOVED***)
***REMOVED***
    fastRender:true
***REMOVED***);

Router.route('/events/:slug/edit',***REMOVED***
    name: "event.edit",
    template: 'eventEdit',
    onBeforeAction:function()***REMOVED***
        if (!Meteor.userId())***REMOVED***
            Router.go('event.show',***REMOVED***slug:this.params.slug***REMOVED***);
***REMOVED***else if(Roles.userIsInRole(Meteor.user(), ["admin"]))***REMOVED***
            GAnalytics.pageview();
            this.next();
***REMOVED***else***REMOVED***
            Router.go('event.show',***REMOVED***slug:this.params.slug***REMOVED***);
***REMOVED***
***REMOVED***
     waitOn: function () ***REMOVED***
        return [Meteor.subscribe('event',this.params.slug)];
***REMOVED***
    data:function()***REMOVED***
        return Events.findOne(***REMOVED***slug:this.params.slug***REMOVED***)
***REMOVED***
    fastRender:true
***REMOVED***);

Router.route('/events/:slug/leaderboard',***REMOVED***
    //TODO check if slug exists
    name: "event.leaderboard",
    template: 'eventLeaderboard',
    waitOn: function () ***REMOVED***
        return [Meteor.subscribe('event',this.params.slug),Meteor.subscribe('solutionsByEvent',this.params.slug),Meteor.subscribe('teamsByEvent',this.params.slug)];
***REMOVED***
    data:function()***REMOVED***
        return Events.findOne(***REMOVED***slug:this.params.slug***REMOVED***)
***REMOVED***
    fastRender:true,
    onBeforeAction:function()***REMOVED***
        GAnalytics.pageview();
        this.next();
***REMOVED***
***REMOVED***);
