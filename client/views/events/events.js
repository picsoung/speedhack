Template.eventsList.helpers(***REMOVED***
    'upcomingEvents':function()***REMOVED***
        return Events.find(***REMOVED***startDate:***REMOVED***$gte:new Date()***REMOVED******REMOVED***) //greater than today
***REMOVED***
    'pastEvents':function()***REMOVED***
        return Events.find(***REMOVED***endDate:***REMOVED***$lte:new Date()***REMOVED******REMOVED***) //enddate < today
***REMOVED***
***REMOVED***)

Template.addSponsorMenu.events(***REMOVED***
    'click #addButton':function(e,t)***REMOVED***
        $("#addSponsorForm").toggle();
***REMOVED***
    'click #submitSponsorForm':function(e,target)***REMOVED***
        Meteor.call('addSponsorToEvent',target.data._id,$("#sponsor_name").val(),$("#sponsor_logo").val(),$("#sponsor_url").val())
***REMOVED***
***REMOVED***)

Template.removeSponsorMenu.events(***REMOVED***
    'click #removeSponsorButton':function(e,target)***REMOVED***
        Meteor.call('removeSponsorFromEvent',e.target.getAttribute('data-eventslug'),target.data.name)
***REMOVED***
***REMOVED***)

Template.removeSponsorMenu.helpers(***REMOVED***
    'eventSlug':function(parentContext)***REMOVED***
        return parentContext.slug;
***REMOVED***
***REMOVED***)

Template.mySolutions.helpers(***REMOVED***
    mySolutions: function () ***REMOVED***
        return Solutions.find(***REMOVED******REMOVED***);
***REMOVED***
    settings: function () ***REMOVED***
        return ***REMOVED***
            rowsPerPage: 5,
            showFilter: false,
            fields: [
                ***REMOVED***key: 'submitted_by', label: 'Submitted By' ***REMOVED***,
                ***REMOVED*** key: 'sponsor', label: 'Challenge' ***REMOVED***, //TODO display logo
                ***REMOVED*** key: 'createdAt',  sort: 'descending', label: 'Submitted on' ,fn: function (value, object) ***REMOVED*** return moment(value).fromNow(); ***REMOVED******REMOVED***
            ],
            rowClass: function(item) ***REMOVED***
              var qnt = item.passed;
              switch (qnt) ***REMOVED***
                case false:
                    return 'danger';
                case true:
                    return 'success';
                default:
                  return 'warning';
      ***REMOVED***
  ***REMOVED***
 ***REMOVED***
 ***REMOVED***
***REMOVED***);

AutoForm.hooks(***REMOVED***
  insertEventForm: ***REMOVED***
    onSubmit: function (doc) ***REMOVED***
      schemas.Event.clean(doc);
      console.log("People doc with auto values", doc);
      this.done();
      return false;
***REMOVED***
    onSuccess:function(operation, result, template)***REMOVED***
        Router.go('events');
***REMOVED***
  ***REMOVED***
***REMOVED***);
