import { useRef } from 'react';
import '../App.css';
import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
    faFacebook,
    faInstagram,
    faWhatsapp,
    
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
    const navRef = useRef();

    const showNavebar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }
  return (
    <header>
        <nav ref={navRef}>
            <a href='https://www.facebook.com/profile.php?id=100092571100412&mibextid=ZbWKwL'><FontAwesomeIcon icon={faFacebook}/></a>
            <a href='https://instagram.com/the.bigbrothersofficial?igshid=ZGUzMzM3NWJiOQ'><FontAwesomeIcon icon={faInstagram} /></a>
            <a href='https://wa.me/+971561146473'><FontAwesomeIcon icon={faWhatsapp}/></a>
            <button className='nav-btn nav-close-btn' onClick={showNavebar} >
                <FaTimes />
            </button>
        </nav>
        <button className='nav-btn nav-close-btn' onClick={showNavebar} >
            <FaBars />
        </button>
       <div className='header_logo'><h1 className='logo_name'>Big Brother</h1></div>
        
    </header>
  )
}
