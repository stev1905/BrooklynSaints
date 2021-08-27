import React from "react";
import EventCarousel from "./EventCarousel";
import './Events.css';

const Events = () => {

    return  (
        <div className="events-section">
            <div className="events-header">
                Upcoming Events
            </div>
            <EventCarousel />
            <div className="events-footer">
                <div className="events-footer-style-one">
                    It's takes a village!
                </div>        
                <div className="events-footer-style-two">
                    Support the<span className="events-footer-style-details"> Brooklyn Saints</span>
                </div>   
            </div>
        </div>
    )

}

export default Events;