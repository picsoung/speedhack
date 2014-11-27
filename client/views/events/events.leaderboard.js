Template.leaderboard.helpers(***REMOVED***
    teamScore:function()***REMOVED***
        var solutions = Solutions.find(***REMOVED******REMOVED***).fetch() //all solutions for this event
        var passedSolutions = _.filter(solutions, function(num)***REMOVED*** return num.passed==true; ***REMOVED***)
        var solPerTeam = _.groupBy(passedSolutions,function(num)***REMOVED***return num.team_name***REMOVED***);
        var result =[];
        _.each(solPerTeam,function(key,val)***REMOVED***
            console.log(key,val)
            result.push(***REMOVED***team_name:val,score:solPerTeam[val].length***REMOVED***)
***REMOVED***)
        return _.sortBy(result, function (obj) ***REMOVED***
             return obj.score;
 ***REMOVED***).reverse()
***REMOVED***
***REMOVED***)
