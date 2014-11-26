Router.route('/solutions/new',***REMOVED***
    name: "solutions.new",
    template: "newSolution",
    waitOn: function () ***REMOVED***
        return [Meteor.subscribe('events'),Meteor.subscribe('currentUserTeam',Meteor.user())];
***REMOVED***
***REMOVED***);
