Router.route('/', {
  name:'home',
  layoutTemplate:'homeLayout',
  waitOn:function(){
      return Meteor.subscribe('eventsLight');
  },
  data:function(){
      return {
      speedhackEvents: Events.find({}),
    }
  },
  fasterRender:true,
  onBeforeAction:function(){
      if(Meteor.user()){
          if(_.isUndefined(Meteor.user().emails) || _.isUndefined(Meteor.user().emails[0].address)){
              Router.go('users.edit',{'username':Meteor.user().username});
              this.next()
          }
      }else{
        GAnalytics.pageview();
        this.next();
      }
      this.next();
  }
});

Router.route('/sponsor', {
    name:'sponsorshipDetails',
    layoutTemplate:'defaultLayout',
    waitOn:function(){
        return Meteor.subscribe('eventsLight');
    },
    fasterRender:true,
    onBeforeAction:function(){
        GAnalytics.pageview();
        this.next();
    }
});
