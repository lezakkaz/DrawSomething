// Paper.js needs to be downloaded in order to run the code
// TODO:: Setup node.js
paper.install(window);
window.onload = function() {
  paper.setup('drawingTool');

  var tool = new Tool();
  var path;

  tool.onMouseDown = function(event) {
    path = new Path();
    path.strokeColor = 'black';
    path.add(event.point);
  }

  tool.onMouseDrag = function(event) {
    path.add(event.point);
  }
}

function clearDrawing() {
  paper.project.activeLayer.removeChildren();
  paper.view.draw();
}