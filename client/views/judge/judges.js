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
                { key: 'createdAt',  sort: 'descending',sortByValue:true, label: 'Submitted on' ,fn: function (value, object) { return moment(value).fromNow(); }}
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
                { key: 'judged_on',  sort: 'descending', sortByValue:true, label: 'Judged on' ,fn: function (value, object) { return moment(value).fromNow(); }}
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

Template.teamList.helpers({
    events:function(){
        return Events.find({});
    },
    teams: function(){
        return Teams.find({});
    },
    teamsSettings: function () {
        return {
            rowsPerPage: 5,
            showFilter: false,
            fields: [
                {key: 'name', label: 'Team name' },
                {key: 'extra_points',label: 'Extra points', tmpl:Template.extraPointsCell},
            ]
        }
    }
})

Template.teamList.events({
    'change select':function(event,target){
        console.log("changed")
        var eventSlug = event.currentTarget.value;
        Session.set('currentEvent',eventSlug);
        Meteor.subscribe('teamsPerSponsor',Session.get('currentSponsor'),eventSlug);
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

Template.extraPointsCell.helpers({
    extraPoints: function(){
        var self = this;
        var extraPoints = self.extra_points;
        var extra = _.find(extraPoints,function(num){return num.sponsor==Session.get('currentSponsor')})
        if(extra)
            return  extra.value

        return 0
    }
});

Template.extraPointsCell.events({
    'click #plusExtraPointsButton':function(e,t){
        var self = this
        //Check if sponsor has point
        Meteor.call('getCurrentSponsorInfo',Session.get('currentEvent'),Session.get('currentSponsor'),function(err,data){
            if(err)
                console.log(err)

            if(data && data.points>0){
                Meteor.call('removePointsToSponsors',Session.get('currentEvent'),Session.get('currentSponsor'),1)
                Meteor.call("addExtraPointsToTeam",self._id,Session.get('currentSponsor'),1)
            }
        })

    },
    'click #minusExtraPointsButton':function(e,t){
        var self = this
        //Add points again to sponsor
        Meteor.call('addPointsToSponsors',Session.get('currentEvent'),Session.get('currentSponsor'),1)
        Meteor.call("removeExtraPointsToTeam",self._id,Session.get('currentSponsor'),1)
        // Meteor.call('getCurrentSponsorInfo',Session.get('currentEvent'),Session.get('currentSponsor'),function(err,data){
        //     if(err)
        //         console.log(err)
        //
        //     if(data && data.points0){
        //
        //     }
        // })
    }
})
