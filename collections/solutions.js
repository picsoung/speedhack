Solutions = new Mongo.Collection("solutions");

var Schemas = ***REMOVED******REMOVED***;

Schemas.Solution = new SimpleSchema(***REMOVED***
    team_name:***REMOVED***
        type:String,
        label:"Team Name",
        optional:true
***REMOVED***
    event_slug:***REMOVED***
        type: String,
        label: "Event"
***REMOVED***
    sponsor:***REMOVED***
        type:String,
        label: "Sponsor"
***REMOVED***
    passed:***REMOVED***
        type: Boolean,
        label: "Passed",
        optional:true,
        defaultValue: null
***REMOVED***
    judged:***REMOVED***
        type: Boolean,
        label: "Judged",
        optional:true,
        defaultValue: false
***REMOVED***
    submitted_by:***REMOVED***
        type:String,
        label: "submitted by",
        optional:true
***REMOVED***
    judged_on:***REMOVED***
        type:Date,
        label:"judged on",
        optional:true
***REMOVED***
    extra_points:***REMOVED***
        type: Number,
        label: "Extra points",
        optional:true
***REMOVED***
    createdAt: ***REMOVED***
        type: Date,
          autoValue: function() ***REMOVED***
            if (this.isInsert) ***REMOVED***
              return new Date;
    ***REMOVED*** else if (this.isUpsert) ***REMOVED***
              return ***REMOVED***$setOnInsert: new Date***REMOVED***;
    ***REMOVED*** else ***REMOVED***
              this.unset();
    ***REMOVED***
  ***REMOVED***
  ***REMOVED***
      // Force value to be current date (on server) upon update
      // and don't allow it to be set upon insert.
      updatedAt: ***REMOVED***
        type: Date,
        autoValue: function() ***REMOVED***
          if (this.isUpdate) ***REMOVED***
            return new Date();
  ***REMOVED***
***REMOVED***,
        denyInsert: true,
        optional: true
  ***REMOVED***
***REMOVED***)

Solutions.attachSchema(Schemas.Solution);
