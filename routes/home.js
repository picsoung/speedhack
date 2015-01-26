Router.route('/', ***REMOVED***
  name:'home',
  layoutTemplate:'homeLayout',
  waitOn:function()***REMOVED***
      return Meteor.subscribe('eventsLight');
  ***REMOVED***,
  data:function()***REMOVED***
      return ***REMOVED***
      speedhackEvents: Events.find(***REMOVED******REMOVED***),
***REMOVED***
  ***REMOVED***,
  fasterRender:true,
  onBeforeAction:function()***REMOVED***
      GAnalytics.pageview();
      this.next();
  ***REMOVED***
***REMOVED***);

Router.route('/sponsor', ***REMOVED***
    name:'sponsorshipDetails',
    layoutTemplate:'defaultLayout',
    waitOn:function()***REMOVED***
        return Meteor.subscribe('eventsLight');
***REMOVED***
    fasterRender:true,
    onBeforeAction:function()***REMOVED***
        GAnalytics.pageview();
        this.next();
***REMOVED***
***REMOVED***);
