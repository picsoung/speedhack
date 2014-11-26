Router.route('/solutions/new',{
    name: "solutions.new",
    template: "newSolution",
    waitOn: function () {
        return [Meteor.subscribe('events'),Meteor.subscribe('currentUserTeam',Meteor.user())];
    }
});
