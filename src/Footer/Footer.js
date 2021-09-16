import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="overlay"></div>
            <div className="footer-container">
            </div>
            <div className="subfooter">
                <div className="subfooter-container">
                <div className="address">
                    <address>
                        <p>700 Euclid Ave. Brooklyn, NY</p>
                        <p><a href="tel:+13477622199">347-762-2199</a></p>  
                        <p><a href="mailto:bksaints@gmail.com<">bksaints@gmail.com</a></p>
                    </address>
                </div>
                <div className="footer-nav">
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT US</li>
                        <li>CALENDAR</li>
                        <li>REGISTER</li>
                        <li>SUPPORT</li>
                        <li>CONTACT</li>
                    </ul>
                </div>

                </div>
                <hr></hr>
                <div className="footer-seal">
                    <div className="site-author">
                    Copyright © Brookyln Saints Youth Organization | Designed by EMPIRE DIGITAL
                    </div>
                    <div className="social-media-links">
                        <i className="fa fa-facebook-f"></i>
                        <i className="fa fa-instagram"></i>
                        <i className="fa fa-youtube"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer