from flask import Flask, render_template, request
from flask_socketio import SocketIO, emit

app = Flask(__name__)
sio = SocketIO(app)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@sio.on('connect')
def handle_connect():
   print('User connected to server')
   emit('connected', broadcast=True)

@sio.on('disconnect')
def handle_disconnect():
   print('User disconnected from server')
   emit('disconnected', broadcast=True)

if __name__ == '__main__':
  sio.run(app)