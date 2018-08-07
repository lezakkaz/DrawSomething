from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/sketch")
def sketch():
    return render_template('sketch.html')

if __name__ == '__main__':
    app.run()