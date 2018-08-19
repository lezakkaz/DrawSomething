var canvas1;
var canvas2;
var canvas3;
var coords1 = [];
var coords2 = [];
var coords3 = [];
var answerList = [];
var mousePressed = false;

tempWordsList = ["Banana","Flamingo","Dog","Elephant","Cat","Tent","Building","Book","Laptop","Car"];

$(document).ready(function() { 
    displayMissionWords();
    $(".reset-canvas").click(
        function() {
            var index = $(".reset-canvas").index(this);
            clearCanvas(index);
        }
    );
    $(function() {
        canvas1 = window._canvas = new fabric.Canvas('drawing-section-1');
        canvas1.backgroundColor = '#ffffff';
        canvas1.isDrawingMode = 1;
        canvas1.freeDrawingBrush.color = "black";
        canvas1.freeDrawingBrush.width = 3;
        canvas1.renderAll();
        //setup listeners 
        canvas1.on('mouse:up', function(e) {
            recordCoordinates(e,1)
            mousePressed = false
        });
        canvas1.on('mouse:down', function(e) {
            mousePressed = true
        });
        canvas1.on('mouse:move', function(e) {
            
        });
    })
    $(function() {
        canvas2 = window._canvas = new fabric.Canvas('drawing-section-2');
        canvas2.backgroundColor = '#ffffff';
        canvas2.isDrawingMode = 1;
        canvas2.freeDrawingBrush.color = "black";
        canvas2.freeDrawingBrush.width = 3;
        canvas2.renderAll();
        //setup listeners 
        canvas2.on('mouse:up', function(e) {
            recordCoordinates(e,2)
            mousePressed = false
        });
        canvas2.on('mouse:down', function(e) {
            mousePressed = true
        });
        canvas2.on('mouse:move', function(e) {
            
        });
    })
    $(function() {
        canvas3 = window._canvas = new fabric.Canvas('drawing-section-3');
        canvas3.backgroundColor = '#ffffff';
        canvas3.isDrawingMode = 1;
        canvas3.freeDrawingBrush.color = "black";
        canvas3.freeDrawingBrush.width = 3;
        canvas3.renderAll();
        //setup listeners 
        canvas3.on('mouse:up', function(e) {
            recordCoordinates(e,3)
            mousePressed = false
        });
        canvas3.on('mouse:down', function(e) {
            mousePressed = true
        });
        canvas3.on('mouse:move', function(e) {
            
        });
    })
});

function recordCoordinates(event, index) {
    var canvasStr = "canvas"+(index);
    var canvasObj = eval("("+canvasStr+")");
    var coordsStr = "coords"+(index);
    var coordsObj = eval("("+coordsStr+")");

    var pointer = canvasObj.getPointer(event.e);
    var posX = pointer.x;
    var posY = pointer.y;

    if (posX >= 0 && posY >= 0 && mousePressed) {
        coordsObj.push(pointer)
    }
    console.log("Coor of " + index + " is ");
    console.log(coordsObj);
}

function clearCanvas(index) {
    var canvasStr = "canvas"+(index+1);
    var canvasObj = eval("("+canvasStr+")");
    var coordsStr = "coords"+(index+1);
    var coordsObj = eval("("+coordsStr+")");
    console.log(coordsObj)
    canvasObj.clear();
    canvasObj.backgroundColor = '#ffffff';
    while(coordsObj.length > 0) {
        coordsObj.pop();
    }
}

function generateRandomNumList() {
    var randomNumList = [];
    while(randomNumList.length != 3) {
        var randomNum = generateRandomNum();
        if(!randomNumList.includes(randomNum)) {
            randomNumList.push(randomNum);
        }
    }
    return randomNumList;
}

function generateRandomNum() {
    return Math.floor((Math.random() * tempWordsList.length) + 0);
}

async function pickMissionWords() {
    var pickedIndex = await generateRandomNumList();
    return [tempWordsList[pickedIndex[0]],tempWordsList[pickedIndex[1]],tempWordsList[pickedIndex[2]]];
}

async function displayMissionWords() {
    var missionWordsWrapper = document.getElementsByClassName("user-mission-text");
    var wordsList = await pickMissionWords();
    answerList = wordsList;
    for(i = 0; i < wordsList.length; i++) {
        missionWordsWrapper[i].textContent = "Draw " + wordsList[i];
    }
}