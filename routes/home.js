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
  fasterRender:true
***REMOVED***);
