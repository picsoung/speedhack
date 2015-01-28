Schema = ***REMOVED******REMOVED***;

Schema.UserCountry = new SimpleSchema(***REMOVED***
    name: ***REMOVED***
        type: String
***REMOVED***
    code: ***REMOVED***
        type: String,
        regEx: /^[A-Z]***REMOVED***2***REMOVED***$/
***REMOVED***
***REMOVED***);

Schema.UserProfile = new SimpleSchema(***REMOVED***
    gender: ***REMOVED***
        type: String,
        allowedValues: ['Male', 'Female'],
        optional: true
***REMOVED***
    organization : ***REMOVED***
        type: String,
        regEx: /^[a-z0-9A-z .]***REMOVED***3,30***REMOVED***$/,
        optional: true
***REMOVED***
    website: ***REMOVED***
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        optional: true
***REMOVED***
    bio: ***REMOVED***
        type: String,
        optional: true
***REMOVED***
    country: ***REMOVED***
        type: Schema.UserCountry,
        optional: true
***REMOVED***
    profile_picture_url:***REMOVED***
        type:String,
        optional: true
***REMOVED***
***REMOVED***);

Schema.User = new SimpleSchema(***REMOVED***
    username: ***REMOVED***
        type: String,
        regEx: /^[a-z0-9A-Z_@.]***REMOVED***3,30***REMOVED***$/
***REMOVED***
    emails: ***REMOVED***
        type: [Object],
        // this must be optional if you also use other login services like facebook,
        // but if you use only accounts-password, then it can be required
        optional: true
***REMOVED***
    "emails.$.address": ***REMOVED***
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "Email",
        // index: true,
        // unique: true
***REMOVED***
    "emails.$.verified": ***REMOVED***
        type: Boolean,
        optional:true
***REMOVED***
    createdAt: ***REMOVED***
        type: Date
***REMOVED***
    profile: ***REMOVED***
        type: Schema.UserProfile,
        optional: true
***REMOVED***
    services: ***REMOVED***
        type: Object,
        optional: true,
        blackbox: true
***REMOVED***
    // Add `roles` to your schema if you use the meteor-roles package.
    // Note that when using this package, you must also specify the
    // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
    // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
    // You can't mix and match adding with and without a group since
    // you will fail validation in some cases.
    roles: ***REMOVED***
        type: Object,
        optional: true,
        blackbox: true
***REMOVED***
***REMOVED***);

Meteor.users.attachSchema(Schema.User);
