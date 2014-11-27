Router.route('/judge/:slug',{
    name: "judge.show",
    template: 'judgeShow',
    onBeforeAction:function(){
        if (!Meteor.userId()){
            Router.go('home');
        }else if(Roles.userIsInRole(Meteor.user(), [this.params.slug+"_judge","admin"])){ //if has the right to judge
            this.next();
        }else{
            Router.go('home');
        }
    },
     waitOn: function () {
        return [Meteor.subscribe('solutionsPerSponsor',this.params.slug)];
    },
    data:function(){
        return {
        slug: this.params.slug,
      }
    },
    fastRender:true
});
