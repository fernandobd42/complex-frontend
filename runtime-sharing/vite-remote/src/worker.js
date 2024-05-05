onmessage = (event) => {
  if (event.data === 'run') {
    let count = 0
    for (let i = 0; i < 5000000000; i++) {
      count += 1
    }
    postMessage(`worker calculation finished: ${count}`)
  }
}
