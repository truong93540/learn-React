import { useState } from 'react'

// Lưu ý
// 1. Array
// 2. Reference types

// Ví dụ
// 1. Random gift
// 2. Two-way Binding // dàng buộc 2 chiều
// 3. Todolist


// Response from API
const course = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'Javascript'
  },
  {
    id: 3,
    name: 'ReactJS'
  }
]

const gifts = [
  'CPU i9',
  'RAM 32GB RGB',
  'RGB Keyboard'
]

function App() {
  // const [gift, setGift] = useState()

  // const randomGift = () => {
  //   const index = Math.floor(Math.random() * gifts.length)
  //   setGift(gifts[index])
  // }

  // return (
  //   <div className="App" style={{padding: 32}}>
  //     <h1>{gift || 'Chưa có phần thưởng'}</h1>
  //     <button onClick={randomGift}>Lấy thưởng</button>
  //   </div>
  // );



  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')

  // const handleSubmit = () => {
  //   // CALL API
  //   console.log({
  //     name,
  //     email
  //   })
  // }

  // console.log(name)
//   return (
//     <div className="App" style={{padding: 32}}>
//       <input 
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <input
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//       />
//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   );



  // const [checked, setChecked] = useState()
  // const handleSubmit = () => {
  //     // Call API
  //     console.log({id: checked})
  // }

  // return (
  //   <div style={{ padding: 32}}>
  //     {course.map(course => (
  //       <div key={course.id}>
  //         <input 
  //           type='radio'
  //           checked={checked === course.id}
  //           onChange={() => setChecked(course.id)}
  //         />
  //         {course.name}
  //       </div>
  //     ))}

  //     <button onClick={handleSubmit}>Register</button>
  //   </div>
  // )



  const [checked, setChecked] = useState([])

  const handleCheck = (id) => {
      setChecked(prev => {
        const isChecked = checked.includes(id)
        if(isChecked){
          return checked.filter(item => item !== id)
        } else {
          return [...prev, id]
        }
      })
  }

  const handleSubmit = () => {
    // Call API
    console.log({ id: checked })
}

  return (
    <div style={{ padding: 32}}>
      {course.map(course => (
        <div key={course.id}>
          <input 
            type='checkbox'
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}

      <button onClick={handleSubmit}>Register</button>
    </div>
  )
}

export default App;

