Router.route('/solutions/new',***REMOVED***
    name: "solutions.new",
    template: "newSolution",
    waitOn: function () ***REMOVED***
        return [Meteor.subscribe('events'),Meteor.subscribe('currentUserTeam',Meteor.user())];
***REMOVED***
    onBeforeAction:function()***REMOVED***
        var username = Meteor.user().profile.username
        var team = Teams.findOne(***REMOVED***$or:[***REMOVED***owner:username***REMOVED***,***REMOVED***teammate_1:username***REMOVED***,***REMOVED***teammate_2:username***REMOVED***]***REMOVED***)
        if(!team)***REMOVED***
            Notifications.error("Need a team","Create a team first");
            Router.go('home')
***REMOVED***
        this.next()
***REMOVED***
***REMOVED***);
