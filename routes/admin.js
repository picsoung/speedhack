Router.route('/admin/dashboard', ***REMOVED***
    name: "admin.main",
    template: 'adminMain',
    waitOn: function () ***REMOVED***
        return [Meteor.subscribe('events'),Meteor.subscribe('users'),Meteor.subscribe('teams'),Meteor.subscribe('solutions')];
***REMOVED***
    onBeforeAction:function()***REMOVED***
        if (!Meteor.userId())***REMOVED***
            Router.go('home');
***REMOVED***else if(Roles.userIsInRole(Meteor.user(), ["admin"]))***REMOVED***
            this.next();
***REMOVED***else***REMOVED***
            Router.go('home');
***REMOVED***
***REMOVED***
***REMOVED***);
