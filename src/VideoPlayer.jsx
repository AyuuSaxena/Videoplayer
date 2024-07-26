/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-contrib-eme';
import 'videojs-contrib-quality-levels';
import 'videojs-contrib-quality-menu';
import '@videojs/http-streaming';
import './App.css'

const VideoPlayer = ({src}) => {

    const getVideoType = (url) => {
        const extension = url.split('.').pop();
        switch (extension) {
            case 'm3u8':
                return 'application/x-mpegURL';
            case 'mpd':
                return 'application/dash+xml';
            case 'mp4':
                return 'video/mp4';
            default:
                return 'video/mp4';
        }
    };

    useEffect(() => {
        const player = videojs("player", {
            muted: false,
            autoplay: false,
            preload: "auto",
            controls: true,
            responsive: true,
            fluid: true,
            plugins: {
                eme: { /* EME configuration */ },
                qualityLevels: {},
                qualityMenu: {},
            }
            });
        player.src({
            src: src,
            type: getVideoType(src),
        });

    }, [src]);

    return (
        <div className='videoPlayer'>
            <video
                id='player'
                className="video-js vjs-default-skin"
                controls
                playsInline
                preload="auto">
            </video>
        </div>
    );
};

export default VideoPlayer;
