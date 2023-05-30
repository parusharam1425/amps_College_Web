import React, { useState } from 'react';
import './styles/Contact.css'

export default function Contact() {
  const [participate, setParticipate] = useState('');
  const [designation, setDesignation] = useState('');
  const [course, setCourse] = useState('');
  const [number, setNumber] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    alert(`Name: ${participate}\nDesignation: ${designation}\nCourse: ${course}\nMobile: ${number}`);
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    if (name === 'number') {
      if (isNaN(value)) {
        alert('Number should not contain characters');
        return;
      }
    }
    switch (name) {
      case 'participate':
        setParticipate(value);
        break;
      case 'Designation':
        setDesignation(value);
        break;
      case 'course':
        setCourse(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  

  return (

      <div className="contact-container">
        <form action="#" method="POST" className="contact-form" onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="participate" placeholder="Enter Your Name" required onChange={changeHandler} />
          </div>

          <div className="form-group">
            <label htmlFor="emil">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter Your Emil" required onChange={changeHandler} />
          </div>

          

          <div className="form-group">
            <label htmlFor="number">Mobile:</label>
            <input type="text" id="number" name="number" placeholder="Enter Your Mobile Nubmer" required onChange={changeHandler} />
          </div>

          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </form>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.770356786728!2d77.51560167379478!3d12.922475987388404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e21c103985b%3A0x7af7b0258b8258fa!2sMatrical%20Technologies!5e0!3m2!1sen!2sin!4v1682603452282!5m2!1sen!2sin"
          width="70%"
          height="400px"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="mapMT"
        />
      </div>
  );
}
