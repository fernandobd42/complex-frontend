'use client'

import { useCount } from '@repo/store/useCount'

export const CountButton = () => {
  const [state, setState] = useCount()

  return (
    <button className="shared-btn" onClick={() => setState((s) => s + 1)}>
      Shared Count Button {state}
    </button>
  )
}
