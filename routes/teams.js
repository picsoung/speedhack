Router.route('/teams/create',{
    name:'team.create',
    template:'newTeam',
    waitOn: function(){
        return [Meteor.subscribe('teams'),Meteor.subscribe('events')];
    },
    onBeforeAction:function(){
        if (!Meteor.userId()){
            Router.go('home');
        }else{
            this.next();
        }
    }
});
