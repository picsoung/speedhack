AutoForm.hooks(***REMOVED***
  insertTeamForm: ***REMOVED***
    onSubmit: function (doc) ***REMOVED***
      schemas.Team.clean(doc);
      doc.owner = Meteor.user().profile.username
    //   console.log("People doc with auto values", doc);
      this.done();
      return false;
***REMOVED***
    onSuccess:function(operation, result, template)***REMOVED***
        Router.go('events');
***REMOVED***
  ***REMOVED***
***REMOVED***);
