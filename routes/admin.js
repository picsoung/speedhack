Router.route('/backend/dashboard', {
    name: "backend.main",
    template: 'backendMain',
    waitOn: function () {
        return [Meteor.subscribe('events'),Meteor.subscribe('users'),Meteor.subscribe('teams'),Meteor.subscribe('solutions')];
    },
    onBeforeAction:function(){
        if (!Meteor.userId()){
            Router.go('home');
        }else if(Roles.userIsInRole(Meteor.user(), ["admin"])){
            GAnalytics.pageview();
            this.next();
        }else{
            Router.go('home');
        }
    },
});
