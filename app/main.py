from flask import Flask, render_template, request
from flask_socketio import SocketIO, emit

app = Flask(__name__)
sio = SocketIO(app)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@sio.on('connect')
def handle_connect():
   print('Client user connected to server')
   emit('connected', broadcast=True)

@sio.on('message')
def handle_message(message):
   if (message != ""):
      print('Client user sent message to server: ', message)
      emit('messaged', message, broadcast=True)

@sio.on('disconnect')
def handle_disconnect():
   print('Client user disconnected from server')
   emit('disconnected', broadcast=True)

if __name__ == '__main__':
  sio.run(app)