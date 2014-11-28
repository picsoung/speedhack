Router.route('/teams/create',***REMOVED***
    name:'team.create',
    template:'newTeam',
    waitOn: function()***REMOVED***
        return [Meteor.subscribe('teams'),Meteor.subscribe('events')];
***REMOVED***
    onBeforeAction:function()***REMOVED***
        if (!Meteor.userId())***REMOVED***
            Router.go('home');
***REMOVED***else***REMOVED***
            this.next();
***REMOVED***
***REMOVED***
***REMOVED***);
