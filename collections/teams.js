Teams = new Mongo.Collection("teams");

var Schemas = {};

Schemas.Team = new SimpleSchema({
    name:{
        type:String,
        label:"Team name"
    },
    event_slug:{
        type:String,
        label:"Event"
    },
    table_number:{
        type: Number,
        label:"Table Number",
        min: 0
    },
    owner:{
        type:String,
        label: "Owner",
        optional:true
    },
    teammate_1:{
        type:String,
        label: "Teammate #1",
        optional:true
    },
    teammate_2:{
        type:String,
        label: "Teammate #2",
        optional:true
    },
    "extra_points.$":{
        type:[Object],
        optional:true,
        blackbox:true
    },
    "extra_points.$.sponsor":{
        type: String,
        label: "Sponsor",
        optional:true
    },
    "extra_points.$.value":{
        type: Number,
        label: "Extra points",
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

Teams.attachSchema(Schemas.Team);

// Events.allow({
//   insert: function (userId, doc) {
//     // the user must be logged in, and the document must be owned by the user
//     var loggedInUser = Meteor.user()
//     return (loggedInUser &&Roles.userIsInRole(loggedInUser,['admin']));
//   },
//   update: function (userId, doc, fields, modifier) {
//     // can only change your own documents
//     console.log("update",loggedInUser &&Roles.userIsInRole(loggedInUser,['admin']))
//     var loggedInUser = Meteor.user()
//     return (loggedInUser &&Roles.userIsInRole(loggedInUser,['admin']))
//   }
// });
