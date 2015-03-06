UI.registerHelper('sponsorsOfEvents',function(eventSlug){
    var e = Events.findOne({slug:eventSlug})
    if(e){
        return e.sponsors
    }
    return []
})
