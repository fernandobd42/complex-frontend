import React, { useState } from 'react'

export const HeavyCalcSample = () => {
  const [heavyCalcValue, setHeavyCalcValue] = useState('')
  const [workerMessage, setWorkerMessage] = useState('')

  const runWorker = () => {
    setWorkerMessage('worker calculation started')
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(new URL('./worker.js', import.meta.url))
      worker.postMessage('run')
      worker.onmessage = (event) => {
        setWorkerMessage(event.data)
        worker.terminate()
      }
    }
  }

  return (
    <>
      <button
        onClick={() => {
          setHeavyCalcValue('start main theread calculation')
          let count = 0
          for (let i = 0; i < 5000000000; i++) {
            count += 1
          }
          setHeavyCalcValue(`main theread calculation finished: ${count}`)
        }}
      >
        Run heavy calculation in the main theread
      </button>
      <p>{heavyCalcValue}</p>

      <button onClick={runWorker}>Run worker</button>
      <p>{workerMessage}</p>
    </>
  )
}
