import React, { useState } from 'react';
import axios from 'axios';
import {RiArrowRightSFill} from 'react-icons/ri'
import Data from '../DataBase/data';

import './styles/Admissions.css';

const Admissions = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    course: '',
    phonenumber: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [submittedData, setSubmittedData] = useState(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await addAdmission();
    setFormData({
      name: '',
      age: '',
      email: '',
      course: '',
      phonenumber: '',
    })
  }

  const addAdmission = async () => {
    setSubmitting(true);
    try {
      const response = await axios.post('http://localhost:3001/admissions', formData);
      // console.log(response);
      setSubmittedData(response.data);
      // alert('Admission Successfully Submitted');
      setError('');
    } catch (error) {
      // console.error(error);
      alert('Error submitting admission');
      setError('Internal Server Error');
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <div className="content-container">
      <section id="about-us" className="about-us">
      <div className="" data-aos="fade-up">
        <div className="head col-12 col-md-12 mt-4">
        <h3 data-aos="fade-up" 
                data-aos-delay="200" >
          Admission Prosess
          <hr className='hr '/>
        </h3>
        </div>
        <div className="row">
          <div className="col-lg-12 text-justify" data-aos="fade-up">
            <p>
              Dear Student, We congratulate you on your success at Intermediate Level!<br />
              DOST (Degree Online Services, Telangana) welcome you to join in Undergraduate Courses, 2023-24 in Telangana.
              <br />
              The only Gateway to Engineering & Degree Courses (B.tech./B.Sc/BBA/BCA etc.) in the State of Telangana is DOST.
            </p>
            <p>
              <strong>Process of Admission</strong>
            </p>
            <ul>
              <li>
                <RiArrowRightSFill className="arrow-icon" /> Verify your Aadhaar number seeded/linked with your mobile number through the link
                <a href="https://resident.uidai.gov.in/aadhaarverification" target="_blank" rel="noopener noreferrer">https://resident.uidai.gov.in/aadhaarverification</a>, well in advance.
              </li>
              <li>
                <RiArrowRightSFill className="arrow-icon" /> Link your mobile number with your Aadhaar number, name, gender and date of birth as
                per SSC/Intermediate Certificate, well in advance.
              </li>
              <li>
                <RiArrowRightSFill className="arrow-icon" /> You have to pay online to register on DOST.
              </li>
              <li>
                <RiArrowRightSFill className="arrow-icon" /> One Time Password (OTP) will be sent to your Aadhaar linked mobile number. Once you
                receive OTP, login for further registration process.
              </li>
              <li>
                <RiArrowRightSFill className="arrow-icon" /> DOST ID will be generated based on your hall ticket and this will be valid and referred
                to till the process of admission is completed.
              </li>
            </ul>
            <p>
              <strong>Essential Documents required for Admissions:</strong>
            </p>
            <ul>
              <li>
                <RiArrowRightSFill className="arrow-icon" /> Aadhaar number
              </li>
              <li>
                <RiArrowRightSFill className="arrow-icon" /> Mobile Number linked to Aadhaar number
              </li>
              <li>
                <RiArrowRightSFill className="arrow-icon" /> Colour photograph
              </li>
              <li>
                <RiArrowRightSFill className="arrow-icon" /> Caste Certificate (with CND number and sub-caste), if applicable
              </li>
              <li>
                <RiArrowRightSFill className="arrow-icon" /> Income Certificate, on or after 01.04.2023(only for dost-2023)
              </li>
              <li>
                <RiArrowRightSFill className="arrow-icon" /> Games and Sports Certificate, if applicable
              </li>
              <li>
                <RiArrowRightSFill className="arrow-icon" /> N.C.C. Certificate, if applicable
              </li>
              <li>
                <RiArrowRightSFill className="arrow-icon" /> Extra Curricular Certificate, if applicable
              </li>
              <li>
                <RiArrowRightSFill className="arrow-icon" /> Physically Handicapped Certificate, if applicable
              </li>
              <li>
                <RiArrowRightSFill className="arrow-icon" /> Ex-service Men Certificates, if applicable these certificates should be kept ready.
              </li>
            </ul>
            <p>
              <strong>Important Suggestions:</strong>
            </p>
            <ul>
              <li>
                <RiArrowRightSFill className="arrow-icon" /> Enter your Aadhaar Number without any mistakes
              </li>
              <li>
                <RiArrowRightSFill className="arrow-icon" /> Do not lose your mobile number till you complete the Admission Procedure
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
        <div className=' a_head col-12 col-md-12 mb-3'>
        <h3 className='' data-aos="fade-up" 
                data-aos-delay="200" >
          Fill the below form to admission
          <hr className='hr '/>
        </h3>
        </div>
<div className='form-b '>
      <div className='row col-12 col-md-7 form-c text-center' >
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" >
              Name:
              <input
                type="text"
                id="name"
                className='inpl'
                name="name"
                placeholder='Your Name'
                value={formData.name}
                onChange={handleChange}
                required
                data-aos="fade-right"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="age">
              Age:
              <input
                type="number"
                id="age"
                name="age"
                placeholder='Your Age'
                className='inpla'
                value={formData.age}
                onChange={handleChange}
                required
                data-aos="fade-right" 
                data-aos-delay="200" 
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email:
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Your Email'
                className='inpl'
                value={formData.email}
                onChange={handleChange}
                required
                data-aos="fade-right" 
                data-aos-delay="400" 
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="course">
              Course:
              <input
                type="text"
                id="course"
                name="course"
                placeholder='Enter Your course'
                className='inp'
                value={formData.course}
                required
                onChange={handleChange}
                data-aos="fade-right" 
                data-aos-delay="500" 
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="phonenumber">
              Number:
              <input
                type="tel"
                className='inp'
                id="phonenumber"
                name="phonenumber"
                placeholder='Enter Your Number'
                value={formData.phonenumber}
                onChange={handleChange}
                required
                data-aos="fade-right" 
                data-aos-delay="500" 
              />
            </label>
          </div>
          <div className="form-group">
          <button type="submit" disabled={submitting} data-aos="fade-up">
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
            {error && <p>{error}</p>}
          </div>
          
        
        </form>
        
      </div>
      
    </div>
    
    {submittedData ? (
        <div className="result">
           <Data/>
        </div>
      ) : null}

    </div>
  );
};

export default Admissions;


