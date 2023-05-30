import React from 'react';
import { AiOutlineBulb } from "react-icons/ai";
import { BiRocket } from "react-icons/bi";
import { FiAperture } from "react-icons/fi";
import './Vision.css';

export default function Vision() {
  return (
    <div className='content-container'>
      <div className='bg-clr'>
        <h1 className='heading' data-aos='fade-up' data-aos-delay='200'>VISSION, MISSION AND VALUES</h1>
        <div className='row'>
          <div className='col-md-4 col-sm-12'>
            <div className='card' data-aos='fade-right' data-aos-delay='200'>
              <AiOutlineBulb size="40" color="#f711ba" />
              <h1 className='img-heading'>Our Vision</h1>
              <p>To provide values-based academic education by adapting to the new industry requirements to develop future leaders</p>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className='card' data-aos='fade-up' data-aos-delay='200'>
              <BiRocket size="40" color="#f711ba" />
              <h1 className='img-heading'>Our Mission</h1>
              <p>To become one of the leading educational institutes by providing new-age, industry-oriented, holistic development to our students</p>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className='card' data-aos='fade-left' data-aos-delay='400'>
              <FiAperture size="40" color="#f711ba"  />
              <h1 className='img-heading'>Our Values</h1>
              <p>Ethical conduct. Creativity & Innovation. Passion for Excellence. Virtuousness. Enterprise. Global Mindset</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
