import React, { useState, useEffect} from "react";
import { NavLink, Link } from 'react-router-dom'
import { IoHome, IoPerson, IoBriefcase, IoStar } from 'react-icons/io5'
import './Navbar.css';

function Navbar(){

    const [click, setClick] = useState(false)

    const toggleMenu = () => {
        setClick((prevClick) => !prevClick)
    };

    const checkContainerWidth = () => {
        const bodyWidth = document.body.clientWidth

        if(bodyWidth >= 1000){
            setClick(false);
            document.body.classList.remove('no-scroll');
        }
    };

    useEffect(() => {
        checkContainerWidth();
        window.addEventListener('resize', checkContainerWidth)

        return () => {
            window.removeEventListener('resize', checkContainerWidth)
        };
    }, []);

    useEffect(() => {
        const menuButton = document.querySelector('.menu')
        const overlayMenu = document.getElementById('overlayMenu')

        if(click){
            menuButton.classList.add('opened')
            menuButton.setAttribute('aria-expanded', 'true')
            overlayMenu.classList.add('overlayActive')
            document.body.classList.add('no-scroll');
        } else{
            menuButton.classList.remove('opened')
            menuButton.setAttribute('aria-expanded', 'false')
            overlayMenu.classList.remove('overlayActive')
            document.body.classList.remove('no-scroll');
        }
    }, [click]);
    
    return (
        <>
            <nav className="navbar">
                <h1 className="logo">
                    <Link to="/">LLXYD<span className="logo-span">DELU$ION ALLIANCE</span></Link>
                </h1>
                <div id="overlayMenu"> 
                    <div className="overlay-content-wrap">
                        <ul className="overlayList">
                            <li className="overlayLi">
                                <NavLink to="/">
                                    <div className="navbar-icon-wrap">
                                        <IoHome className="navbar-icons"/>
                                        <p className="navbar-overlay-links">HOME</p>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="overlayLi">
                                <NavLink to="/about">
                                    <div className="navbar-icon-wrap">
                                        <IoPerson className="navbar-icons"/>
                                        <p className="navbar-overlay-links">ABOUT</p>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="overlayLi">
                                <NavLink to="/work">
                                    <div className="navbar-icon-wrap">
                                        <IoBriefcase className="navbar-icons"/>
                                        <p className="navbar-overlay-links">WORK</p>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="overlayLi">
                                <NavLink to="/reviews">
                                    <div className="navbar-icon-wrap">
                                        <IoStar className="navbar-icons"/>
                                        <p className="navbar-overlay-links">REVIEWS</p>
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                        <div className="nav-buttons-wrapper-o">
                            <Link to="/sign-in">
                                <button className="nav-button-o" id="signInBtn">SIGN IN</button>
                            </Link>
                            <Link to="/sign-up">
                                <button className="nav-button-o" id="signUpBtn">SIGN UP</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="nav-menu">
                    <div className="navbar-link-wrap">
                        <NavLink to="/" className="navbar-link">Home</NavLink>  
                    </div>
                    <div className="navbar-link-wrap">
                        <NavLink to="/about" className={({isActive}) => isActive ? 'active-link navbar-link' : 'navbar-link'}>About</NavLink> 
                    </div>      
                    <div className="navbar-link-wrap">       
                        <NavLink to="/work" className={({isActive}) => isActive ? 'active-link navbar-link' : 'navbar-link'}>Work</NavLink>
                    </div>
                    <div className="navbar-link-wrap">
                        <NavLink to="/reviews" className={({isActive}) => isActive ? 'active-link navbar-link' : 'navbar-link'}>Reviews</NavLink>
                    </div>
                    <div className="nav-dot"></div>
                </div>
                <div className="nav-buttons-wrapper">
                    <Link to="/sign-in">
                        <button className="nav-button" id="signInBtn">SIGN IN</button>
                    </Link>
                    <Link to="/sign-up">
                        <button className="nav-button" id="signUpBtn">SIGN UP</button>
                    </Link>
                </div>
            </nav>
            <button onClick={toggleMenu} className="menu" aria-label="Main Menu">
                <svg className="svg-menu" width="60" height="60" viewBox="0 0 100 100">
                    <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path className="line line2" d="M 20,50 H 80" />
                    <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
            </button>
        </>
    )
}

export default Navbar