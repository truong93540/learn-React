import { useState, useCallback, memo } from 'react'
import Content from './Content'

// 1. memo() -> Higher Order Component (HOC)
// 2. useCallback()
  // - Reference type
  // - React memo

function App() {
  const [count, setCount] = useState(0)

  const handleIncrease = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])


  return (
    <div style={{ padding: '10px 32px' }}>
      <Content onIcrease={handleIncrease} ></Content>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
