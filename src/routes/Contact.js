import React, {useState} from 'react';

import {BiMap, BiEnvelope, BiPhone } from 'react-icons/bi';
import './styles/Contact.css';

export default function Contact() {
  const [ram, setRam] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    alert(`Name: ${ram}\nEmail: ${email}\n subject: ${subject}\nMessage: ${message}`);
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setRam(value);
        break;
      case 'subject':
        setSubject(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
    }


  return (
    <div className="contact-container">
    
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
        <div className=' a_head col-12 col-md-12 mt-0'>
        <h3 className='med' data-aos="fade-up" 
                data-aos-delay="200" >
          Contact Us
          <hr className='hr '/>
        </h3>
        </div>
          
          <p className='para mt-0' data-aos="fade-up" data-aos-delay="200">Contact us to get started</p>
        </div>

        <div className="row">
        <div className=" col-12 col-md-6 ">
            <form action="#" method="POST" className="php-email-form info-c" onSubmit={submitHandler} data-aos="fade-right" data-aos-delay="200">
              <div className="row ">
                <div className="form-group col-md-6">
                <label htmlFor="name">Your Name</label>
                  <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" required  onChange={changeHandler}/>
               
                  </div>
                <div className="form-group col-md-6 mt-3 mt-md-0">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required  onChange={changeHandler}/>
                </div>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="subject">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required  onChange={changeHandler}/>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" name="message" rows="10" required onChange={changeHandler}></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
          <div className="col-12 col-md-6">
            <div className="info" data-aos="fade-left" data-aos-delay="200">
              <div className="address icon">
             <BiMap />
          
                <h4>Reach Us:</h4>
                <p>Plot No.15-B Bandari Nilayam, Nagendra Nagar, Beside SBI, habsiguda, Hyderabad, Telangana - 500 007.</p>
            
              </div>

              <div className="email icon">
              <BiEnvelope />
                <h4>Email:</h4>
                <p>ampscollege@gmail.com</p>
              </div>

              <div className="phone icon">
              <BiPhone />
                <h4>Call:</h4>
                <p>+91 9848488856 / 9834794873</p>
              </div>
              <div>

              <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15227.508516420952!2d78.5437323!3d17.4176833!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99e0001a2553%3A0xeef8bc399e37f820!2sOmega%20Degree%20%26%20PG%20College!5e0!3m2!1sen!2sin!4v1681076423687!5m2!1sen!2sin" frameBorder="0" allowFullScreen="" title="mapOmega"></iframe>
              </div>

            </div>
          </div>

         
        </div>
      </div>
    </section>
    </div>
  );
}
