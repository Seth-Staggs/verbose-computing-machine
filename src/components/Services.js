import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFileCode, faDesktop } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div className='services'>
            <h1 className='py-5'>My Services</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='box'>
                            <div className='circle'>
                                <FontAwesomeIcon className='service-icon'icon={faDesktop} size='2x' />
                            </div>
                            <h3>Web Design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae.</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='box'>
                            <div className='circle'>
                                <FontAwesomeIcon className='service-icon'icon={faFileCode} size='2x' />
                            </div>
                            <h3>Web Development</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae.</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='box'>
                            <div className='circle'>
                                <FontAwesomeIcon className='service-icon'icon={faFacebookF} size='2x' />
                            </div>
                            <h3>SMM</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae.</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='box'>
                            <div className='circle'>
                                <FontAwesomeIcon className='service-icon'icon={faGoogle} size='2x' />
                            </div>
                            <h3>Google Ads</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services;
