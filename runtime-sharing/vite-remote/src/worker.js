onmessage = function (event) {
  const result = event.data
  console.log('Received message from the main thread:', result)
  postMessage(result)
}
