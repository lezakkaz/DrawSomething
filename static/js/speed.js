var canvas1;
var canvas2;
var canvas3;
var coords1 = [];
var coords2 = [];
var coords3 = [];
var answerList = [];
var classNames = [];
var mousePressed = false;

$(document).ready(function() { 
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
            getFrame();
            mousePressed = false
        });
        canvas1.on('mouse:down', function(e) {
            mousePressed = true
        });
        canvas1.on('mouse:move', function(e) {
            recordCoordinates(e,1)
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
            
            mousePressed = false
        });
        canvas2.on('mouse:down', function(e) {
            mousePressed = true
        });
        canvas2.on('mouse:move', function(e) {
            recordCoordinates(e,2)
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
            
            mousePressed = false
        });
        canvas3.on('mouse:down', function(e) {
            mousePressed = true
        });
        canvas3.on('mouse:move', function(e) {
            recordCoordinates(e,3)
        });
    })
});

async function start() {
    
    //load the model 
    model = await tf.loadModel('../static/model_cnn/model.json');
    
    //warm up 
    model.predict(tf.zeros([1, 28, 28, 1]));
    
    //load the class names
    await loadDict();
}

async function loadDict() {
    loc = '../static/model_cnn/class_names.txt'
    await $.ajax({
        url: loc,
        dataType: 'text',
    }).done(success);
}

function success(data) {
    const lst = data.split(/\n/);
    for (var i = 0; i < lst.length - 1; i++) {
        let symbol = lst[i];
        classNames[i] = symbol;
    }
    displayMissionWords();
}

function getFrame() {
    //make sure we have at least two recorded coordinates 
    if (coords1.length >= 2) {

        //get the image data from the canvas 
        const imgData = getImageData();

        //get the prediction 
        const pred = model.predict(preprocess(imgData)).dataSync();

        //find the top 5 predictions 
        const indices = findIndicesOfMax(pred, 5);
        const probs = findTopValues(pred, 5);
        const names = getClassNames(indices);

        //set the table ccccccccccccc
        // setTable(names, probs);
        console.log(names,probs);
    }
}

function getImageData() {
    //get the minimum bounding box around the drawing 
    const mbb = getMinBox()

    //get image data according to dpi 
    const dpi = window.devicePixelRatio
    const imgData = canvas1.contextContainer.getImageData(mbb.min.x * dpi, mbb.min.y * dpi,
                                                  (mbb.max.x - mbb.min.x) * dpi, (mbb.max.y - mbb.min.y) * dpi);
    return imgData
}

function preprocess(imgData) {
    return tf.tidy(() => {
        //convert to a tensor 
        let tensor = tf.fromPixels(imgData, numChannels = 1)
        
        //resize 
        const resized = tf.image.resizeBilinear(tensor, [28, 28]).toFloat()
        
        //normalize 
        const offset = tf.scalar(255.0);
        const normalized = tf.scalar(1.0).sub(resized.div(offset));

        //We add a dimension to get a batch shape 
        const batched = normalized.expandDims(0)
        return batched
    })
}

function findIndicesOfMax(inp, count) {
    var outp = [];
    for (var i = 0; i < inp.length; i++) {
        outp.push(i); // add index to output array
        if (outp.length > count) {
            outp.sort(function(a, b) {
                return inp[b] - inp[a];
            }); // descending sort the output array
            outp.pop(); // remove the last index (index of smallest element in output array)
        }
    }
    return outp;
}

function findTopValues(inp, count) {
    var outp = [];
    let indices = findIndicesOfMax(inp, count)
    // show 5 greatest scores
    for (var i = 0; i < indices.length; i++)
        outp[i] = inp[indices[i]]
    return outp
}

function getClassNames(indices) {
    var outp = []
    for (var i = 0; i < indices.length; i++)
        outp[i] = classNames[indices[i]]
    return outp
}

function getMinBox() {
    //get coordinates 
    var coorX = coords1.map(function(p) {
        return p.x
    });
    var coorY = coords1.map(function(p) {
        return p.y
    });

    //find top left and bottom right corners 
    var min_coords = {
        x: Math.min.apply(null, coorX),
        y: Math.min.apply(null, coorY)
    }
    var max_coords = {
        x: Math.max.apply(null, coorX),
        y: Math.max.apply(null, coorY)
    }

    //return as strucut 
    return {
        min: min_coords,
        max: max_coords
    }
}

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
    // console.log("Coor of " + index + " is ");
    // console.log(coordsObj);
}

function clearCanvas(index) {
    var canvasStr = "canvas"+(index+1);
    var canvasObj = eval("("+canvasStr+")");
    var coordsStr = "coords"+(index+1);
    var coordsObj = eval("("+coordsStr+")");
    // console.log(coordsObj)
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
    return Math.floor((Math.random() * classNames.length) + 0);
}

async function pickMissionWords() {
    var pickedIndex = await generateRandomNumList();
    return [classNames[pickedIndex[0]],classNames[pickedIndex[1]],classNames[pickedIndex[2]]];
}

async function displayMissionWords() {
    var missionWordsWrapper = document.getElementsByClassName("user-mission-text");
    var wordsList = await pickMissionWords();
    answerList = wordsList;
    console.log(answerList);
    for(i = 0; i < wordsList.length; i++) {
        missionWordsWrapper[i].textContent = "Draw " + wordsList[i];
    }
}

start();