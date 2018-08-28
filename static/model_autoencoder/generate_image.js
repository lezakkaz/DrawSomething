var rnn_model;
var rnn_model_data;
var screen_width;
var screen_height;

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
  
  var drawing, i, temperature, x_position, cnv;

  // make sure we enforce some minimum size of our demo
  screen_width = 480;
  screen_height = 320;
  x_pos = 900;
  y_pos = 900;

  cnv = createCanvas(screen_width, screen_height, SVG);

  function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    //cnv.position(x, y);
  }
  centerCanvas();
  // declare sketch_rnn model
  var rnn_model_data = JSON.parse(model_raw_data);
  rnn_model = new SketchRNN(rnn_model_data);

  function generate(z, y_start, c,temperature = 0.1) {
    x_position = 120;
    drawing = rnn_model.decode(z, temperature);
    drawing = rnn_model.scale_drawing(drawing, 90);
    drawing = rnn_model.center_drawing(drawing);
    draw_example(drawing, x_position, y_start, c);
  }

  // create a random drawing.
  var z_0 = rnn_model.random_latent_vector();
  generate(z_0, 120, color(220, 0, 0));

};
