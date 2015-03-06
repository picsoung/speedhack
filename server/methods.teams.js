Meteor.methods({
    addExtraPointsToTeamName:function(teamName,sponsor,nbPoints){ //FIXME 2 methods does the same thing
        var team = Teams.findOne({name:teamName})
        if(team){
            //Already got extra points by sponsor?
            var sponsorExist = Teams.findOne({$and:[
                {_id:team._id},
                {"extra_points.sponsor":sponsor}
                ]})
            if(sponsorExist){
                console.log(typeof nbPoints);
                Teams.update({_id:sponsorExist._id,"extra_points.sponsor":sponsor},{$inc : {"extra_points.$.value" : parseInt(nbPoints)} },function(err,res){
                    console.log(err,res);
                })
            }else{
                Teams.update({_id:team._id},{$addToSet : {
                    "extra_points" :{
                        sponsor:sponsor,
                        value:nbPoints
                        }
                    }
                })
            }
            return team;
        }else{
            throw new Meteor.Error("team-not-found","Team does not exist");
        }
    },
    addExtraPointsToTeam:function(teamId,sponsor,nbPoints){
        var team = Teams.findOne({_id:teamId})
        if(team){
            console.log(teamId,sponsor,nbPoints)
            //Already got extra points by sponsor?
            var sponsorExist = Teams.findOne({$and:[
                {_id:team._id},
                {"extra_points.sponsor":sponsor}
                ]})
            if(sponsorExist){
                console.log(typeof nbPoints);
                Teams.update({_id:sponsorExist._id,"extra_points.sponsor":sponsor},{$inc : {"extra_points.$.value" : parseInt(nbPoints)} },function(err,res){
                    console.log(err,res);
                })
            }else{
                Teams.update({_id:team._id},{$addToSet : {
                    "extra_points" :{
                        sponsor:sponsor,
                        value:nbPoints
                        }
                    }
                })
            }
            return team;
        }else{
            throw new Meteor.Error("team-not-found","Team does not exist");
        }
    },
    removeExtraPointsToTeam:function(teamId,sponsor,nbPoints){
        var team = Teams.findOne({_id:teamId})
        if(team){
            //Already got extra points by sponsor?
            var sponsorExist = Teams.findOne({$and:[
                {_id:team._id},
                {"extra_points.sponsor":sponsor}
                ]})
            if(sponsorExist){
                Teams.update({_id:sponsorExist._id,"extra_points.sponsor":sponsor},{$inc : {"extra_points.$.value" : -nbPoints} })
            }
            return team;
        }else{
            throw new Meteor.Error("team-not-found","Team does not exist");
        }
    }
})
