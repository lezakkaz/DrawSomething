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
    $(".reset-canvas").click(
        function() {
            var index = $(".reset-canvas").index(this);
            clearCanvas(index);
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