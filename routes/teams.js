Router.route('/teams/create',{
    name:'teams.create',
    template:'newTeam',
    onBeforeAction:function(){
        if (!Meteor.userId()){
            Router.go('home');
        }else{
            this.next();
        }
    }
});
