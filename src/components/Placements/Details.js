import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import './Details.css';

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function Details() {
  return (
    <div className='content-container'>
      <section>
        <div>
          <div className='bg-img'></div>

          <div className='row mt-4'>
            <div className='col-12 col-md-6' >
              <header style={{textAlign:"center"}} data-aos="fade-right"><h2>
                Placements
                </h2></header>
                <div className='sub-item' data-aos='fade-up' data-aos-delay='100'>
            <a className='a' href='/details'>
            <BiRightArrowAlt color='red' />
            <span className='sub-para'>Placement Details</span>
            </a>
          </div>
          <hr />
          <div className='sub-item' data-aos='fade-up' data-aos-delay='200'>
          <a className='a' href='/blog'>
            <BiRightArrowAlt color='red' />
            <span className='sub-para'>CRT</span>
            </a>
          </div>
          <hr />
          <div className='sub-item' data-aos='fade-up' data-aos-delay='300'>
          <a className='a' href='/gallery'>
            <BiRightArrowAlt color='red' />
            <span className='sub-para'>Placement Gallery</span>
          </a>
          </div>
          <hr />
          <div className='sub-item' data-aos='fade-up' data-aos-delay='400'>
          <a className='a' href='/jobs'>
            <BiRightArrowAlt color='red' />
            <span className='sub-para'>Job Updates</span>
          </a>
          </div>
          <hr />           
           </div>
            <div className='col-12 col-md-6'>
              <header style={{textAlign:"center"}} data-aos='fade-left' data-aos-delay='400'><h2>Placements Details</h2></header>
              <span className='para' data-aos='fade-left' data-aos-delay='100'>
                AMPS College of Engineering one of the best placement engineering college. AMPS pioneer Career development
                in placement activities. leading IT companies have been visting VCE to fresh talent and provoding insight into
                the complex dynamics of the corporate world simultaneous fine-tuning the students with the current critical
                industrial & business senarios. We ensure environment at par with the current critical industrial & business
                senarios. We component skills and insight to take the leadership roles in their own way. VCE, the best engineering
                college in Warangal has always been given the first preference for premier corporations to acquire fresh talent.
                Even with increasing enrollment year after year, we are happy to secure almost 100% placements for our students
                with attractive packages. It is our endeavor to ensure more quality placements and best-recruiting experience for
                our students at large conglomerates in varied sectors and industries. The Placement cell at our best Engg college
                consists of faculty members and students, who work towards providing soft skill training, internships and provide
                better placement to all the students in their area of interest. Listed below are the placement details of the various
                academic Year
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
