AutoForm.hooks({
  insertTeamForm: {
      before: {
      insert: function(doc, template) {
          doc.owner = Meteor.user().username

          if(Teams.find({
              $and:[
                    {
                        $or:[
                            {owner:doc.owner || ""},
                            {teammate_1:doc.owner || ""},
                            {teammate_2:doc.owner || ""}
                        ]
                    },
                    {event_slug:doc.event_slug}
              ]}).count()>0){
              Notifications.error('Error', doc.owner+' is already part of a team');
              throw new Meteor.Error(403, "One user is already part of a team");
          }
          if(Teams.find({
              $and:[
                    {
                        $or:[
                            {owner:doc.teammate_1 || ""},
                            {teammate_1:doc.teammate_1 || ""},
                            {teammate_2:doc.teammate_1 || ""}
                        ]
                    },
                    {event_slug:doc.event_slug}
              ]}).count()>0){
              Notifications.error('Error', doc.teammate_1+' is already part of a team');
              throw new Meteor.Error(403, "One user is already part of a team");
          }
          if(Teams.find({
              $and:[
                    {
                        $or:[
                            {owner:doc.teammate_2 || ""},
                            {teammate_1:doc.teammate_2 || ""},
                            {teammate_2:doc.teammate_2 || ""}
                        ]
                    },
                    {event_slug:doc.event_slug}
              ]}).count()>0){
              Notifications.error('Error', doc.teammate_2+' is already part of a team');
              throw new Meteor.Error(403, "One user is already part of a team");
          }

          return doc;
      }
    },
    onSubmit: function (doc) {
      schemas.Team.clean(doc);
      console.log("@@@@@@@@",doc)
    //   console.log("People doc with auto values", doc);
      this.done();
      return false;
    },
    onSuccess:function(operation, result, template){
        // Router.go('home');
    },
    beginSubmit: function(formId, template) {},
    endSubmit: function(formId, template) {}
  }
});
