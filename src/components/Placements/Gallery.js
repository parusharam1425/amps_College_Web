import React, { useState } from 'react';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';

import './Gallery.css'

import { BiRightArrowAlt } from 'react-icons/bi';

import Img1 from './Images/tcs.jpg';
import Img2 from './Images/Life.jpg';
import Img3 from './Images/3.jpeg';
import Img4 from './Images/4.jpeg';
import Img5 from './Images/5.jpeg';
import Img6 from './Images/6.jpeg';
import Img7 from './Images/Pers.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

  const openLightbox = (index) => {
    setLightboxOpen(true);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className='content-container'>
      <div className='gallery-container'>
        <div className='bg-image'>
          <h1 className='bg-name'>Placements Gallery</h1>
        </div>
        <div className='gallery-content'>
          <div className='sidebar col-12 col-md-6'>
            <header>
              <h2 data-aos='fade-up' data-aos-delay='100'>
                Placements
              </h2>
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
            <header className='gallery-header' data-aos='fade-up' data-aos-delay='300'>
              Placement Gallery
            </header>
            <div className='image-grid '>
              <p className='desc'>
              Placement is understood as assigning jobs to the selected candidates.
               Assigning jobs to employ­ees may involve 
              a new job or different job. Thus, placement may include initial 
              assignment of job to new employee, on transfer, promotion or 
              demotion of the present employees. Here place­ment refers to the assignment of 
              jobs to new employees only.
              Placement involves assigning a specific job to each one of the selected candidates. 
              How­ever, placement is not as simple as it looks.
              </p>
            </div>
           </div>

            <div className='image-grid col-md-12 col-12'>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Images ${index + 1}`}
                  className='image'
                  onClick={() => openLightbox(index)}
                />
              ))}
            </div>
          </div>
        </div>
        {lightboxOpen && (
          <Lightbox 
            mainSrc={images[lightboxIndex] }
            nextSrc={images[(lightboxIndex + 1) % images.length]}
            prevSrc={images[(lightboxIndex + images.length - 1) % images.length]}
            onCloseRequest={closeLightbox}
            onMovePrevRequest={() => setLightboxIndex((lightboxIndex + images.length - 1) % images.length)}
            onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % images.length)}
          />
        )}
      </div>
  
  );
};

export default Gallery;
