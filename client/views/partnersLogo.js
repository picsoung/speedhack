Template.partnersLogo.helpers({
    sponsors:function(){
        var events = Events.find({},{fields:{sponsors:1}})
        console.log(events.fetch())
        var sponsors =[]
        events.forEach(function(e){
            if(e.sponsors){
                e.sponsors.forEach(function(s){
                    sponsors[s.name.toLowerCase()]=s
                })
            }
        })

        // turn object into array
        var sponsors_=[]
        for(var index in sponsors) {
            var attr = sponsors[index];
            sponsors_.push(attr)
        }
        return sponsors_
    }
})
