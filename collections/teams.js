Teams = new Mongo.Collection("teams");

var Schemas = ***REMOVED******REMOVED***;

Schemas.Team = new SimpleSchema(***REMOVED***
    name:***REMOVED***
        type:String,
        label:"Team name"
***REMOVED***
    event_slug:***REMOVED***
        type:String,
        label:"Event"
***REMOVED***
    table_number:***REMOVED***
        type: Number,
        label:"Table Number",
        min: 0
***REMOVED***
    owner:***REMOVED***
        type:String,
        label: "Owner",
        optional:true
***REMOVED***
    teammate_1:***REMOVED***
        type:String,
        label: "Teammate #1",
        optional:true
***REMOVED***
    teammate_2:***REMOVED***
        type:String,
        label: "Teammate #2",
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

Teams.attachSchema(Schemas.Team);

// Events.allow(***REMOVED***
//   insert: function (userId, doc) ***REMOVED***
//     // the user must be logged in, and the document must be owned by the user
//     var loggedInUser = Meteor.user()
//     return (loggedInUser &&Roles.userIsInRole(loggedInUser,['admin']));
//   ***REMOVED***,
//   update: function (userId, doc, fields, modifier) ***REMOVED***
//     // can only change your own documents
//     console.log("update",loggedInUser &&Roles.userIsInRole(loggedInUser,['admin']))
//     var loggedInUser = Meteor.user()
//     return (loggedInUser &&Roles.userIsInRole(loggedInUser,['admin']))
//   ***REMOVED***
// ***REMOVED***);
