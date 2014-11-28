Events = new Mongo.Collection("events");

var Schemas = {};

Schemas.Event = new SimpleSchema({
    name:{
        type:String,
        label:"Name of the event"
    },
    brief:{
        type: String,
        label: "Brief about the event"
    },
    startDate:{
        type:Date,
        label: "Start date"
    },
    endDate:{
        type:Date,
        label: "End date"
    },
    "venue.name":{
        type: String,
        label: "Venue name"
    },
    "venue.city":{
        type: String,
        label: "Venue city"
    },
    "venue.address":{
        type: String,
        label: "Venue Address"
    },
    sponsors:{
        type:[Object],
        label:"Sponsors",
        optional:true
    },
    "sponsors.$.name": {
        type: String
    },
    "sponsors.$.logo": {
        type: String,
        regEx: SimpleSchema.RegEx.Url
    },
    "sponsors.$.url": {
        type: String,
        regEx: SimpleSchema.RegEx.Url
    },
    slug:{
        type: String,
        label: "slug",
        optional: true,
        autoValue: function() {
            var name = this.field("name");
            if(name.isSet){
                return URLify2(name.value)
            }else{
                this.unset();
            }
        }
    },
    image:{
        type:String,
        label: "image URL",
        regEx: SimpleSchema.RegEx.Url
    },
    tickets_url:{
        type:String,
        label: "Ticket URL",
        regEx: SimpleSchema.RegEx.Url,
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

Events.attachSchema(Schemas.Event);

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
