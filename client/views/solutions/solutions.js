Template.newSolutionForm.events(***REMOVED***
    "change #event_select":function(e)***REMOVED***
        getSponsorsFromEvent($("#event_select").val())
***REMOVED***
***REMOVED***);



Template.newSolutionForm.rendered = function()***REMOVED***
    getSponsorsFromEvent($("#event_select").val())
***REMOVED***

Template.newSolutionForm.helpers(***REMOVED***
    sponsorOptions:function()***REMOVED***
        return Session.get('currentEventSponsors')
***REMOVED***
***REMOVED***)

getSponsorsFromEvent = function(eventSlug)***REMOVED***
    if(eventSlug)***REMOVED***
        var event = Events.findOne(***REMOVED***slug:eventSlug***REMOVED***,***REMOVED***fields:***REMOVED***sponsors:1***REMOVED******REMOVED***);
        var sponsors=[]
        _.each(event.sponsors, function(e) ***REMOVED***
            sponsors.push(***REMOVED***label:e.name,value:e.name***REMOVED***)
***REMOVED***);
        Session.set('currentEventSponsors',sponsors)
***REMOVED***
***REMOVED***

AutoForm.hooks(***REMOVED***
    insertSolutionForm: ***REMOVED***
        before:***REMOVED***
            insert: function(doc, template) ***REMOVED***
                doc.passed = null
                doc.judged = null
                var username = Meteor.user().username
                doc.submitted_by = username
                var team = Teams.findOne(
                    ***REMOVED***
                        $and:[
                            ***REMOVED***$or:[***REMOVED***owner:username***REMOVED***,***REMOVED***teammate_1:username***REMOVED***,***REMOVED***teammate_2:username***REMOVED***]***REMOVED***,
                            ***REMOVED***event_slug:doc.event_slug***REMOVED***
                        ]
            ***REMOVED***)
                doc.table_number = team.table_number
                doc.team_name = team.name
                return doc
    ***REMOVED***
 ***REMOVED***,
        onSubmit: function (doc) ***REMOVED***
          schemas.Solution.clean(doc);
          console.log("@@@@@@@@",doc)
        //   console.log("People doc with auto values", doc);
          this.done();
          return false;
  ***REMOVED***
      onSuccess:function(operation, result, template)***REMOVED***
            Notifications.success('Success', 'Solution posted, wait to be judged');
            Router.go('home');
  ***REMOVED***
***REMOVED***
***REMOVED***)
