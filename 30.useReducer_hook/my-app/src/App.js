import { useState, useReducer } from 'react'

// useState
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)

// useReducer
// 1. Init state: 0
// 2. Action: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch

// Init state 
const initState = 0

// Actions
const UP_ACTIONS = 'up'
const DOWN_ACTIONS = 'down'

// Reducer
const reducer = (state, action) => {
  console.log('reducer running...')
  switch(action) {
    case UP_ACTIONS:
      return state + 1
    case DOWN_ACTIONS:
      return state - 1
    default:
      throw new Error('Invalid action')
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initState)

  return (
    <div style={{padding: '0 20px'}}>
        <h1>{count}</h1>
        <button
          onClick={() => dispatch(DOWN_ACTIONS)}
        >
          Down
        </button>
        <button
          onClick={ () => dispatch(UP_ACTIONS) }
        >
          Up
        </button>
    </div>
  )
}

export default App;
