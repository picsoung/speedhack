Events = new Mongo.Collection("events");

var Schemas = ***REMOVED******REMOVED***;

Schemas.Event = new SimpleSchema(***REMOVED***
    name:***REMOVED***
        type:String,
        label:"Name of the event"
***REMOVED***
    brief:***REMOVED***
        type: String,
        label: "Brief about the event"
***REMOVED***
    startDate:***REMOVED***
        type:Date,
        label: "Start date"
***REMOVED***
    endDate:***REMOVED***
        type:Date,
        label: "End date"
***REMOVED***
    "venue.name":***REMOVED***
        type: String,
        label: "Venue name"
***REMOVED***
    "venue.city":***REMOVED***
        type: String,
        label: "Venue city"
***REMOVED***
    "venue.address":***REMOVED***
        type: String,
        label: "Venue Address"
***REMOVED***
    sponsors:***REMOVED***
        type:[Object],
        label:"Sponsors",
        optional:true
***REMOVED***
    "sponsors.$.name": ***REMOVED***
        type: String
***REMOVED***
    "sponsors.$.logo": ***REMOVED***
        type: String,
        regEx: SimpleSchema.RegEx.Url
***REMOVED***
    "sponsors.$.url": ***REMOVED***
        type: String,
        regEx: SimpleSchema.RegEx.Url
***REMOVED***
    slug:***REMOVED***
        type: String,
        label: "slug",
        optional: true,
        autoValue: function() ***REMOVED***
            var name = this.field("name");
            if(name.isSet)***REMOVED***
                return URLify2(name.value)
    ***REMOVED***else***REMOVED***
                this.unset();
    ***REMOVED***
***REMOVED***
***REMOVED***
    image:***REMOVED***
        type:String,
        label: "image URL",
        regEx: SimpleSchema.RegEx.Url
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

Events.attachSchema(Schemas.Event);

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
