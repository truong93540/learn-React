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
// 3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)


function Content() {
    const [avatar, setAvatar] = useState()

    useEffect(() => {
        return() => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)

        setAvatar(file)
    }

    return (
       <div>
            <input
                type='file'
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt='' width="80%" />
            )}
       </div>
    )
}

export default Content