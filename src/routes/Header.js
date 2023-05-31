import React, {useState, useEffect} from 'react'
import Logo from '../assects/logo-psm.jpeg'
import './styles/Header.css'
import Gif from '../assects/odc-code.gif'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';



export default function Header({ isFooterDarkMode }) {

  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowIcons(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
    <div className='d-flex flex-row head'>
        <img src={Logo} className='head-logo' alt='logo-head'/>
        <h3 className='maps-head'>AMPS B.Tech & Engineering College<br/>
        <span className='span-head h'>(Affiliated to Jntu University)</span></h3>
      {showIcons && (
          <div className="icons">
           
        <img className='gif' src={Gif} alt='gif'/>
            <ul className="social-media">
              <li>
                <a href="https://www.facebook.com">
                  <FaFacebook className='ico'/>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com">
                  <FaTwitter className="m-4 ico" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com">
                  <FaInstagram className='ico'/>
                </a>
              </li>
            </ul>

          </div>
        )}
        
    </div>
    <hr className='hr'/>
    </div>
   
  )
}
