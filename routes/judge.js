Router.route('/judge/:slug',***REMOVED***
    name: "judge.show",
    template: 'judgeShow',
    onBeforeAction:function()***REMOVED***
        if (!Meteor.userId())***REMOVED***
            Router.go('home');
***REMOVED***else if(Roles.userIsInRole(Meteor.user(), [this.params.slug+"_judge","admin"]))***REMOVED*** //if has the right to judge
            Session.set('currentSponsor',this.params.slug);
            this.next();
***REMOVED***else***REMOVED***
            Router.go('home');
***REMOVED***
***REMOVED***
     waitOn: function () ***REMOVED***
        return [Meteor.subscribe('solutionsPerSponsor',this.params.slug),Meteor.subscribe('eventPerSponsor',this.params.slug)];
***REMOVED***
    data:function()***REMOVED***
        return ***REMOVED***
        slug: this.params.slug,
  ***REMOVED***
***REMOVED***
    fastRender:true
***REMOVED***);
