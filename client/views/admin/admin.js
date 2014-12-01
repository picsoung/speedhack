Template.manageUsers.helpers(***REMOVED***
    usersCollection:function(date)***REMOVED***
        return Meteor.users.find(***REMOVED******REMOVED***);
***REMOVED***
    settings: function () ***REMOVED***
        return ***REMOVED***
            rowsPerPage: 5,
            showFilter: false,
            fields: [
                ***REMOVED***key: 'profile.name',label:'Name'***REMOVED***,
                ***REMOVED***key: 'username', label: 'Username' ***REMOVED***,
                ***REMOVED*** key: 'roles', label: 'Roles', tmpl: Template.roleCell***REMOVED***,
                ***REMOVED*** key: 'createdAt',  sort: 'descending', sortByValue:true, label: 'Submitted on' ,fn: function (value, object) ***REMOVED*** return moment(value).fromNow(); ***REMOVED******REMOVED***
            ]
 ***REMOVED***
 ***REMOVED***
***REMOVED***)

Template.manageTeams.helpers(***REMOVED***
    teamsCollection:function(date)***REMOVED***
        return Teams.find(***REMOVED******REMOVED***);
***REMOVED***
    settings: function () ***REMOVED***
        return ***REMOVED***
            rowsPerPage: 5,
            showFilter: false,
            fields: [
                ***REMOVED***key: 'name',label:'Name'***REMOVED***,
                ***REMOVED***key: 'table_number', label: 'Table number' ***REMOVED***,
                ***REMOVED*** key: 'event_slug', label: 'Event'***REMOVED***,
                ***REMOVED*** key: 'createdAt',  sort: 'descending', sortByValue:true, label: 'Submitted on' ,fn: function (value, object) ***REMOVED*** return moment(value).fromNow(); ***REMOVED******REMOVED***,
                ***REMOVED***key:'extra_points',label:"Points", fn: function (value,object) ***REMOVED*** return computePointsForTeam(object.name,object.event_slug) ***REMOVED******REMOVED***
            ]
 ***REMOVED***
 ***REMOVED***
***REMOVED***)

var computePointsForTeam = function (teamName, eventSlug)***REMOVED***
    var total = 0;
    var passedSolutions = Solutions.find(***REMOVED***$and:[***REMOVED***team_name:teamName***REMOVED***,***REMOVED***event_slug:eventSlug***REMOVED***,***REMOVED***passed:true***REMOVED***]***REMOVED***).count()
    var team = Teams.findOne(***REMOVED***name:teamName***REMOVED***,***REMOVED***fields:***REMOVED***extra_points:1***REMOVED******REMOVED***)
    total += passedSolutions
    if(team.extra_points)
        total += _.reduce(team.extra_points,function(memo, num)***REMOVED*** return memo + num.value; ***REMOVED***, 0)
    return total
***REMOVED***

Template.manageSolutions.helpers(***REMOVED***
    solutionsCollection:function(date)***REMOVED***
        return Solutions.find(***REMOVED******REMOVED***);
***REMOVED***
    settings: function () ***REMOVED***
        return ***REMOVED***
            rowsPerPage: 5,
            showFilter: false,
            fields: [
                ***REMOVED*** key: 'event_slug', label: 'Event'***REMOVED***,
                ***REMOVED***key: 'sponsor',label:'Sponsor'***REMOVED***,
                ***REMOVED***key: 'team_name',label:'Team name'***REMOVED***,
                ***REMOVED***key: 'submitted_by', label: 'Submitted By' ***REMOVED***,
                ***REMOVED***key: 'judged_on', label: 'Judged on' ,fn: function (value, object) ***REMOVED*** return moment(value).fromNow(); ***REMOVED******REMOVED***,
                ***REMOVED*** key: 'createdAt',  label:"Submitted on",sort: 'descending', sortByValue:true, label: 'Submitted on' ,fn: function (value, object) ***REMOVED*** return moment(value).fromNow(); ***REMOVED******REMOVED***
            ],
            rowClass: function(item) ***REMOVED***
              var qnt = item.passed;
              switch (qnt) ***REMOVED***
                case false:
                    return 'danger';
                case true:
                    return 'success';
                default:
                  return 'warning';
      ***REMOVED***
  ***REMOVED***
 ***REMOVED***
 ***REMOVED***
***REMOVED***)

Template.addRoleToUserSection.events(***REMOVED***
    'click button':function(e,t)***REMOVED***
        Meteor.call('addRoleToUser',$("#username").val(),$("#role").val(),function(err,res)***REMOVED***
            if(err)***REMOVED***
                    Notifications.error(err.error,err.message);
    ***REMOVED***
            if(res)***REMOVED***
                Notifications.success("Success","User info updated");
    ***REMOVED***
***REMOVED***)
***REMOVED***
***REMOVED***)

Template.roleCell.events(***REMOVED***
    'click .glyphicon-trash':function(e,t)***REMOVED***
        Meteor.call('removeRoleToUser',t.data._id,t.data.roles,e.currentTarget.attributes['data-roleName'].value)
***REMOVED***
***REMOVED***)

Template.extraPoints.events(***REMOVED***
    'click button':function(e,t)***REMOVED***
        var teamName = $("#team").val();
        var nbPoints = parseInt($("#extraChallenges").val())
        Meteor.call('addExtraPointsToTeamName', teamName,'admin', nbPoints,function(err,res)***REMOVED***
            if(err)***REMOVED***
                    Notifications.error(err.error,err.message);
    ***REMOVED***
            if(res)***REMOVED***
                Notifications.success("Success","Points added");
    ***REMOVED***
***REMOVED***)
***REMOVED***
***REMOVED***)
