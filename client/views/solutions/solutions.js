Template.newSolutionForm.events({
    "change #event_select":function(e){
        getSponsorsFromEvent($("#event_select").val())
    }
});



Template.newSolutionForm.rendered = function(){
    getSponsorsFromEvent($("#event_select").val())
}

Template.newSolutionForm.helpers({
    sponsorOptions:function(){
        return Session.get('currentEventSponsors')
    }
})

getSponsorsFromEvent = function(eventSlug){
    var event = Events.findOne({slug:eventSlug},{fields:{sponsors:1}});
    var sponsors=[]
    _.each(event.sponsors, function(e) {
        sponsors.push({label:e.name,value:e.name})
    });
    Session.set('currentEventSponsors',sponsors)
}

AutoForm.hooks({
    insertSolutionForm: {
        before:{
            insert: function(doc, template) {
                doc.passed = null
                doc.judged = null
                var username = Meteor.user().profile.username
                doc.submitted_by = username
                var team = Teams.findOne(
                    {
                        $and:[
                            {$or:[{owner:username},{teammate_1:username},{teammate_2:username}]},
                            {event_slug:doc.event_slug}
                        ]
                    })
                doc.table_number = team.table_number
                doc.team_name = team.name
                return doc
            }
         },
        onSubmit: function (doc) {
          schemas.Solution.clean(doc);
          console.log("@@@@@@@@",doc)
        //   console.log("People doc with auto values", doc);
          this.done();
          return false;
      },
      onSuccess:function(operation, result, template){
            Notifications.success('Success', 'Solution posted, wait to be judged');
            Router.go('home');
      },
    }
})
