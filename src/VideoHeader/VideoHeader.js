import React from "react";
import ReactPlayer from "react-player";

import './VideoHeader.css';

const volume = .2;

class VideoHeader extends React.Component {
    
    render() {
        return (
            <div className="videoHeader-container">
                <ReactPlayer
                    className="video"
                    ref={player => { this.player = player }}
                    url="https://player.vimeo.com/video/514429117?title=0&byline=0&portrait=0?background=1" 
                    muted
                    volume={volume}
                    width="100vw"
                    height="80vh"
                    playing
                    playsinline
                    onReady={() => this.player.seekTo(19)}
                />
                <div className="about-title">
                    <div className="about-big-title">
                        Brooklyn Saints
                    </div>
                    <div className="about-small-title">
                        Youth Football Organization
                    </div>
                </div>
            </div>
        )
    }
}
    

export default VideoHeader;