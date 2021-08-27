import React from "react";
import ReactPlayer from "react-player";

import './VideoHeader.css';

class VideoHeader extends React.Component {
    
    render() {
        return (
            <div>
                <ReactPlayer
                    ref={player => { this.player = player }}
                    url="https://player.vimeo.com/video/514429117?title=0&byline=0&portrait=0"
                    width="100vw"
                    height="80vh"
                    muted
                    playing
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