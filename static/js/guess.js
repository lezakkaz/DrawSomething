var current_stage = 1; // 0~9

$(document).ready(function() {
    $('#user-input').keypress(function(event) {
        if(event.keyCode === 13) {
            console.log($('#user-input').val());
            moveToNextLevel();
        }
    })
    $("#return-home").click(
        function() {
            window.location.href = "../";
        }
    );
})

function moveToNextLevel() {
    if(current_stage === 10) {
        alert("게임이 종료되었습니다.");
        return;
    }
    else {
        setStageStyle();
        temperature += 0.1;
        current_stage += 1;
        setup();
    }
}

function setStageStyle() {
    var stages = document.getElementsByClassName("drawing-level");
    stages[9 - current_stage].style.opacity = "1";
}