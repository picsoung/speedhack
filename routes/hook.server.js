Router.route('/hook',{
    where:'server'
})
.get(function (req) {
    // GET /webhooks/stripe
    console.log("GET",req)
})
.post(function (req,res) {
    // POST /webhooks/stripe
  console.log(Events.findOne({eventbrite_id:parseInt(req.body.event_id,10)}))
    res.end()
})
.put(function (req) {
    // PUT /webhooks/stripe
    // console.log("PUT",req.body)
    console.log(req.body.event_id)
    console.log(Events.findOne({eventbrite_id:parseInt(req.body.event_id,10)}))
    res.end()
})
