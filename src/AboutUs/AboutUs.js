import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="about-section">
            <div className="about-title">
                <div className="about-big-title">
                    Brooklyn Saints
                </div>
                <div className="about-small-title">
                    Youth Football Organization
                </div>
            </div>
            <div className="our-story">
                Our Story
            </div> 
            <div className="about-text">
                <p>
                    The Brooklyn Saints youth football organization was founded in 2008 by Ernesto Davy and Shon Culbreath in Brooklyn, NY. It is a nonprofit organization for adolescents 7-13 years of age using football as a tool to teach kids how to work together as a group, build character, instill discipline in a structured environment and a safe haven for fun.
                </p>
            </div>
            <div className="button-section">
                <button className="button">read more</button>
            </div> 
            <div className="our-team">
                Our Teams
            </div>
            <div className="league-cards">
                <div className="league-card">
                    <div className="league-card-title">Peewee</div>
                    <div className="league-card-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, fermentum fermentum pellentesque suspendisse sed cursus. Aliquet lectus lobortis scelerisque at scelerisque turpis tincidunt est purus. Mauris amet nulla rhoncus morbi odio ante. Id ullamcorper gravida porttitor neque, cursus tellus ut fermentum integer. Ornare auctor adipiscing sagittis, imperdiet suspendisse vitae sit orci, imperdiet. </p>
                    </div>
                    <div className="button-section">
                        <button className="register-button">register now</button>
                    </div>
                </div>
                <div className="league-card">
                    <div className="league-card-title">JR. Varsity</div>
                    <div className="league-card-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, fermentum fermentum pellentesque suspendisse sed cursus. Aliquet lectus lobortis scelerisque at scelerisque turpis tincidunt est purus. Mauris amet nulla rhoncus morbi odio ante. Id ullamcorper gravida porttitor neque, cursus tellus ut fermentum integer. Ornare auctor adipiscing sagittis, imperdiet suspendisse vitae sit orci, imperdiet. </p>
                    </div>  
                    <div className="button-section">
                        <button className="register-button">register now</button>
                    </div>
                </div>
                <div className="league-card">
                    <div className="league-card-title">Varsity</div>
                    <div className="league-card-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, fermentum fermentum pellentesque suspendisse sed cursus. Aliquet lectus lobortis scelerisque at scelerisque turpis tincidunt est purus. Mauris amet nulla rhoncus morbi odio ante. Id ullamcorper gravida porttitor neque, cursus tellus ut fermentum integer. Ornare auctor adipiscing sagittis, imperdiet suspendisse vitae sit orci, imperdiet. </p>
                    </div>
                    <div className="button-section">
                        <button className="register-button">register now</button>
                    </div>
                </div> 
            </div>          
        </div>
    )

}

export default AboutUs;