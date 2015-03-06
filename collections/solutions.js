Solutions = new Mongo.Collection("solutions");

var Schemas = {};

Schemas.Solution = new SimpleSchema({
    team_name:{
        type:String,
        label:"Team Name",
        optional:true
    },
    event_slug:{
        type: String,
        label: "Event"
    },
    sponsor:{
        type:String,
        label: "Sponsor"
    },
    passed:{
        type: Boolean,
        label: "Passed",
        optional:true,
        defaultValue: null
    },
    judged:{
        type: Boolean,
        label: "Judged",
        optional:true,
        defaultValue: false
    },
    submitted_by:{
        type:String,
        label: "submitted by",
        optional:true
    },
    judged_on:{
        type:Date,
        label:"judged on",
        optional:true
    },
    extra_points:{
        type: Number,
        label: "Extra points",
        optional:true
    },
    table_number:{
        type: Number,
        label: "Table number",
        optional:true
    },
    createdAt: {
        type: Date,
          autoValue: function() {
            if (this.isInsert) {
              return new Date;
            } else if (this.isUpsert) {
              return {$setOnInsert: new Date};
            } else {
              this.unset();
            }
          }
      },
      // Force value to be current date (on server) upon update
      // and don't allow it to be set upon insert.
      updatedAt: {
        type: Date,
        autoValue: function() {
          if (this.isUpdate) {
            return new Date();
          }
        },
        denyInsert: true,
        optional: true
      }
})

Solutions.attachSchema(Schemas.Solution);
