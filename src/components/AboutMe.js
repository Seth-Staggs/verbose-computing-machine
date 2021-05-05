import React from 'react';

import Profilepic from '../images/mypic.jpg';

const AboutMe = () => {
    return (
        <div id='about' className='container py-5'>
            <div className='row'>
                <div className='col-lg-6 col-xm-12'>
                    <div className='photo-wrap mb-5'>
                        <img className='profile-img' src={Profilepic} alt='Profile'/>
                    </div>
                </div>
                <div className='col-lg-6 col-xm-12'>
                    <h1 className="aboutme-header"> About me:</h1>
                    <p>Howdy, I'm Seth. I'm a full stack web developer operating out of the Dallas/Fort Worth Metroplex. I recently graduated from Southern Methodist University's 
                        full stack certificate program and am eager to get my feet wet in the industry. If you have any questions or project requests, feel free to contact me through the form below.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
