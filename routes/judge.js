Router.route('/judge/:slug',{
    name: "judge.show",
    template: 'judgeShow',
    onBeforeAction:function(){
        if (!Meteor.userId()){
            Router.go('home');
        }else if(Roles.userIsInRole(Meteor.user(), ["judge_"+this.params.slug,"admin"])){ //if has the right to judge
            Session.set('currentSponsor',this.params.slug);
            GAnalytics.pageview();
            this.next();
        }else{
            Router.go('home');
        }
    },
     waitOn: function () {
        return [Meteor.subscribe('solutionsPerSponsor',this.params.slug),Meteor.subscribe('eventPerSponsor',this.params.slug)];
    },
    data:function(){
        return {
        slug: this.params.slug,
      }
    },
    fastRender:true
});
