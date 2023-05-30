import React from 'react';
import Img1 from './Images/maps-img1.jpg';

import './College.css'

export default function College() {
  return (
    <div className="content-container pt-5">
      <div className='name-div'>
      <h1 className='name ' data-aos='fade-up' data-aos-delay='200'>ABOUT COLLEGE
      <hr className='name-hr'/>
      </h1>
      </div>
      <div className="content">
      <div className="image-container" >
        <img src={Img1} alt="1.jpg" data-aos='fade-left' data-aos-delay='200'/>
      </div>
      <div>
      <div className="college-info" data-aos='fade-left' data-aos-delay='200'>
        <h1 >MAPS Engineering College (CO-Edn)</h1>
        <p>
          At MAPS B.tech & Engeneerng College, we understand that by choosing to pursue your future with us, you entrust us
          with the responsibility of ensuring your successful graduation and growth. From day one, you will feel a warm
          welcome from all of us - your fellow students, senior members, and administrative staff who are always
          accessible to guide you through every step of your journey. Our goal is to provide you with an intellectually
          stimulating environment that fosters growth and development, both academically and personally.
          <br />
          We understand that the career path you have chosen is a remarkable journey that will shape your future beyond
          your college years. That's why we are committed to working with you to prepare you for a life beyond college.
          Our faculty members are highly knowledgeable, experienced, and passionate about helping you realize your full
          potential. Our teaching methodology and excellent placement opportunities set us apart from other
          institutions and make us one of the leading institutions in the twin cities.
          <br />
          We believe that education should provide a new perspective and perfection in all spheres. At MAPS B.Tech &
          Enginering COLLEGE, we strive to give you a professional education that is holistic and prepares you for the
          challenges of the future. Whether it's academics, sports, or extracurricular activities, we want you to
          graduate not just with a degree and certificate but also as a graduate of life and a responsible citizen of
          the world. We are grateful to our colleagues who are working hard to establish MAPS B.Tech & EN COLLEGE as a
          leading institution in the twin cities.
        </p>
      </div>
    </div>
    </div>
      </div>
  );
}
