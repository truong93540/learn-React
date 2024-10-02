import { useRef, useEffect } from 'react'
import Video from './video';

function App() {
  const videoRef = useRef()

  useEffect(() => {
    console.log(videoRef.current)
  })

  const handlePlay = () => {
    videoRef.current.play()
  }

  const handlePause = () => {
    videoRef.current.pause()
  }

  return (
    <div>
      <Video ref={videoRef} ></Video>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default App;
