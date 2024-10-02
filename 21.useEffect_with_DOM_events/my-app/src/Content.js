import { useEffect, useState } from 'react'

// Side effects

// Events: ADD / remove event listener
// Observer pattern: Subscribe / unsubcribe
// Closure
// Timers: setInterval, setTimeou, clearInterval, clearTimeout
// useState
// Mounted / unmounted
// ===
// Call API

/**
1. Update DOM
    - F8 blog title
2. Call API
3. Listen DOM events
    - Scroll
    - Resize
4. Cleanup
    - Remove listener / Unsubcribe
    - Clear timer
 */

// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào DOM
// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần mỗi khi component mounted
// 3. useEffect(callback, [deps])
// - Callback sẽ được gọi lại mỗi khi des thay đổi

// -----------
// 1. Callback luôn được gọi sau khi component mounted
// 2. Cleanup function luôn được gọi trước khi component unmounted


// const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']

// function Content() {
//     const [title, setTitle] = useState('')
//     const [posts, setPosts] = useState([])
//     const [type, setType] = useState('posts')
//     const [showGoToTop, setShowGoToTop] = useState(false)

//     // console.log(type)

//     useEffect(() => {
//         // console.log('type changed')
//         fetch(`https://jsonplaceholder.typicode.com/${type}`)
//             .then(res => res.json())
//             .then(posts => {
//                 setPosts(posts)
//             })
//     }, [type])

    
//     useEffect(() => {
//         const handleScroll = () => {
//             if(window.scrollY > 200){
//                 setShowGoToTop(true)
//             }else{
//                 setShowGoToTop(false)
//             }
//         }

//         window.addEventListener('scroll', handleScroll)
//         console.log('addEventListener')

//         // Cleanup function
//         return () => {
//             window.removeEventListener('scroll', handleScroll)
//             console.log('removeEventListener')
//         }
//     }, [])

//     return (
//         <div>
//             {tabs.map(tab => (
//                 <button 
//                     key={tab}
//                     style={type === tab ? {
//                         color: '#fff',
//                         backgroundColor: '#333'
//                     } : {}}
//                     onClick={() => setType(tab)}
//                 >
//                     {tab}
//                 </button>
//             ))}
//             <input
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//             <ul>
//                 {posts.map(post => {
//                     return <li key={post.id}>{post.title || post.name}</li>
//                 })}
//             </ul>
//             {showGoToTop && (
//                 <button
//                     style={{
//                         position: 'fixed',
//                         right: 20,
//                         bottom: 20
//                     }}
//                 >
//                     Go to top
//                 </button>
//             )}
//         </div>
//     )
// }



function Content() {
    const [with1, setWith1] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWith1(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return (
        <div>
            <h1>{with1}</h1>
        </div>
    )
}


export default Content