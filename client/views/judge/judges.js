Template.submissionsToJudge.helpers(***REMOVED***
    subsToJudge: function()***REMOVED***
        return Solutions.find(***REMOVED***judged:null***REMOVED***);
***REMOVED***
    toJudgeSettings: function () ***REMOVED***
        return ***REMOVED***
            rowsPerPage: 5,
            showFilter: false,
            fields: [
                ***REMOVED***key: 'team_name', label: 'Team name' ***REMOVED***,
                ***REMOVED***key: 'submitted_by', label: 'Submitted By' ***REMOVED***,
                ***REMOVED*** key: 'passed', label: 'Challenge passed' , tmpl: Template.passedCell***REMOVED***,
                ***REMOVED*** key: 'createdAt',  sort: 'descending',sortByValue:true, label: 'Submitted on' ,fn: function (value, object) ***REMOVED*** return moment(value).fromNow(); ***REMOVED******REMOVED***
            ]
***REMOVED***
***REMOVED***
***REMOVED***)

Template.submissionsJudged.helpers(***REMOVED***
    subsJudged: function()***REMOVED***
        return Solutions.find(***REMOVED***judged:true***REMOVED***);
***REMOVED***
    judgedSettings: function () ***REMOVED***
        return ***REMOVED***
            rowsPerPage: 5,
            showFilter: false,
            fields: [
                ***REMOVED***key: 'team_name', label: 'Team name' ***REMOVED***,
                ***REMOVED***key: 'submitted_by', label: 'Submitted By' ***REMOVED***,
                ***REMOVED*** key: 'passed', label: 'Challenge passed'***REMOVED***,
                ***REMOVED*** key: 'createdAt', label: 'Submitted on' ,fn: function (value, object) ***REMOVED*** return moment(value).fromNow(); ***REMOVED******REMOVED***,
                ***REMOVED*** key: 'judged_on',  sort: 'descending', sortByValue:true, label: 'Judged on' ,fn: function (value, object) ***REMOVED*** return moment(value).fromNow(); ***REMOVED******REMOVED***
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


Template.submissionsToJudge.events(***REMOVED***
  'change select': function (event,target) ***REMOVED***
    var solution = this;
    var status = event.currentTarget.value;
    console.log(status);
    Meteor.call('updateSolutionStatus',solution._id,status==="true")
    Meteor.call('updateSolutionJudgedStatus',solution._id,true)
  ***REMOVED***
***REMOVED***);
