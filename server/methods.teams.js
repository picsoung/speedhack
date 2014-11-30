Meteor.methods(***REMOVED***
    addExtraPointsToTeamName:function(teamName,sponsor,nbPoints)***REMOVED*** //FIXME 2 methods does the same thing
        var team = Teams.findOne(***REMOVED***name:teamName***REMOVED***)
        if(team)***REMOVED***
            //Already got extra points by sponsor?
            var sponsorExist = Teams.findOne(***REMOVED***$and:[
                ***REMOVED***_id:team._id***REMOVED***,
                ***REMOVED***"extra_points.sponsor":sponsor***REMOVED***
                ]***REMOVED***)
            if(sponsorExist)***REMOVED***
                console.log(typeof nbPoints);
                Teams.update(***REMOVED***_id:sponsorExist._id,"extra_points.sponsor":sponsor***REMOVED***,***REMOVED***$inc : ***REMOVED***"extra_points.$.value" : parseInt(nbPoints)***REMOVED*** ***REMOVED***,function(err,res)***REMOVED***
                    console.log(err,res);
        ***REMOVED***)
    ***REMOVED***else***REMOVED***
                Teams.update(***REMOVED***_id:team._id***REMOVED***,***REMOVED***$addToSet : ***REMOVED***
                    "extra_points" :***REMOVED***
                        sponsor:sponsor,
                        value:nbPoints
                ***REMOVED***
            ***REMOVED***
        ***REMOVED***)
    ***REMOVED***
            return team;
***REMOVED***else***REMOVED***
            throw new Meteor.Error("team-not-found","Team does not exist");
***REMOVED***
***REMOVED***
    addExtraPointsToTeam:function(teamId,sponsor,nbPoints)***REMOVED***
        var team = Teams.findOne(***REMOVED***_id:teamId***REMOVED***)
        if(team)***REMOVED***
            console.log(teamId,sponsor,nbPoints)
            //Already got extra points by sponsor?
            var sponsorExist = Teams.findOne(***REMOVED***$and:[
                ***REMOVED***_id:team._id***REMOVED***,
                ***REMOVED***"extra_points.sponsor":sponsor***REMOVED***
                ]***REMOVED***)
            if(sponsorExist)***REMOVED***
                console.log(typeof nbPoints);
                Teams.update(***REMOVED***_id:sponsorExist._id,"extra_points.sponsor":sponsor***REMOVED***,***REMOVED***$inc : ***REMOVED***"extra_points.$.value" : parseInt(nbPoints)***REMOVED*** ***REMOVED***,function(err,res)***REMOVED***
                    console.log(err,res);
        ***REMOVED***)
    ***REMOVED***else***REMOVED***
                Teams.update(***REMOVED***_id:team._id***REMOVED***,***REMOVED***$addToSet : ***REMOVED***
                    "extra_points" :***REMOVED***
                        sponsor:sponsor,
                        value:nbPoints
                ***REMOVED***
            ***REMOVED***
        ***REMOVED***)
    ***REMOVED***
            return team;
***REMOVED***else***REMOVED***
            throw new Meteor.Error("team-not-found","Team does not exist");
***REMOVED***
***REMOVED***
    removeExtraPointsToTeam:function(teamId,sponsor,nbPoints)***REMOVED***
        var team = Teams.findOne(***REMOVED***_id:teamId***REMOVED***)
        if(team)***REMOVED***
            //Already got extra points by sponsor?
            var sponsorExist = Teams.findOne(***REMOVED***$and:[
                ***REMOVED***_id:team._id***REMOVED***,
                ***REMOVED***"extra_points.sponsor":sponsor***REMOVED***
                ]***REMOVED***)
            if(sponsorExist)***REMOVED***
                Teams.update(***REMOVED***_id:sponsorExist._id,"extra_points.sponsor":sponsor***REMOVED***,***REMOVED***$inc : ***REMOVED***"extra_points.$.value" : -nbPoints***REMOVED*** ***REMOVED***)
    ***REMOVED***
            return team;
***REMOVED***else***REMOVED***
            throw new Meteor.Error("team-not-found","Team does not exist");
***REMOVED***
***REMOVED***
***REMOVED***)
