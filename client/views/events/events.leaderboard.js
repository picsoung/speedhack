Template.leaderboard.helpers({
    teamScore:function(){
        var solutions = Solutions.find({}).fetch() //all solutions for this event
        var passedSolutions = _.filter(solutions, function(num){ return num.passed==true; })
        var solPerTeam = _.groupBy(passedSolutions,function(num){return num.team_name});
        var result =[];
        _.each(solPerTeam,function(key,val){
            console.log(key,val)
            var team = Teams.findOne({name:val},{fields:{extra_points:1}});
            var sumExtraPoints = _.reduce(team.extra_points,function(memo, num){ return memo + num.value; }, 0)
            result.push({team_name:val,score:solPerTeam[val].length + sumExtraPoints})
        })
        return _.sortBy(result, function (obj) {
             return obj.score;
         }).reverse()
    }
})

Template.livestream.helpers({
    solutions:function(){
        return Solutions.find({});
    },
    settings:function(){
        return {
            showFilter: false,
            showNavigation:'never',
            fields: [
                {key: 'team_name', label: 'Team name' },
                {key: 'sponsor', label: 'Challenge' },
                {key: 'submitted_by', label: 'Submitted By' },
                { key: 'passed', label: 'Challenge passed' },
                { key: 'createdAt',  sort: 'descending',  sortByValue:true,label: 'Submitted on' ,fn: function (value, object) { return moment(value).fromNow(); }},
                { key: 'judged_on', label: 'Judged on' ,fn: function (value, object) { if(value) return moment(value).fromNow(); }}
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
