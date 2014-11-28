Template.whereWhen.helpers({
    displayDay:function(date){
        return moment(date).format('LL');
    },
    displayHours:function(date){
        return moment(date).format('hh:mm a')
    }
})
