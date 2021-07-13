import React from "react";
import ReactPlayer from "react-player";

import './VideoHeader.css';

const VideoHeader = (props) => {
    return (
        <div>
            <ReactPlayer
                url="https://player.vimeo.com/video/514429117?title=0&byline=0&portrait=0"
                width="100vw"
                height="100vh"
                playing
                muted
                volume="0.8"
            />
        </div>
    )
}

export default VideoHeader;