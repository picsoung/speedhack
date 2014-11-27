Template.submissionsToJudge.helpers({
    subsToJudge: function(){
        return Solutions.find({judged:null});
    },
    toJudgeSettings: function () {
        return {
            rowsPerPage: 5,
            showFilter: false,
            fields: [
                {key: 'team_name', label: 'Team name' },
                {key: 'submitted_by', label: 'Submitted By' },
                { key: 'passed', label: 'Challenge passed' , tmpl: Template.passedCell},
                { key: 'createdAt',  sort: 'descending', label: 'Submitted on' ,fn: function (value, object) { return moment(value).fromNow(); }}
            ]
        }
    }
})

Template.submissionsJudged.helpers({
    subsJudged: function(){
        return Solutions.find({judged:true});
    },
    judgedSettings: function () {
        return {
            rowsPerPage: 5,
            showFilter: false,
            fields: [
                {key: 'team_name', label: 'Team name' },
                {key: 'submitted_by', label: 'Submitted By' },
                { key: 'passed', label: 'Challenge passed'},
                { key: 'createdAt', label: 'Submitted on' ,fn: function (value, object) { return moment(value).fromNow(); }},
                { key: 'judged_on',  sort: 'ascending', label: 'Judged on' ,fn: function (value, object) { return moment(value).fromNow(); }}
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


Template.submissionsToJudge.events({
  'change select': function (event,target) {
    var solution = this;
    var status = event.currentTarget.value;
    console.log(status);
    Meteor.call('updateSolutionStatus',solution._id,status==="true")
    Meteor.call('updateSolutionJudgedStatus',solution._id,true)
  }
});
