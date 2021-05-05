/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon
} from 'react-share';
import { Link } from 'react-scroll';

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        
                        <div className='d-flex'>
                            <a href="tel:+1-817-307-9082">817-307-9082</a>
                        </div>
                        <div className='d-flex'>
                            <p>Sethstaggs2@gmail.com</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-2 col-sm-6'>
                        <div className='row'>
                            <div className='col'>
                                <Link smooth={true} to='home' offset={-110} className='footer-nav'>Home</Link>
                                <br />
                                <Link smooth={true} to='about' offset={-110} className='footer-nav'>About me</Link>
                                <br />
                                <Link smooth={true} to='services' offset={-110} className='footer-nav'>Services</Link>
                            </div>
                            <div className='col'>
                                <Link smooth={true} to='experience' offset={-110} className='footer-nav'>Experience</Link>
                                <br />
                                {/* <a className='footer-nav'>Portfolio</a> */}
                                <br />
                                <Link smooth={true} to='contacts' offset={-110} className='footer-nav'>Contact Me</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-5 col-sm-6 align-items-center'>
                        <div className='d-flex justify-content-center'>
                            <FacebookShareButton
                                url={"https://www.facebook.com/profile.php?id=100009619117011"}
                                quote={'Full Stack Developer'}
                                hashtag='#javascript'>

                                <FacebookIcon className='mx-3' size={36} />
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={"https://www.facebook.com/profile.php?id=100009619117011"}
                                quote={'Full Stack Developer'}
                                hashtag='#javascript'>

                                <TwitterIcon className='mx-3' size={36} />
                            </TwitterShareButton>
                            <LinkedinShareButton
                                url={"https://www.facebook.com/profile.php?id=100009619117011"}
                                quote={'Full Stack Developer'}
                                hashtag='#javascript'>

                                <LinkedinIcon className='mx-3' size={36} />
                            </LinkedinShareButton>
                        </div>
                        <p className='pt-3 text-center'>
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Staggs Design | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer