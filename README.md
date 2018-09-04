# DrawSomething


## Installation

## Download Paper.js
  #### 0. Download required file 
    - paperjs-v0.11.5.zip : http://paperjs.org/download/
  #### 1. Copy the file
    - Copy "paper-core.js" from "paperjs-v0.11.5/dist/"
    - Paste the file into our project "static/js/"

## Download Fabric.js
  #### 0. Download required file
    - fabricjs : https://cdnjs.cloudflare.com/ajax/libs/fabric.js/2.3.4/fabric.min.js
    - right click and download as fabric.js
  #### 1. Copy the file
    - Copy and Paste the file into our project "static/js/"

## Download Magenta
  #### 0. Download required file
    - magenta : https://github.com/tensorflow/magenta-demos
    - clone or download zip
  #### 1. Copy the file
    - Copy the sketch-rnn-js/lib/(p5.js, p5.svg.js, sketch_rnn.js)
    - Create lib folder into our project "static/model_autoencoder"
    - Paste files into our project "static/model_autoencoder/lib/"
    
## Windows
  #### 0. Clone Project
    - $ git clone https://github.com/lezakkaz/DrawSomething.git

  #### 1. Install python3.6v
    - python3.6v : https://www.python.org/downloads/

  #### 2. Create virtual environments
    - $ python -m venv ./
    
  #### 3. Activate virtual environments
    In cmd
    - $ cd Scripts
    - $ activate.bat
    - $ cd ..

    In git bash
    - $ source ./Scripts/activate

  #### 4. Install requirements modules
    - $ pip install -r requirements.txt

  #### 5. Run the app
    - $ python routes.py

## Mac OS / Linux
  #### 0. Clone Project
    - $ git clone https://github.com/lezakkaz/DrawSomething.git
    - $ cd DrawSomething

  #### 1. Install python3.6v
    - python3.6v : https://www.python.org/downloads/

  #### 2. Create virtual environments
    - $ python3 -m venv ./

  #### 3. Activate virtual environments
    - $ source ./bin/activate

  #### 4. Install requirements modules
    - $ pip3 install -r requirements.txt

  #### 5. Run the app
    - $ python3 routes.py
    
## ROUTE LIST
  * #### index.html - /
    * ##### Just Canvas(?)
    
  * #### sketch.html - /sketch
    * ##### Sketcher Example ( Just CNN Model )

  * #### /auto
    * ##### Generate Images
