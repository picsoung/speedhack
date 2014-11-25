AutoForm.hooks({
  insertTeamForm: {
    onSubmit: function (doc) {
      schemas.Team.clean(doc);
      doc.owner = Meteor.user().profile.username
    //   console.log("People doc with auto values", doc);
      this.done();
      return false;
    },
    onSuccess:function(operation, result, template){
        Router.go('events');
    }
  }
});
