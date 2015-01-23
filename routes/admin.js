Router.route('/backend/dashboard', ***REMOVED***
    name: "backend.main",
    template: 'backendMain',
    waitOn: function () ***REMOVED***
        return [Meteor.subscribe('events'),Meteor.subscribe('users'),Meteor.subscribe('teams'),Meteor.subscribe('solutions')];
***REMOVED***
    onBeforeAction:function()***REMOVED***
        if (!Meteor.userId())***REMOVED***
            Router.go('home');
***REMOVED***else if(Roles.userIsInRole(Meteor.user(), ["admin"]))***REMOVED***
            GAnalytics.pageview();
            this.next();
***REMOVED***else***REMOVED***
            Router.go('home');
***REMOVED***
***REMOVED***
***REMOVED***);
