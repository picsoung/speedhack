Meteor.methods({
    getCurrentSponsorInfo:function(eventSlug,sponsorSlug){
        var event = Events.findOne({slug:eventSlug,"sponsors.name":sponsorSlug},{fields:{"sponsors.$":1}})
        var sponsor = _.find(event.sponsors,function(num){return num.name ==sponsorSlug})
        console.log(eventSlug, sponsorSlug,sponsor)
        return sponsor
    },
    removePointsToSponsors:function(eventSlug,sponsorSlug,nbPoints){
        Events.update({slug:eventSlug,"sponsors.name":sponsorSlug},{$inc : {"sponsors.$.points" : -nbPoints} })
    },
    addPointsToSponsors:function(eventSlug,sponsorSlug,nbPoints){
        Events.update({slug:eventSlug,"sponsors.name":sponsorSlug},{$inc : {"sponsors.$.points" : nbPoints} })
    }
});
