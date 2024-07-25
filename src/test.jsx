import ReactPlayer from 'react-player';

const App = () => (
    <div>
        <h1>React Player</h1>
        <ReactPlayer url="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8" controls />
    </div>
);

export default App;
