Meteor.startup(function () ***REMOVED***
    process.env.MAIL_URL = 'smtp://'+Meteor.settings.sendgrid.login+':'+Meteor.settings.sendgrid.pass+'@smtp.sendgrid.net:587';

    Accounts.emailTemplates.from = 'SpeedHack.io <no-reply@speedhack.io>';
    Accounts.emailTemplates.siteName = 'SpeedHack';
***REMOVED***);
