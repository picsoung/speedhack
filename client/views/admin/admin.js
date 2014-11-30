Template.manageUsers.helpers({
    usersCollection:function(date){
        return Meteor.users.find({});
    },
    settings: function () {
        return {
            rowsPerPage: 5,
            showFilter: false,
            fields: [
                {key: 'profile.name',label:'Name'},
                {key: 'profile.username', label: 'Username' },
                { key: 'roles', label: 'Roles', tmpl: Template.roleCell},
                { key: 'createdAt',  sort: 'descending', sortByValue:true, label: 'Submitted on' ,fn: function (value, object) { return moment(value).fromNow(); }}
            ]
     }
 }
})

Template.manageTeams.helpers({
    teamsCollection:function(date){
        return Teams.find({});
    },
    settings: function () {
        return {
            rowsPerPage: 5,
            showFilter: false,
            fields: [
                {key: 'name',label:'Name'},
                {key: 'table_number', label: 'Table number' },
                { key: 'event_slug', label: 'Event'},
                { key: 'createdAt',  sort: 'descending', sortByValue:true, label: 'Submitted on' ,fn: function (value, object) { return moment(value).fromNow(); }},
                {key:'extra_points',label:"Points", fn: function (value,object) { return computePointsForTeam(object.name,object.event_slug) }}
            ]
     }
 }
})

var computePointsForTeam = function (teamName, eventSlug){
    var total =0;
    var passedSolutions = Solutions.find({$and:[{team_name:teamName},{event_slug:eventSlug},{passed:true}]}).count()
    var team = Teams.findOne({name:teamName},{fields:{extra_points:1}})
    total += passedSolutions
    if(team.extra_points)
        total += extra_points
    return total
}

Template.manageSolutions.helpers({
    solutionsCollection:function(date){
        return Solutions.find({});
    },
    settings: function () {
        return {
            rowsPerPage: 5,
            showFilter: false,
            fields: [
                { key: 'event_slug', label: 'Event'},
                {key: 'sponsor',label:'Sponsor'},
                {key: 'team_name',label:'Team name'},
                {key: 'submitted_by', label: 'Submitted By' },
                {key: 'judged_on', label: 'Judged on' ,fn: function (value, object) { return moment(value).fromNow(); }},
                { key: 'createdAt',  label:"Submitted on",sort: 'descending', sortByValue:true, label: 'Submitted on' ,fn: function (value, object) { return moment(value).fromNow(); }}
            ],
            rowClass: function(item) {
              var qnt = item.passed;
              switch (qnt) {
                case false:
                    return 'danger';
                case true:
                    return 'success';
                default:
                  return 'warning';
              }
          }
     }
 }
})

Template.addRoleToUserSection.events({
    'click button':function(e,t){
        Meteor.call('addRoleToUser',$("#username").val(),$("#role").val(),function(err,res){
            if(err){
                    Notifications.error(err.error,err.message);
            }
            if(res){
                Notifications.success("Success","User info updated");
            }
        })
    }
})

Template.roleCell.events({
    'click .glyphicon-trash':function(e,t){
        // console.log(t)
        // console.log(e.currentTarget.attributes['data-roleName'].value)
        Meteor.call('removeRoleToUser',t.data._id,t.data.roles,e.currentTarget.attributes['data-roleName'].value)
    }
})
