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
         if(Meteor.user())
            return [Meteor.subscribe('event',this.params.slug),Meteor.subscribe('solutionsByUser',Meteor.user().username,this.params.slug)];

        return Meteor.subscribe('event',this.params.slug)
    },
    data:function(){
        return Events.findOne({slug:this.params.slug})
    },
    fastRender:true
});

Router.route('/events/:slug/edit',{
    name: "event.edit",
    template: 'eventEdit',
    onBeforeAction:function(){
        if (!Meteor.userId()){
            Router.go('event.show',{slug:this.params.slug});
        }else if(Roles.userIsInRole(Meteor.user(), ["admin"])){
            this.next();
        }else{
            Router.go('event.show',{slug:this.params.slug});
        }
    },
     waitOn: function () {
        return [Meteor.subscribe('event',this.params.slug)];
    },
    data:function(){
        return Events.findOne({slug:this.params.slug})
    },
    fastRender:true
});

Router.route('/events/:slug/leaderboard',{
    //TODO check if slug exists
    name: "event.leaderboard",
    template: 'eventLeaderboard',
    waitOn: function () {
        return [Meteor.subscribe('event',this.params.slug),Meteor.subscribe('solutionsByEvent',this.params.slug),Meteor.subscribe('teamsByEvent',this.params.slug)];
    },
    data:function(){
        return Events.findOne({slug:this.params.slug})
    },
    fastRender:true
});
