$(document).ready(function() {
    $('#user-input').keypress(function(event) {
        if(event.keyCode === 13) {
            console.log($('#user-input').val());
        }
    })
})