var current_stage = 1; // 0~9
var answer;
var answer_count = 0;
var classList = [
    'ant',
    'antyoga',
    'alarm_clock',
    'ambulance',
    'angel',
    'backpack',
    'barn',
    'basket',
    'bear',
    'bee',
    'beeflower',
    'bicycle',
    'bird',
    'book',
    'brain',
    'bridge',
    'bulldozer',
    'bus',
    'butterfly',
    'cactus',
    'calendar',
    'castle',
    'cat',
    'catbus',
    'catpig',
    'chair',
    'couch',
    'crab',
    'crabchair',
    'crabrabbitfacepig',
    'cruise_ship',
    'diving_board',
    'dog',
    'dogbunny',
    'dolphin',
    'duck',
    'elephant',
    'elephantpig',
    'eye',
    'face',
    'fan',
    'fire_hydrant',
    'firetruck',
    'flamingo',
    'flower',
    'floweryoga',
    'frog',
    'frogsofa',
    'garden',
    'hand',
    'hedgeberry',
    'hedgehog',
    'helicopter',
    'kangaroo',
    'key',
    'lantern',
    'lighthouse',
    'lion',
    'lionsheep',
    'lobster',
    'map',
    'mermaid',
    'monapassport',
    'monkey',
    'mosquito',
    'octopus',
    'owl',
    'paintbrush',
    'palm_tree',
    'parrot',
    'passport',
    'peas',
    'penguin',
    'pig',
    'pigsheep',
    'pineapple',
    'pool',
    'postcard',
    'power_outlet',
    'rabbit',
    'rabbitturtle',
    'radio',
    'radioface',
    'rain',
    'rhinoceros',
    'rifle',
    'roller_coaster',
    'sandwich',
    'scorpion',
    'sea_turtle',
    'sheep',
    'skull',
    'snail',
    'snowflake',
    'speedboat',
    'spider',
    'squirrel',
    'steak',
    'stove',
    'strawberry',
    'swan',
    'swing_set',
    'the_mona_lisa',
    'tiger',
    'toothbrush',
    'toothpaste',
    'tractor',
    'trombone',
    'truck',
    'whale',
    'windmill',
    'yoga',
    'yogabicycle'
];
var stages = document.getElementsByClassName("drawing-level");

$(document).ready(function() {
    $('#user-input').keypress(function(event) {
        if(event.keyCode === 13) {
            let answer_txt = document.getElementById("answer-txt");
            if($('#user-input').val().toLowerCase() === answer) {
                stages[10-current_stage].className += " is-correct";
                answer_txt.textContent = "Great!!";
                answer_count += 1;
                document.getElementById("guess-draw-score").textContent = answer_count;
            }
            else {
                stages[10-current_stage].className += " is-wrong";
                answer_txt.textContent = "It was "+answer+"...";
            }
            moveToNextLevel();
        }
    })
    $("#return-home").click(
        function() {
            window.location.href = "../";
        }
    );
    $("#start-game").click(
        function(){
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
        alert("게임이 종료되었습니다.");
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