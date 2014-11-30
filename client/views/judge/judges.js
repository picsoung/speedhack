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

Template.teamList.helpers(***REMOVED***
    events:function()***REMOVED***
        return Events.find(***REMOVED******REMOVED***);
***REMOVED***
    teams: function()***REMOVED***
        return Teams.find(***REMOVED******REMOVED***);
***REMOVED***
    teamsSettings: function () ***REMOVED***
        return ***REMOVED***
            rowsPerPage: 5,
            showFilter: false,
            fields: [
                ***REMOVED***key: 'name', label: 'Team name' ***REMOVED***,
                ***REMOVED***key: 'extra_points',label: 'Extra points', tmpl:Template.extraPointsCell***REMOVED***,
            ]
***REMOVED***
***REMOVED***
***REMOVED***)

Template.teamList.events(***REMOVED***
    'change select':function(event,target)***REMOVED***
        console.log("changed")
        var eventSlug = event.currentTarget.value;
        Session.set('currentEvent',eventSlug);
        Meteor.subscribe('teamsPerSponsor',Session.get('currentSponsor'),eventSlug);
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

Template.extraPointsCell.helpers(***REMOVED***
    extraPoints: function()***REMOVED***
        var self = this;
        var extraPoints = self.extra_points;
        var extra = _.find(extraPoints,function(num)***REMOVED***return num.sponsor==Session.get('currentSponsor')***REMOVED***)
        if(extra)
            return  extra.value

        return 0
***REMOVED***
***REMOVED***);

Template.extraPointsCell.events(***REMOVED***
    'click #plusExtraPointsButton':function(e,t)***REMOVED***
        var self = this
        //Check if sponsor has point
        Meteor.call('getCurrentSponsorInfo',Session.get('currentEvent'),Session.get('currentSponsor'),function(err,data)***REMOVED***
            if(err)
                console.log(err)

            if(data && data.points>0)***REMOVED***
                Meteor.call('removePointsToSponsors',Session.get('currentEvent'),Session.get('currentSponsor'),1)
                Meteor.call("addExtraPointsToTeam",self._id,Session.get('currentSponsor'),1)
    ***REMOVED***
***REMOVED***)

***REMOVED***
    'click #minusExtraPointsButton':function(e,t)***REMOVED***
        var self = this
        //Add points again to sponsor
        Meteor.call('addPointsToSponsors',Session.get('currentEvent'),Session.get('currentSponsor'),1)
        Meteor.call("removeExtraPointsToTeam",self._id,Session.get('currentSponsor'),1)
        // Meteor.call('getCurrentSponsorInfo',Session.get('currentEvent'),Session.get('currentSponsor'),function(err,data)***REMOVED***
        //     if(err)
        //         console.log(err)
        //
        //     if(data && data.points0)***REMOVED***
        //
        // ***REMOVED***
        // ***REMOVED***)
***REMOVED***
***REMOVED***)
