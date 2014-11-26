AutoForm.hooks(***REMOVED***
  insertTeamForm: ***REMOVED***
      before: ***REMOVED***
      insert: function(doc, template) ***REMOVED***
          doc.owner = Meteor.user().profile.username

          if(Teams.find(***REMOVED***
              $and:[
                    ***REMOVED***
                        $or:[
                            ***REMOVED***owner:doc.owner || ""***REMOVED***,
                            ***REMOVED***teammate_1:doc.owner || ""***REMOVED***,
                            ***REMOVED***teammate_2:doc.owner || ""***REMOVED***
                        ]
            ***REMOVED***,
                    ***REMOVED***event_slug:doc.event_slug***REMOVED***
              ]***REMOVED***).count()>0)***REMOVED***
              Notifications.error('Error', doc.owner+' is already part of a team');
              throw new Meteor.Error(403, "One user is already part of a team");
  ***REMOVED***
          if(Teams.find(***REMOVED***
              $and:[
                    ***REMOVED***
                        $or:[
                            ***REMOVED***owner:doc.teammate_1 || ""***REMOVED***,
                            ***REMOVED***teammate_1:doc.teammate_1 || ""***REMOVED***,
                            ***REMOVED***teammate_2:doc.teammate_1 || ""***REMOVED***
                        ]
            ***REMOVED***,
                    ***REMOVED***event_slug:doc.event_slug***REMOVED***
              ]***REMOVED***).count()>0)***REMOVED***
              Notifications.error('Error', doc.teammate_1+' is already part of a team');
              throw new Meteor.Error(403, "One user is already part of a team");
  ***REMOVED***
          if(Teams.find(***REMOVED***
              $and:[
                    ***REMOVED***
                        $or:[
                            ***REMOVED***owner:doc.teammate_2 || ""***REMOVED***,
                            ***REMOVED***teammate_1:doc.teammate_2 || ""***REMOVED***,
                            ***REMOVED***teammate_2:doc.teammate_2 || ""***REMOVED***
                        ]
            ***REMOVED***,
                    ***REMOVED***event_slug:doc.event_slug***REMOVED***
              ]***REMOVED***).count()>0)***REMOVED***
              Notifications.error('Error', doc.teammate_2+' is already part of a team');
              throw new Meteor.Error(403, "One user is already part of a team");
  ***REMOVED***

          return doc;
  ***REMOVED***
***REMOVED***
    onSubmit: function (doc) ***REMOVED***
      schemas.Team.clean(doc);
      console.log("@@@@@@@@",doc)
    //   console.log("People doc with auto values", doc);
      this.done();
      return false;
***REMOVED***
    onSuccess:function(operation, result, template)***REMOVED***
        // Router.go('home');
***REMOVED***
    beginSubmit: function(formId, template) ***REMOVED******REMOVED***,
    endSubmit: function(formId, template) ***REMOVED******REMOVED***
  ***REMOVED***
***REMOVED***);
