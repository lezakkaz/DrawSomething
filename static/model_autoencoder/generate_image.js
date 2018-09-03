var rnn_model;
var rnn_model_data;
var temperature = 0.1;
var use_large_models = true;

var draw_example = function(example, start_x, start_y, line_color) {
  var i;
  var x=start_x, y=start_y;
  var dx, dy;
  var pen_down, pen_up, pen_end;
  var prev_pen = [0, 1, 0];

  for(i=0;i<example.length;i++) {
    // sample the next pen's states from our probability distribution
    [dx, dy, pen_down, pen_up, pen_end] = example[i];

    if (prev_pen[2] == 1) { // end of drawing.
      break;
    }

    // only draw on the paper if the pen is touching the paper
    if (prev_pen[0] == 1) {
      stroke(line_color);
      strokeWeight(1.0);
      line(x, y, x+dx, y+dy); // draw line connecting prev point to current point.
    }

    // update the absolute coordinates from the offsets
    x += dx;
    y += dy;

    // update the previous pen's state to the current one we just sampled
    prev_pen = [pen_down, pen_up, pen_end];
  }

};

var setup = function() {
  if(typeof model_raw_data != 'undefined') {
    var drawing, i, x_position, cnv;
    // make sure we enforce some minimum size of our demo
    var screen_width = 480;
    var screen_height = 320;
    x_pos = 900;
    y_pos = 900;

    createCanvas(screen_width, screen_height);

    function centerCanvas() {
      var x = (windowWidth - width) / 2;
      var y = (windowHeight - height) / 2;
      //cnv.position(x, y);
    }
    centerCanvas();
    // declare sketch_rnn model
    rnn_model_data = JSON.parse(model_raw_data);
    rnn_model = new SketchRNN(rnn_model_data);

    function generate(z, y_start, c) {
      console.log(temperature);
      x_position = 220;
      drawing = rnn_model.decode(z, temperature);
      drawing = rnn_model.scale_drawing(drawing, 90);
      drawing = rnn_model.center_drawing(drawing);
      draw_example(drawing, x_position, y_start, c);
    }

    // create a random drawing.
    // var z_0 = rnn_model.random_latent_vector();
    var z_0 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    generate(z_0, 140, color(220, 0, 0));
    stopLoading();
  }
};

var wordVec;
$.get("https://s3.ap-northeast-2.amazonaws.com/elice-project-drawsomething/word2vec.json", function(data, status){
  wordVec = data;
});

function word2vec(word){
  var idx = wordVec.findIndex((item,idx) => {return item[0] === word});
  console.log(wordVec[idx][1]);
}