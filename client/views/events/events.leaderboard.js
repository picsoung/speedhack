Template.leaderboard.helpers(***REMOVED***
    teamScore:function()***REMOVED***
        var solutions = Solutions.find(***REMOVED******REMOVED***).fetch() //all solutions for this event
        var passedSolutions = _.filter(solutions, function(num)***REMOVED*** return num.passed==true; ***REMOVED***)
        var solPerTeam = _.groupBy(passedSolutions,function(num)***REMOVED***return num.team_name***REMOVED***);
        var result =[];
        _.each(solPerTeam,function(key,val)***REMOVED***
            console.log(key,val)
            var team = Teams.findOne(***REMOVED***name:val***REMOVED***,***REMOVED***fields:***REMOVED***extra_points:1***REMOVED******REMOVED***);
            result.push(***REMOVED***team_name:val,score:solPerTeam[val].length + team.extra_points***REMOVED***)
***REMOVED***)
        return _.sortBy(result, function (obj) ***REMOVED***
             return obj.score;
 ***REMOVED***).reverse()
***REMOVED***
***REMOVED***)

Template.livestream.helpers(***REMOVED***
    solutions:function()***REMOVED***
        return Solutions.find(***REMOVED******REMOVED***);
***REMOVED***
    settings:function()***REMOVED***
        return ***REMOVED***
            showFilter: false,
            showNavigation:'never',
            fields: [
                ***REMOVED***key: 'team_name', label: 'Team name' ***REMOVED***,
                ***REMOVED***key: 'sponsor', label: 'Challenge' ***REMOVED***,
                ***REMOVED***key: 'submitted_by', label: 'Submitted By' ***REMOVED***,
                ***REMOVED*** key: 'passed', label: 'Challenge passed' ***REMOVED***,
                ***REMOVED*** key: 'createdAt',  sort: 'descending',  sortByValue:true,label: 'Submitted on' ,fn: function (value, object) ***REMOVED*** return moment(value).fromNow(); ***REMOVED******REMOVED***,
                ***REMOVED*** key: 'judged_on', label: 'Judged on' ,fn: function (value, object) ***REMOVED*** if(value) return moment(value).fromNow(); ***REMOVED******REMOVED***
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
