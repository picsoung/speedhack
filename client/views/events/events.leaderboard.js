Template.leaderboard.helpers({
    teamScore:function(){
        var solutions = Solutions.find({}).fetch() //all solutions for this event
        var passedSolutions = _.filter(solutions, function(num){ return num.passed==true; })
        var solPerTeam = _.groupBy(passedSolutions,function(num){return num.team_name});
        var result =[];
        _.each(solPerTeam,function(key,val){
            console.log(key,val)
            result.push({team_name:val,score:solPerTeam[val].length})
        })
        return _.sortBy(result, function (obj) {
             return obj.score;
         }).reverse()
    }
})
