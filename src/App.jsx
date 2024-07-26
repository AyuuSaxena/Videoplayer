import VideoPlayer from './VideoPlayer';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

    const [url, seturl] = useState("");

    useEffect(() => {
        
    }, [url])

    return (
        <div className="App">
            <h2>HLS Player</h2>
            <div className='field'>
                <label htmlFor="">Enter Url : </label>
                <input type="text" id="url" value={url} onChange={(e)=> seturl(e.target.value)}/>
            </div>
            <VideoPlayer src={url} />
        </div>
    );
}

export default App;
