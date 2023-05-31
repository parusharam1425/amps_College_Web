import React from 'react';
import './Gallery.css'; 

import { BiRightArrowAlt } from "react-icons/bi";

import Img1 from './Images/6.jpeg';
import Img2 from './Images/tcs.jpg';
import Img3 from './Images/3.jpeg';
import Img4 from './Images/4.jpeg';
import Img5 from './Images/5.jpeg';
import Img6 from './Images/6.jpeg';


import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();



export default function Gallery() {
  return (
    <div className='content-container'>
    <div className='gallery-container '>
      <div className='bg-image'>
        <h1 className='bg-name'>Placements Gallery</h1>
      </div>
      <div className='gallery-content'>
        <div className='sidebar col-12 col-md-6 '>
          <header>
            <h2 data-aos='fade-up' data-aos-delay='100'>Placements</h2>
          </header>
          <hr />
          <a className='sidebar-link' href='/details' data-aos='fade-up' data-aos-delay='200'>
            <BiRightArrowAlt color='red' />
            <span className='sub-para'>Placement Details</span>
          </a>
          <hr />
          <a className='sidebar-link' href='/crt' data-aos='fade-up' data-aos-delay='300'>
            <BiRightArrowAlt color='red' />
            <span className='sub-para'>CRT</span>
          </a>
          <hr />
          <a className='sidebar-link' href='/gallery' data-aos='fade-up' data-aos-delay='400'>
            <BiRightArrowAlt color='red' />
            <span className='sub-para'>Placement Gallery</span>
          </a>
          <hr />
          <a className='sidebar-link' href='/jobs' data-aos='fade-up' data-aos-delay='400'>
            <BiRightArrowAlt color='red' />
            <span className='sub-para'>Job Updates</span>
          </a>
          <hr />
        </div>
        <div className='image-gallery col-12 col-md-6'>
          <header className='gallery-header' data-aos='fade-up' data-aos-delay='300'>Placement Gallery</header>
          <div className='image-grid '>
            <img src={Img1} alt='img.jpg' className='image' data-aos='fade-up' data-aos-delay='100'/>
            <img src={Img2} alt='tcs.jpg' className='image' data-aos='fade-up' data-aos-delay='100' />
           </div>
           </div>
          
        <div className='image-grid col-md-9 col-12'>
            <img src={Img4} alt='4.jpg' className='image'  />
           <img src={Img3} alt='3.jpg' className='image' />
            <img src={Img1} alt='re.jpg' className='image' />
            <img src={Img5} alt='5.jpg' className='image' />
            <img src={Img6} alt='6.jpg' className='image' />
            <img src={Img4} alt='.jpg' className='image' />
          </div>
        </div>
      </div>
   
    
    </div>
  );
}
