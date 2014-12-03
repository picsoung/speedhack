Router.route('/solutions/new',{
    name: "solutions.new",
    template: "newSolution",
    waitOn: function () {
        return [Meteor.subscribe('events'),Meteor.subscribe('currentUserTeam',Meteor.user())];
    },
    onBeforeAction:function(){
        var username = Meteor.user().username
        // if(Roles.userIsInRole(Meteor.user(), [this.params.slug+"_judge","admin"])){
        //     this.next()
        // }
        var team = Teams.findOne({$or:[{owner:username},{teammate_1:username},{teammate_2:username}]})
        if(!team){
            Notifications.error("Need a team","Create a team first");
            Router.go('home')
            this.next()
        }

    }
});
