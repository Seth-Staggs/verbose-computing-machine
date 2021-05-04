import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon
} from 'react-share'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <div className='d-flex'>
                            <p>7210 Cascade Ct Apt 815 Fort Worth, TX 76137 </p>
                        </div>
                        <div className='d-flex'>
                            <a href='tel:817-307-9082'>1(817)-307-9082</a>
                        </div>
                        <div className='d-flex'>
                            <p>Sethstaggs2@gmail.com</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-2 col-sm-6'>
                        <div className='row'>
                            <div className='col'>
                                <a className='footer-nav'>Home</a>
                                <br />
                                <a className='footer-nav'>About me</a>
                                <br />
                                <a className='footer-nav'>Services</a>
                            </div>
                            <div className='col'>
                                <a className='footer-nav'>Experience</a>
                                <br />
                                <a className='footer-nav'>Portfolio</a>
                                <br />
                                <a className='footer-nav'>Contacts</a>
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