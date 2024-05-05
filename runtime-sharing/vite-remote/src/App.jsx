import { useEffect, useState } from 'react'
import './App.css'

import Button from './components/Button'
import useCount from './store'

function App() {
  const [count, setCount] = useCount()
  const [myWorker, setMyWorker] = useState(null)

  useEffect(() => {
    if (typeof Worker !== 'undefined') {
      // Web Workers are supported.
      const worker = new Worker(new URL('./worker.js', import.meta.url))
      setMyWorker(worker)
      worker.onmessage = (event) => {
        const result = event.data
        console.log('Received result from worker:', result)
      }
    } else {
      // Web Workers are not supported.
      console.log('Web Workers are not supported in this browser.')
    }

    return () => myWorker?.terminate()
  }, [])

  return (
    <div className="App">
      <h1>Remote Application</h1>
      <Button />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>Remote count is {count}</button>
      </div>

      <button onClick={() => myWorker.postMessage(count)}>post messsage to worker</button>
    </div>
  )
}

export default App
