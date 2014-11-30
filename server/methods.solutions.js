Meteor.methods(***REMOVED***
    addExtraPointToSolution:function(solutionId,nbPoints)***REMOVED***
        Solutions.update(***REMOVED***_id:solutionId***REMOVED***,***REMOVED***$inc:***REMOVED***extra_points:nbPoints***REMOVED******REMOVED***)
***REMOVED***
    removeExtraPointFromSolution:function(solutionId,nbPoints)***REMOVED***
        Solutions.update(***REMOVED***_id:solutionId***REMOVED***,***REMOVED***$inc:***REMOVED***extra_points: -nbPoints***REMOVED******REMOVED***)
***REMOVED***
***REMOVED***)
