import React from 'react'
import ReactDOM from 'react-dom/client'
import ButtonModule from 'remote/Button'
import useCount from 'remote/store'
const Button = ButtonModule.default

import './index.css'

const App = () => {
  const [count, setCount] = useCount()

  return (
    <div className="container">
      <div>Name: wp-host</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Empty CSS</div>
      <Button />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>host count is {count}</button>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
