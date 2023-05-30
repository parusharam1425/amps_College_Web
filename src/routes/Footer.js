import React from 'react';

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


import './styles/Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container ">
<div className='col-12 col-md-4' data-aos='fade-up' data-aos-delay='150'>
        <div className="footer-section" data-aos='fade-up' data-aos-delay='150'>
          <h3 data-aos='fade-right' data-aos-delay='150'>About Us
            <hr className='hr-footer'/>
          </h3>

          <p data-aos='fade-right' data-aos-delay='150'>Description of the college and its mission.</p>
</div>
        </div>
        <div className='col-12 col-md-4'>
        <div className="footer-section" data-aos='fade-up' data-aos-delay='150'>
          <h3>Contact Information
            <hr className='hr-footer'/>
          </h3>
          <p data-aos='fade-up' data-aos-delay='150'>Address: Plot No.15-B Bandari Nilayam,
Nagendra Nagar, Beside SBI, habsiguda,
Hyderabad, Telangana - 500 007.</p>
          <p data-aos='fade-up' data-aos-delay='150'>Phone:+91 9848388856</p>
          <p data-aos='fade-up' data-aos-delay='150'>Email:amps@gmail.com</p>
</div>
        </div>
        <div className='col-12 col-md-4' data-aos='fade-up' data-aos-delay='150' >
        <div className="footer-section" data-aos='fade-up' data-aos-delay='150'>
          <h3> Quick Links
            <hr className='hr-footer'/>
          </h3>
          <ul>
            <li data-aos='fade-left' data-aos-delay='150'><a href="/">Home</a></li>
            <li data-aos='fade-left' data-aos-delay='150'><a href="/admissions">Admissions</a></li>
            <li data-aos='fade-left' data-aos-delay='150'><a href="/departments/cse">Courses</a></li>
            <li data-aos='fade-left' data-aos-delay='150'><a href="/faculty">Faculty</a></li>
            <li data-aos='fade-left' data-aos-delay='150'><a href="/">Events</a></li>
            <li data-aos='fade-left' data-aos-delay='150'><a href="/">Student Resources</a></li>
          </ul>
</div>
        </div>
        <div className="footer-section" data-aos='fade-up' data-aos-delay='100'>
        <div className='col-12 col-md-4' >
          <h3>Follow Us
            <hr className='hr-footer'/>
          </h3>
</div>
  <ul className="social-media col-md-3" style={{textAlign:"center"}} data-aos='fade-up' data-aos-delay='100'>
    <li className='icon foot'><a href="https://www.facebook.com"><FaFacebook className='foot' /></a></li>
    <li className='icon foot'><a href="https://www.twitter.com"><FaTwitter className='foot' /></a></li>
    <li ><a href="https://www.instagram.com"><FaInstagram className='foot'/></a></li>
  </ul>
        </div>
      </div>
      <div className="footer-bottom"  >
        <p >&copy; {new Date().getFullYear()} Maps College. All rights reserved.</p>
        <ul className="footer-links" >
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li ><a href="/terms-of-use">Terms of Use</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
