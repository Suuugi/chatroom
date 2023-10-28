const sio = io()

sio.on('connected', () => {
  console.log('Client user connected to server')
})

function sendMessage() {
  message = document.getElementById('message').value
  sio.emit('message', message)
}
sio.on('messaged', (message) => {
  console.log('Client user received message from server: ', message)
})

sio.on('disconnected', () => {
  console.log('Client user disconnected from server')
})