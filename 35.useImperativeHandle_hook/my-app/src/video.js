import { forwardRef, useImperativeHandle, useRef } from 'react'
import videotiktok from './video/videotiktok.mp4'

function Video(props, ref) {
    const viedeoRef = useRef()

    useImperativeHandle(ref, () => ({
        play() {
            viedeoRef.current.play()
        },
        pause() {
            viedeoRef.current.pause()
        },
    }))

    return (
        <video 
            src={videotiktok}
            width={280}
            ref={ref}
        />
    )
}

export default forwardRef(Video)