Router.route('/users/:username',***REMOVED***
    name: "users.show",
    template: 'usersShow',
    waitOn: function () ***REMOVED***
            return Meteor.subscribe('user',this.params.username)
***REMOVED***
    data:function()***REMOVED***
        return Meteor.users.findOne(***REMOVED***username:this.params.username***REMOVED***)
***REMOVED***
    fastRender:true
***REMOVED***);

Router.route('/users/:username/edit',***REMOVED***
    name: "users.edit",
    template: 'usersEdit',
    waitOn: function () ***REMOVED***
        return Meteor.subscribe('user',this.params.username)
***REMOVED***
    onBeforeAction:function()***REMOVED***
        if(Meteor.user())***REMOVED***
            if(Meteor.user().username == this.params.username)***REMOVED***
                this.next()
    ***REMOVED***else***REMOVED***
                Router.go('home')
                this.next()
    ***REMOVED***
***REMOVED***else***REMOVED***
            Router.go('home')
            this.next()
***REMOVED***
***REMOVED***
    data:function()***REMOVED***
        return Meteor.users.findOne(***REMOVED***username:this.params.username***REMOVED***)
***REMOVED***
    fastRender:true
***REMOVED***);
