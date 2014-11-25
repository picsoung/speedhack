Router.route('/teams/create',***REMOVED***
    name:'teams.create',
    template:'newTeam',
    onBeforeAction:function()***REMOVED***
        if (!Meteor.userId())***REMOVED***
            Router.go('home');
***REMOVED***else***REMOVED***
            this.next();
***REMOVED***
***REMOVED***
***REMOVED***);
