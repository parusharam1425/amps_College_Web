import React from 'react'
import {BiRightArrowAlt} from 'react-icons/bi'
import './Department.css'


export default function Eee() {
  return (
    <>
    <div className='content-container con'>
      <div className='container'>
      <div className='row'>
        <div className='col-12 text-center mt-5'>
          <h1 className='cse-heading' data-aos='fade-up' data-aos-delay='100'>EEE Department</h1>
          <h1 className='engineering-heading' data-aos='fade-up' data-aos-delay='100'>Electrical Science & Engineering</h1>
        </div>
          <div className='contair-color size1 col-12  col-md-6'>
            <h1 className='cse-department-heading' data-aos='fade-up' data-aos-delay='100'>EEE Department</h1>
            <hr className='horizontal-line' />
          <ul className='size1-list' data-aos='fade-rifht' data-aos-delay='100'>
            <li data-aos='fade-up' data-aos-delay='100'><BiRightArrowAlt size="25" /><span>About EEE Department</span></li>
            <hr className='horizontal-line2' />
            <li data-aos='fade-up' data-aos-delay='100'><BiRightArrowAlt size="25" /><span>HOD Message</span></li>
            <hr className='horizontal-line2' />
            <li data-aos='fade-up' data-aos-delay='100'><BiRightArrowAlt size="25" /><span>Faculty Achievements</span></li>
            <hr className='horizontal-line2' />
            <li data-aos='fade-up' data-aos-delay='100'><BiRightArrowAlt size="25" /><span>Workshop</span></li>
            <hr className='horizontal-line2' />
            <li data-aos='fade-up' data-aos-delay='100'><BiRightArrowAlt size="25" /><span>Laboratories</span></li>
            <hr className='horizontal-line2' />
            <li data-aos='fade-up' data-aos-delay='100'><BiRightArrowAlt size="25" /><span>Syllabus</span></li>
            <hr className='horizontal-line2' />
            <a className='a' href='/faculty'>

            <li data-aos='fade-up' data-aos-delay='100'><BiRightArrowAlt size="25" /><span>Faculty</span></li>
            <hr className='horizontal-line2' />
            </a>
            <li data-aos='fade-up' data-aos-delay='100'><BiRightArrowAlt size="25" /><span>Students Achievements</span></li>
            <hr className='horizontal-line2' />
            <li data-aos='fade-up' data-aos-delay='100'><BiRightArrowAlt size="25" /><span>Publications</span></li>
            <hr className='horizontal-line2' />
          </ul>
       </div>
       <div className='about-cse mb-3 col-12 col-md-6' data-aos='fade-left' data-aos-delay='100'>
          <h1 className='about-cse-heading'>About EEE</h1>
          <p className='cse-para'>The EEE Department was started with 40 Seats in 1998-99 and increased to 240 in the Academic year 2012-2013. The Department strives for global excellence in teaching and focuses on research and technology development. The department of Computer Science and Engineering has a vibrant body of faculty with 66 in number. The main objective of the department is to provide a platform in which the stakeholders acquire knowledge about the advanced emerging technologies. The department has several MOUs with industry and academic institutions, ensuring continuous interactions with the industry to prepare students for industry absorption and higher studies abroad.</p>
          </div>
          
        </div>
      
      <div className='row'>
        
          <div className='bg-color about-cse contact col-12 mb-3  col-md-6' data-aos='fade-up' data-aos-delay='100'>
            <h1 className='department-card-heading'>Department contact info</h1>
            <h1 className='department-card-heading2'>Computer Science Engineering</h1>
            <p className='department-card-heading3'>Manchiryal Road, Bolikunta khila Karimnagar, Telanaga-505475</p>
            <p className='department-card-heading3'>+ 919949863721</p>
            <p className='department-card-heading3'>info@ampsedu.in</p>
            <div className=''>
              <button className='btn btn-primary btn-contact-us'>Contact Us</button>
            </div>
          </div>
          <div className='col-12 col-md-5 about-cse ' data-aos='fade-up' data-aos-delay='100'>
            <h1 className='mission-heading'>MISSION</h1>
            <ul className='mission-para'>
              <li className='animate__animated animate__fadeInUp'>M1: To lay a good foundation in acquiring skills in software development, research, and innovation.</li>
              <li className='animate__animated animate__fadeInUp'>M2: To inculcate leadership qualities in areas of their interest and prepare socially sensitive engineers in the changing technological world.</li>
            </ul>
          </div>
          </div>
          <div className='last-one about-cse animate__animated animate__fadeInUp' data-aos='fade-up' data-aos-delay='100'>
            <h1 className='bottom-heading'>JOIN SPECIAL EVENT</h1>
            <h1 className='bottom-heading2'>ACCOUNT OPENING HOUSE</h1>
            <span className='last-para'>Get real experience on our campus starting on Jun 28, 2023</span>
            <div>
              <button className='btn btn-primary btn-see-more'>Click to see more</button>
            </div>
          </div>
        </div>
        </div>
        </>
   
  )
}
