import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Img from '../assects/maps-img3.jpg';
// import Img2 from '../assects/clg11.png'
import Img3 from '../assects/maps-img1.jpg'
import Img4 from '../assects/maps-img2.jpg'

import Mech from '../assects/mech.jpg'
import Eee from '../assects/eee.jpg'
import CSe from '../assects/b-tech-cse-iot.jpg'
import Ece from '../assects/ece.jpg'

import {FiArrowRightCircle} from 'react-icons/fi'
// import Vid from './styles/maps.mp4'

import {Link} from 'react-router-dom'
import './styles/Home.css'

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function Home() {
  return (
    <div className="content-container">
        <div className="carousel-wrapper">
            <Carousel showThumbs={false} className='mb-5'>
            <div>
              <img src={Img} alt='1' className='car-img' />
              <p className="legend">Class Atmospire</p>
            </div>
            <div>
              <img src={Img4} alt='2' className='car-img' />
              <p className="legend">Students</p>
            </div>
            <div>
              <img src={Img3} alt='3' className='car-img' />
              <p className="legend">College environment</p>
            </div>
          </Carousel>
   
        </div>
       <section className="">
        <div className='name-div'>
        <h4 className='name' data-aos='fade-up' data-aos-delay='100'>Welcome To AMPS B.Tech & Engineering COLLEGE
      <hr className='name-hr'/>
      </h4>

      </div>  
      <div className='row' style={{padding:"20px"}}>
        <div className='col-12 col-md-5'>

        <h1 data-aos='fade-right' data-aos-delay='100'>About College</h1>
      
        <p data-aos='fade-right' data-aos-delay='100' className='h-para'>
        By choosing to create a future for yourself from our institution means that we, 
        the Management and Faculty at MAPS B.Tech & Engineering COLLEGE is responsible for your 
        successful graduation and growth. You will cherish every day at your college, 
        right from day one, you will feel welcome by all of us here- your seniors, 
        your new Faculty, and members of administration you will get to interact with. 
        What’s more the energetic environment will have you charged up to achieve your 
        dream with confidence like never before.
        </p>
  

      <Link to="/college">
      <button className='button ' data-aos='fade-right' data-aos-delay='100'>
  ReadMore
</button>
      </Link>
      </div>
        <div className='col-md-3 mt-4'>
      <Link to='/departments/mech'>
      <img   src={Mech} alt='clg' className='img' data-aos='fade-left' data-aos-delay='100'/>
      </Link>
     
      <Link to='/departments/cse'>
      <img  src={CSe} alt='clg' className='img' data-aos='fade-left' data-aos-delay='100'/>
      </Link>
    
      </div>
      <div className='col-md-3 mt-4'>
      <img  src={Ece} alt='clg' className='img' data-aos='fade-left' data-aos-delay='100'/>
      
      <Link to='/departments/eee' >

      <img  src={Eee} alt='clg' className='img' data-aos='fade-left' data-aos-delay='100'/>
      </Link>
  
        </div>
      </div>
      </section>  
      <section id="features" className="features" >
      <div className="container" data-aos="zoom-in">
        <div className="section-title name-div">
        <h2>Courses Offered
      <hr className='name-hr'/>
      </h2>
        </div>
        <div className="row">
          <div className="col-md-4 mt-4 text-center" data-aos='fade-up' data-aos-delay='100'>
            <div className="icon-box">
              < FiArrowRightCircle className='home-icon' size={23}/>
              <h3 className='course-head'><a href="/departments/cse">CSE (Computer Science & Enineering)</a></h3>
            </div>
          </div>
          {/* <div className="col-lg-4 mt-4 mt-md-0" data-aos="fade-up">
            <div className="icon-box">
              <i  style={{ color: "#5578ff" }}></i>
              <h3><a href="/bca">BCA (Bachelor of Computer Applications)</a></h3>
            </div>
          </div> */}
          
          {/* <div className="col-lg-4 col-md-4 mt-4 mt-md-0" data-aos="fade-up">
            <div className="icon-box">
              <i  style={{ color: "#e361ff" }}></i>
              <h3><a href="/bcom">B.Com (Computer Applications)</a></h3>
              </div>
            </div> */}
            <div className=" col-md-4 mt-4" data-aos="fade-up">
              <div className="icon-box">
              < FiArrowRightCircle className='home-icon' size={23}/>
                <h3><a href="/ece">ECE (Electronics & Communication)</a></h3>
              </div>
            </div>
          <div className=" col-md-4 mt-4" data-aos="fade-up">
            <div className="icon-box">
            < FiArrowRightCircle className='home-on' size={23}/>
              <h3><a href="/departments/mech">Mech (Mechanical Engineering)</a></h3>
            </div>
          </div>
          <div className=" col-md-4 mt-4" data-aos="fade-up">
            <div className="icon-box">
            < FiArrowRightCircle className='home-con' size={23}/>
              <h3><a href="/departments/eee">EEE (Electronics & Electric)</a></h3>
            </div>
          </div>
          <div className=" col-md-4 mt-4" data-aos="fade-up">
            <div className="icon-box">
            < FiArrowRightCircle className='home-con' size={23}/>
              <h3><a href="/bsc">B.Sc (Mathematics)</a></h3>
            </div>
          </div>
          <div className=" col-md-4 mt-4" data-aos="fade-up">
            <div className="icon-box">
            < FiArrowRightCircle className='home-con' size={23}/>
              <h3><a href="/automobile">Automobile Engineering</a></h3>
            </div>
          </div>
          <div className=" col-md-4 mt-4" data-aos="fade-up">
            <div className="icon-box">
            < FiArrowRightCircle className='home-con' size={23}/>
              <h3><a href="/civil">Civil Engineering</a></h3>
            </div>
          </div>
          <div className=" col-md-4 mt-4" data-aos="fade-up">
            <div className="icon-box text-center">
            < FiArrowRightCircle className='home-con' size={23}/>
            
              <h3><a href="/bachelor">B.Sc (Bachelor of Science)</a></h3>
            </div>
          </div>
          <div className=" col-md-4 mt-4" data-aos="fade-up">
            <div className="icon-box">
            < FiArrowRightCircle className='home-con' size={23}/>
              <h3><a href="/chemical">Chemical Engineering</a></h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <section>
    <div className='video-section' data-aos="fade-up">
      <video controls className='video-player'>
        <source src={Vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </section> */}
      </div>
  );
}
