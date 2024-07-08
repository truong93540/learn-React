import { useState } from 'react'

const orders = [100, 200, 300]

function App() {

  // const [counter, setCounter] = useState(() => {
  //   const total = orders.reduce((total, curr) => total + curr)
  //   console.log(total)
  //   return total
  // })

  const [info, setInfo] = useState({
    name: 'Nguyen Van A',
    age: 18,
    address: 'Ha Noi, VN'
  })


  const handleIncrease = () => {
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1) 


    // setCounter(prevState => prevState + 1)
    // setCounter(prevState => prevState + 1)
    // setCounter(prevState => prevState + 1)

    setInfo(prev => {

      // logic

      return {
        ...prev,
        bio: 'Yêu màu hồng ^^'
      }
    })
  }

  return (
    <div className="App">
      {/* <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button> */}

      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleIncrease}>Update</button>
    </div>
  );
}

export default App;
