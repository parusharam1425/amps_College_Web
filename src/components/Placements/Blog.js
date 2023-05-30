import React, { useEffect } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Blog.css';

import Img1  from './Images/Life.jpg'
import Img2  from './Images/human.jpg'
import Img3  from './Images/verb.jpg'
import Img4  from './Images/res.jpg'
import Img5 from './Images/Pers.jpg'

export default function Blog() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='content-container'>
      <div className='bg-image'>
        <header className='heading'>CRT</header>
      </div>

      <div className='row'>
        <div className='col-md-4 col-12 text-center' data-aos='fade-up'>
          <header className='head2'>placements</header>

          <hr />
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

        <div className='col-md-12'>
          <div className='img-container text-center' data-aos='fade-up' data-aos-delay='500'>
            <header className='heading2'>Campus Recruitment Training</header>
            <img src={Img1} alt='9.jpg' className='aptitude-img' />
            </div>

            <div className='margin'>
              <header className='quantitative-heading'>1. Quantitative Aptitude & Logical Reasoning</header>
              <div className='row'>
                <div className='col-md-4' data-aos='fade-right' data-aos-delay='600'>
                  <img src={Img4} alt='11.jpg' className='aptitude-img' />
                </div>
                <div className='col-md-8' data-aos='fade-left' data-aos-delay='600'>
                  <span className='aptitude-para'>Quantitative aptitude is an inseparable and an integral part
                  of aptitude exams in India. It tests the quantitative skills along
                  with logical and analytical skills. One can test their own number handling techniques
                  and problem-solving skills by solving these questions. This is the first round
                  to clear for any job these days to go ahead with the other rounds of the interview.</span>
                </div>
              </div>
            </div>

            <div className='margin'>
              <header className='quantitative-heading'>2. Verbal Ability, Vocabulary & Functional English</header>
              <div className='row'>
                <div className='col-md-4' data-aos='fade-right' data-aos-delay='600'>
                  <img src={Img3} alt='12.jpg' className='aptitude-img' />
                </div>
                <div className='col-md-8' data-aos='fade-left' data-aos-delay='600'>
                  <span className='aptitude-para'>Quantitative aptitude is an inseparable and an integral part
                  of aptitude exams in India. It tests the quantitative skills along
                  with logical and analytical skills. One can test their own number handling techniques
                  and problem-solving skills by solving these questions. This is the first round
                  to clear for any job these days to go ahead with the other rounds of the interview.</span>
                </div>
              </div>
            </div>

            <div className='margin'>
              <header className='quantitative-heading'>3. Life Skills – Universal Human Values</header>
              <div className='row'>
                <div className='col-md-4' data-aos='fade-right' data-aos-delay='600'>
                  <img src={Img2} alt='13.jpg' className='aptitude-img' />
                </div>
                <div className='col-md-8' data-aos='fade-left' data-aos-delay='600'>
                  <span className='aptitude-para'>The present-day world is fully equipped with informatics, science, technologies, computer dominances, and mechanical. For the explosion of knowledge, human beings are forced to work as mechanisms dealing with materials. Hence, a wider gap is maintaining among the human beings in the society between their life and their satisfaction. Therefore, it is happened only because of value less work on life and value erosion among them. Education alone cannot make them live with peace, harmonious and satisfactory in real-life situations. Therefore, value education is the only source to provide all those in the human lives and to make them into better and better humane. There is universal acceptance of the fact that the primary function of education is the development of an all-round and well-balanced personality of the student. Education is an attempt on the part of adult members of the human society to shape the development of the coming generations in accordance with its own ideals of life. Values that relate to the conservation of human life certainly belong in the educative process. For successful social living, children should be taught that traditional social institutions such as the family and school have a valuable place in our culture.</span>
                </div>
              </div>
            </div>

            <div className='margin'>
              <header className='quantitative-heading'>4. Interview Skills & Personality Development</header>
              <div className='row'>
                <div className='col-md-4' data-aos='fade-right' data-aos-delay='600'>
                  <img src={Img5} alt='14.jpg' className='aptitude-img' />
                </div>
                <div className='col-md-8' data-aos='fade-left' data-aos-delay='600'>
                  <span className='aptitude-para'>An interview is a goal-driven transaction characterized by questions and answers between two strangers. This is usually a dyadic transaction, Interviews share many characteristics with different types of communication. Personality interview questions allow candidates to demonstrate their suitability for a company's culture. After learning about your hard skills and qualifications, a hiring manager may want to determine what soft skills you have and how your personality can contribute to the job's responsibilities. Interviewers may ask personality questions to understand a candidate's work habits, collaboration strategies, and interests outside of work. You can use these questions to discuss about you to build a strong impression and showcase what makes you a uniquely qualified candidate.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
}
