import React from 'react'
import './App.css'

import Button from './components/Button'
import useCount from './store'
import { HeavyCalcSample } from './HeavyCalcSample'

function App() {
  const [count, setCount] = useCount()

  return (
    <div className="App">
      <h1>Remote Application</h1>
      <Button />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>Remote count is {count}</button>
      </div>

      <HeavyCalcSample />
    </div>
  )
}

export default App
