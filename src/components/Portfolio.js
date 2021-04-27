import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { PopupboxContainer, PopupManager } from 'react-popupbox';

import pgen from '../images/PasswordGen.PNG';
import wdash from '../images/wdashboard.PNG';
import dplan from '../images/Dayplanner.PNG';


export const Portfolio = () => {

    const openPopupbox1 = () => {
        const content = (
            <>
        <img src={pgen} alt='PasswordGenerator'/>
        <p>Eiusmod eu mollit minim culpa amet sit enim veniam laborum commodo minim.</p>
        <b>GitHub:</b> <a className='hyper-link' onClick={() => window.open('https://github.com/Seth-Staggs/SethsPasswordGenerator')}
        >https://github.com/Seth-Staggs/SethsPasswordGenerator</a>
        </>
        )
            
        
        
        PopupManager.open({content})
    }

    const popupboxConfig1 = {

    }

    return (
        <div className='portfolio-wrapper'>
            <div className='container'>
                <h1 className='text-uppercase text-center py-5'>portfolio</h1>
                <div className='img-box-wrapper row justify-content-center'>
                    <div className='portfolio-image-box' onClick={openPopupbox1}>
                        <img className='portfolio-image' src={pgen} alt='password generator' />
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus}/>
                    </div>
                    <div className='portfolio-image-box'>
                        <img className='portfolio-image' src={dplan} alt='day planner' />
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus}/>
                    </div>
                    <div className='portfolio-image-box'>
                        <img className='portfolio-image' src={wdash} alt='weather dashboard' />
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus}/>
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfig1}/>
        </div>
    )
}

export default Portfolio;