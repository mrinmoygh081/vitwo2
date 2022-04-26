import React, { useEffect } from 'react';
import logo from '../assets/images/vitwo-logo.png';
import { Link } from 'react-router-dom'

const Header = () => {

    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });


    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
        const nav = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? nav.classList.add('is-sticky') : nav.classList.remove('is-sticky');
    };
    return (
        <>
            <header className="">
                <div className="header">
                    <div className="container">
                        <div className="header_top">
                            <div className="header_top_left">
                                <img src={logo} alt="" />
                            </div>
                            <div className="header_top_right">
                                <div className="header_address">
                                    <p>Lorem ipsum <br /> dolor sit amet, In India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="nav header-section">
                    <div className="container">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li className="relative">
                                <Link to="/services">Services <i className="fa-solid fa-chevron-down"></i></Link>
                                <ul className="drop">
                                    <li><a href="#">Financial Services 24×7</a></li>
                                    <li><a href="#">Management Consulting</a></li>
                                    <li><a href="#">Assurance Services</a></li>
                                    <li><a href="#">Regulatory & Advisory</a></li>
                                    <li><a href="#">International VAT Reclaim</a></li>
                                    <li><a href="#">Others Services</a></li>
                                </ul>
                            </li>
                            <li><a href="/">Blog & Resources</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                        <p>Call US:  <a href="callto:+918017536666">+91 801 753 6666</a></p>
                    </div>
                </nav>
            </header>
        </>
    );
}



// const Header = () => {
//     return (
//         <div className="header_fixed">

//         </div>
//     )
// }

export default Header;