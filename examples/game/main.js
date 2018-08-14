var canvas;
var canvas;
var coords = [];
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
    canvas = window._canvas = new fabric.Canvas('drawing-section-1');
    canvas.backgroundColor = '#ffffff';
    canvas.isDrawingMode = 1;
    canvas.freeDrawingBrush.color = "black";
    canvas.freeDrawingBrush.width = 3;
    canvas.renderAll();
    //setup listeners 
    canvas.on('mouse:up', function(e) {
        recordFirstCoor(e)
        mousePressed = false
    });
    canvas.on('mouse:down', function(e) {
        mousePressed = true
    });
    canvas.on('mouse:move', function(e) {
        
    });
})
$(function() {
    canvas = window._canvas = new fabric.Canvas('drawing-section-2');
    canvas.backgroundColor = '#ffffff';
    canvas.isDrawingMode = 1;
    canvas.freeDrawingBrush.color = "black";
    canvas.freeDrawingBrush.width = 3;
    canvas.renderAll();
    //setup listeners 
    canvas.on('mouse:up', function(e) {
        recordSecondCoor(e)
        mousePressed = false
    });
    canvas.on('mouse:down', function(e) {
        mousePressed = true
    });
    canvas.on('mouse:move', function(e) {
        
    });
})
$(function() {
    canvas = window._canvas = new fabric.Canvas('drawing-section-3');
    canvas.backgroundColor = '#ffffff';
    canvas.isDrawingMode = 1;
    canvas.freeDrawingBrush.color = "black";
    canvas.freeDrawingBrush.width = 3;
    canvas.renderAll();
    //setup listeners 
    canvas.on('mouse:up', function(e) {
        recordThirdCoor(e)
        mousePressed = false
    });
    canvas.on('mouse:down', function(e) {
        mousePressed = true
    });
    canvas.on('mouse:move', function(e) {
        
    });
})

function recordFirstCoor(event) {
    var pointer = canvas.getPointer(event.e);
    var posX = pointer.x;
    var posY = pointer.y;

    if (posX >= 0 && posY >= 0 && mousePressed) {
        coords.push(pointer)
    }
    console.log(coords);
}
function recordSecondCoor(event) {
    var pointer = canvas.getPointer(event.e);
    var posX = pointer.x;
    var posY = pointer.y;

    if (posX >= 0 && posY >= 0 && mousePressed) {
        coords.push(pointer)
    }
    console.log(coords);
}
function recordThirdCoor(event) {
    var pointer = canvas.getPointer(event.e);
    var posX = pointer.x;
    var posY = pointer.y;

    if (posX >= 0 && posY >= 0 && mousePressed) {
        coords.push(pointer)
    }
    console.log(coords);
}