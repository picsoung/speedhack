AutoForm.hooks(***REMOVED***
  updateEventForm: ***REMOVED***
    onSubmit: function (doc) ***REMOVED***
      schemas.Event.clean(doc);
      this.done();
      return false;
***REMOVED***
    onSuccess:function(operation, result, template)***REMOVED***
        Router.go('event.show',***REMOVED***slug:template.data.doc.slug***REMOVED***);
***REMOVED***
  ***REMOVED***
***REMOVED***);
