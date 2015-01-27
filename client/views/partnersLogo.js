Template.partnersLogo.helpers(***REMOVED***
    sponsors:function()***REMOVED***
        var events = Events.find(***REMOVED******REMOVED***,***REMOVED***fields:***REMOVED***sponsors:1***REMOVED******REMOVED***)
        var sponsors =[]
        events.forEach(function(e)***REMOVED***
            if(e.sponsors)***REMOVED***
                e.sponsors.forEach(function(s)***REMOVED***
                    sponsors[URLify2(s.name)]=s
        ***REMOVED***)
    ***REMOVED***
***REMOVED***)

        // turn object into array
        var sponsors_=[]
        for(var index in sponsors) ***REMOVED***
            var attr = sponsors[index];
            sponsors_.push(attr)
***REMOVED***
        return sponsors_
***REMOVED***
***REMOVED***)
