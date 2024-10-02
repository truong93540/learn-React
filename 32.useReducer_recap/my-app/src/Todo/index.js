import { useReducer, useRef } from 'react'
import reducer, { initState } from './reducer'
import { setJob, addJob, deleteJob } from './actions'
import logger from './logger'

function App() {
  const [state, dispatch] = useReducer(logger(reducer), initState)
  const { job, jobs } = state

  const inputRef = useRef()

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))  

    inputRef.current.focus()
  }

  return (
    <div style={{padding: '0 20px'}}>
        <h1>Todo</h1>
        <input
          ref={inputRef}
          value={job}
          placeholder='Enter todo...'
          onChange={e => {
            // e.target.value
            dispatch(setJob(e.target.value))
          }}
        />
        <button onClick={handleSubmit}>Add</button>
        <ul>
          {jobs.map((job, index) => (
            <li key={index} >
              {job}
              <span onClick={() => dispatch(deleteJob(index))}>
                &times;
              </span>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default App;
