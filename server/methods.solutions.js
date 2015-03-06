Meteor.methods({
    addExtraPointToSolution:function(solutionId,nbPoints){
        Solutions.update({_id:solutionId},{$inc:{extra_points:nbPoints}})
    },
    removeExtraPointFromSolution:function(solutionId,nbPoints){
        Solutions.update({_id:solutionId},{$inc:{extra_points: -nbPoints}})
    }
})
