import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

import logo from '../images/logo.png';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img className='logo' src={logo} alt='logo...' /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#f8f8ff"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link smooth={true} to='home'className="nav-link" aria-current="page" href="#">Home <span className='sr-only'>(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to='about' offset={-110} className="nav-link" href="#">about me</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to='services' offset={-110} className="nav-link" href="#">services</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to='experience' offset={-110} className="nav-link" href="#">experience</Link>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">portfolio</a>
                        </li> */}
                        <li className="nav-item">
                            <Link smooth={true} to='contacts' offset={-110} className="nav-link" href="#">Contact me</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
