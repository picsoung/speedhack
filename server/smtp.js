Meteor.startup(function () ***REMOVED***
    process.env.MAIL_URL = 'smtp://'+Meteor.settings.sendgrid.login+':'+Meteor.settings.sendgrid.pass+'@smtp.sendgrid.net:587';

    Accounts.emailTemplates.from = 'SpeedHack.io <no-reply@speedhack.io>';
    Accounts.emailTemplates.siteName = 'SpeedHack';

    Accounts.emailTemplates.enrollAccount.text = function (user, url) ***REMOVED***
        return "You have been selected to participate in building a better future!"
        + " To activate your account, simply click the link below:\n\n"
        + url;
***REMOVED***;
***REMOVED***);
