const sio = io()

function buttonClicked() {
  alert('Button clicked')
}

sio.on('connected', () => {
  console.log('Client user connected to server')
})

sio.on('disconnected', () => {
  console.log('Client user disconnected from server')
})