var current_stage = 1; // 0~9
var answer;
var answer_count = 0;
var stages = document.getElementsByClassName("drawing-level");

$(document).ready(function() {
    $('#user-input').keypress(function(event) {
        if(event.keyCode === 13) {
            let answer_txt = document.getElementById("answer-txt");
            let last_answer_txt = document.getElementById("last-answer-txt");
            
            if($('#user-input').val().toLowerCase() === answer) {
                stages[10-current_stage].className += " is-correct";
                answer_txt.textContent = "Great!!";
                last_answer_txt.textContent = "Great!!";
                answer_count += 1;
                document.getElementById("guess-draw-score").textContent = answer_count;
            }
            else {
                stages[10-current_stage].className += " is-wrong";
                answer_txt.textContent = "It was "+answer+"...";
                last_answer_txt.textContent = "It was "+answer+"...";
            }
            moveToNextLevel();
        }
    })
    $("#start-game").click(
        function(){
            let start_button = document.getElementById("start-game");
            if(start_button.textContent == "R E T R Y"){
                // need refesh -> initialize
                location.reload();
            }
            $(".confirm-wrapper").hide();
            generateSelectedDrawing();
        }
    )
})

function moveToNextLevel() {
    document.getElementById("user-input").value = "";
    var user_input = document.getElementById("user-input");
    user_input.setAttribute("placeholder", "");
    if(current_stage === 10) {
        let answer_count_txt = document.getElementById("answer-count-txt");
        answer_count_txt.innerHTML = answer_count + " / 10";
        let start_button = document.getElementById("start-game");
        start_button.textContent = "R E T R Y";
        $(".confirm-wrapper").show();
        return;
    }
    else {
        temperature += 0.1;
        current_stage += 1;
        generateSelectedDrawing();
    }
}

function setStageStyle() {
    stages[10 - current_stage].style.opacity = "1";
}

function generateRandomNum() {
    return Math.floor((Math.random() * classList.length) + 0);
}

function generateSelectedDrawing() {
    var pickedIndex = generateRandomNum();
    classList.splice(pickedIndex,1);
    answer = classList[pickedIndex].replace("_"," ");
    getRawData(classList[pickedIndex]);
}

function setHintPlaceholder(className) {
    var user_input = document.getElementById("user-input");
    user_input.setAttribute("placeholder", className[0]);
}