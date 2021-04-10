import React from 'react';

import Profilepic from '../images/mypic.jpg';

const AboutMe = () => {
    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-lg-6 col-xm-12'>
                    <div className='photo-wrap mb-5'>
                        <img className='profile-img' src={Profilepic} alt='Profile'/>
                    </div>
                </div>
                <div className='col-lg-6 col-xm-12'>
                    <h1 className="aboutme-header"> About me:</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet massa vitae tortor condimentum lacinia quis vel. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Convallis tellus id interdum velit laoreet id donec. Sed tempus urna et pharetra pharetra. Purus semper eget duis at tellus at urna condimentum mattis. Fames ac turpis egestas integer eget aliquet nibh praesent tristique. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Nulla facilisi cras fermentum odio eu feugiat pretium nibh. Ac turpis egestas integer eget. Libero justo laoreet sit amet. Semper eget duis at tellus. Amet cursus sit amet dictum sit. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Non quam lacus suspendisse faucibus. Eget mauris pharetra et ultrices neque ornare.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
