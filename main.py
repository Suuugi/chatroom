from flask import Flask, render_template, request
from flask_socketio import SocketIO, emit

app = Flask(__name__)
sio = SocketIO(app)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

if __name__ == '__main__':
  sio.run(app)