UI.registerHelper('sponsorsOfEvents',function(eventSlug)***REMOVED***
    var e = Events.findOne(***REMOVED***slug:eventSlug***REMOVED***)
    if(e)***REMOVED***
        return e.sponsors
***REMOVED***
    return []
***REMOVED***)
