Template.eventsList.helpers({
    'upcomingEvents':function(){
        return Events.find({startDate:{$gte:new Date()}}) //greater than today
    },
    'pastEvents':function(){
        return Events.find({endDate:{$lte:new Date()}}) //enddate < today
    }
})

Template.addSponsorMenu.events({
    'click #addButton':function(e,t){
        $("#addSponsorForm").toggle();
    },
    'click #submitSponsorForm':function(e,target){
        Meteor.call('addSponsorToEvent',target.data._id,$("#sponsor_name").val(),$("#sponsor_logo").val(),$("#sponsor_url").val())
    }
})

Template.removeSponsorMenu.events({
    'click #removeSponsorButton':function(e,target){
        Meteor.call('removeSponsorFromEvent',e.target.getAttribute('data-eventslug'),target.data.name)
    }
})

Template.removeSponsorMenu.helpers({
    'eventSlug':function(parentContext){
        return parentContext.slug;
    }
})

Template.mySolutions.helpers({
    mySolutions: function () {
        return Solutions.find({});
    },
    settings: function () {
        return {
            rowsPerPage: 5,
            showFilter: false,
            fields: [
                {key: 'submitted_by', label: 'Submitted By' },
                { key: 'sponsor', label: 'Challenge' }, //TODO display logo
                { key: 'createdAt',  sort: 'descending', sortByValue:true, label: 'Submitted on' ,fn: function (value, object) { return moment(value).fromNow(); }}
            ],
            rowClass: function(item) {
              var qnt = item.passed;
              switch (qnt) {
                case false:
                    return 'danger';
                case true:
                    return 'success';
                default:
                  return 'warning';
              }
          }
     }
 }
});

AutoForm.hooks({
  insertEventForm: {
    onSubmit: function (doc) {
      schemas.Event.clean(doc);
      console.log("People doc with auto values", doc);
      this.done();
      return false;
    },
    onSuccess:function(operation, result, template){
        Router.go('events');
    }
  }
});
