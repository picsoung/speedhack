Template.home.events({
  'click a':function(e,t){
    Modal.show(e.currentTarget.hash.replace('#',''))
  }
})
