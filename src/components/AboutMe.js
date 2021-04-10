import React from 'react';

import Profilepic from '../images/mypic.jpg';

const AboutMe = () => {
    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-lg-6 col-xm-12'>
                    <div className='photo-wrap'>
                        <img className='profile-img' src={Profilepic} alt='Profile'/>
                    </div>
                </div>
                <div className='col-lg-6 col-xm-12'>
                    <h1> About me:</h1>
                    <p>Howdy I'm Seth, and I'm a Full-Stack Web Developer. I create responsive websites for phone, tablet, and pc.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
