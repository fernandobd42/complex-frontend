import './index.css'
import useCount from './../../store'

export const Button = () => {
  const [state, setState] = useCount()
  return (
    <div>
      <button className="shared-btn" onClick={() => setState((s) => s + 1)}>
        remote button click me: {state}
      </button>
    </div>
  )
}

export default Button
