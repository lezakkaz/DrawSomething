var canvas1;
var canvas2;
var canvas3;
var coords1 = [];
var coords2 = [];
var coords3 = [];
var mousePressed = false;

$(document).ready(function() { 
    $(".comming-soon").hover(
        function() {
            $(this).children('.text-wrapper').css('opacity','0.2');
            $(this).append(
                "<div class='comming-soon-message'>Comming Soon...</div>"
            );
            $(".comming-soon-message").fadeIn(200);
        }, function() {
            $(this).children('.text-wrapper').css('opacity','1');
            $(".comming-soon-message").remove();
        }
    );
    $(".select-game").click(
        function() {
            var index = $(".select-game").index(this);
            if(index == 0) {
                window.location.href = 'speed_draw.html';
            } else if(index == 1) {
                window.location.href = 'guess_draw.html';
            }
        }
    );
});

$(function() {
    canvas1 = window._canvas = new fabric.Canvas('drawing-section-1');
    canvas1.backgroundColor = '#ffffff';
    canvas1.isDrawingMode = 1;
    canvas1.freeDrawingBrush.color = "black";
    canvas1.freeDrawingBrush.width = 3;
    canvas1.renderAll();
    //setup listeners 
    canvas1.on('mouse:up', function(e) {
        recordFirstCoor(e)
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
        recordSecondCoor(e)
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
        recordThirdCoor(e)
        mousePressed = false
    });
    canvas3.on('mouse:down', function(e) {
        mousePressed = true
    });
    canvas3.on('mouse:move', function(e) {
        
    });
})

function recordFirstCoor(event) {
    var pointer = canvas1.getPointer(event.e);
    var posX = pointer.x;
    var posY = pointer.y;

    if (posX >= 0 && posY >= 0 && mousePressed) {
        coords1.push(pointer)
    }
    console.log(coords1);
}
function recordSecondCoor(event) {
    var pointer = canvas2.getPointer(event.e);
    var posX = pointer.x;
    var posY = pointer.y;

    if (posX >= 0 && posY >= 0 && mousePressed) {
        coords2.push(pointer)
    }
    console.log(coords2);
}
function recordThirdCoor(event) {
    var pointer = canvas3.getPointer(event.e);
    var posX = pointer.x;
    var posY = pointer.y;

    if (posX >= 0 && posY >= 0 && mousePressed) {
        coords3.push(pointer)
    }
    console.log(coords3);
}

function clearFirstCanvas() {
    canvas1.clear();
    canvas1.backgroundColor = '#ffffff';
    coords1 = [];
}
function clearFirstCanvas() {
    canvas2.clear();
    canvas2.backgroundColor = '#ffffff';
    coords2 = [];
}
function clearFirstCanvas() {
    canvas3.clear();
    canvas3.backgroundColor = '#ffffff';
    coords3 = [];
}