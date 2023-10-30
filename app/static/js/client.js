const sio = io()

const ul = document.getElementById('chatwindow')


sio.on('connected', () => {
  console.log('Client user connected to server')
})

function sendMessage() {
  var message = document.getElementById('message').value
  if (message != "") {
    sio.emit('message', message)
  }

  document.getElementById('message').value = ""
}
sio.on('messaged', (message) => {
  var li = document.createElement("li")

  li.appendChild(document.createTextNode(message))
  ul.appendChild(li)

  ul.scrollTop = ul.scrollHeight;

  console.log('Client user received message from server: ', message)
})

sio.on('disconnected', () => {
  console.log('Client user disconnected from server')
})