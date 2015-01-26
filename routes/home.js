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
      GAnalytics.pageview();
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
