Router.route('/solutions/new',{
    name: "solutions.new",
    template: "newSolution",
    waitOn: function () {
        return [Meteor.subscribe('events'),Meteor.subscribe('currentUserTeam',Meteor.user())];
    },
    onBeforeAction:function(){
        var username = Meteor.user().profile.username
        var team = Teams.findOne({$or:[{owner:username},{teammate_1:username},{teammate_2:username}]})
        if(!team){
            Notifications.error("Need a team","Create a team first");
            Router.go('home')
        }


        this.next()
    }
});
