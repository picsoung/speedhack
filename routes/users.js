Router.route('/users/:username',{
    name: "users.show",
    template: 'usersShow',
    waitOn: function () {
            return Meteor.subscribe('user',this.params.username)
    },
    data:function(){
        return Meteor.users.findOne({username:this.params.username})
    },
    fastRender:true
});

Router.route('/users/:username/edit',{
    name: "users.edit",
    template: 'usersEdit',
    waitOn: function () {
        return Meteor.subscribe('user',this.params.username)
    },
    onBeforeAction:function(){
        if(Meteor.user()){
            if(Meteor.user().username == this.params.username){
                this.next()
            }else{
                Router.go('home')
                this.next()
            }
        }else{
            Router.go('home')
            this.next()
        }
    },
    data:function(){
        return Meteor.users.findOne({username:this.params.username})
    },
    fastRender:true
});
