const sio = io()

const ul = document.getElementById('chatwindow')

sio.on('connected', () => {
  console.log('Client user connected to server')
})

function sendMessage() {
  message = document.getElementById('message').value
  sio.emit('message', message)
}
sio.on('messaged', (message) => {
  var li = document.createElement("li")

  li.appendChild(document.createTextNode(message))
  ul.appendChild(li)

  console.log('Client user received message from server: ', message)
})

sio.on('disconnected', () => {
  console.log('Client user disconnected from server')
})