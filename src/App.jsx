import videojs from 'video.js';
import './App.css'
import VideoPlayer from './VideoPlayer'
import { useEffect, useRef, useState } from 'react'

function App() {
  const [videoUrl, setvideoUrl] = useState("");
  
  const playerRef = useRef(null)

  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoUrl,
        type: "application/x-mpegURL"
      }
    ]
  }
  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
  useEffect(() => {
    console.log(videoUrl);
  }, [videoUrl])
  return (
    <>
      <div>
        <h1>Video player</h1>
        <div className='field'>
          <label htmlFor="">Hls Video Urls : </label>
          <input type="text" value={videoUrl} onChange={(e) => setvideoUrl(e.target.value)} />
        </div>
      </div>
      <VideoPlayer
      options={videoPlayerOptions}
      onReady={handlePlayerReady}
      />
    </>
  )
}

export default App
