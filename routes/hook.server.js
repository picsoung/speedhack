Router.route('/hook',***REMOVED***
    where:'server'
***REMOVED***)
.get(function (req) ***REMOVED***
    // GET /webhooks/stripe
    console.log("GET",req)
***REMOVED***)
.post(function (req,res) ***REMOVED***
    // POST /webhooks/stripe
  console.log(Events.findOne(***REMOVED***eventbrite_id:parseInt(req.body.event_id,10)***REMOVED***))
    res.end()
***REMOVED***)
.put(function (req) ***REMOVED***
    // PUT /webhooks/stripe
    // console.log("PUT",req.body)
    console.log(req.body.event_id)
    console.log(Events.findOne(***REMOVED***eventbrite_id:parseInt(req.body.event_id,10)***REMOVED***))
    res.end()
***REMOVED***)
