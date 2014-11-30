Meteor.methods(***REMOVED***
    getCurrentSponsorInfo:function(eventSlug,sponsorSlug)***REMOVED***
        var event = Events.findOne(***REMOVED***slug:eventSlug,"sponsors.name":sponsorSlug***REMOVED***,***REMOVED***fields:***REMOVED***"sponsors.$":1***REMOVED******REMOVED***)
        var sponsor = _.find(event.sponsors,function(num)***REMOVED***return num.name ==sponsorSlug***REMOVED***)
        console.log(eventSlug, sponsorSlug,sponsor)
        return sponsor
***REMOVED***
    removePointsToSponsors:function(eventSlug,sponsorSlug,nbPoints)***REMOVED***
        Events.update(***REMOVED***slug:eventSlug,"sponsors.name":sponsorSlug***REMOVED***,***REMOVED***$inc : ***REMOVED***"sponsors.$.points" : -nbPoints***REMOVED*** ***REMOVED***)
***REMOVED***
    addPointsToSponsors:function(eventSlug,sponsorSlug,nbPoints)***REMOVED***
        Events.update(***REMOVED***slug:eventSlug,"sponsors.name":sponsorSlug***REMOVED***,***REMOVED***$inc : ***REMOVED***"sponsors.$.points" : nbPoints***REMOVED*** ***REMOVED***)
***REMOVED***
***REMOVED***);
