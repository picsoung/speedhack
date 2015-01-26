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
      if(Meteor.user())***REMOVED***
          if(_.isUndefined(Meteor.user().emails) || _.isUndefined(Meteor.user().emails[0].address))***REMOVED***
              Router.go('users.edit',***REMOVED***'username':Meteor.user().username***REMOVED***);
              this.next()
  ***REMOVED***
  ***REMOVED***else***REMOVED***
        GAnalytics.pageview();
        this.next();
  ***REMOVED***
      this.next()
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
