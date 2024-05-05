import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from 'remote/Button'
import useCount from 'remote/store'

function App() {
  const [count, setCount] = useCount()

  return (
    <>
      <h1>Host Application</h1>
      <Button />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>host count is {count}</button>
      </div>
    </>
  )
}

export default App
