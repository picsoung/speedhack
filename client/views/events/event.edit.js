AutoForm.hooks({
  updateEventForm: {
    onSubmit: function (doc) {
      schemas.Event.clean(doc);
      this.done();
      return false;
    },
    onSuccess:function(operation, result, template){
        Router.go('event.show',{slug:template.data.doc.slug});
    }
  }
});
