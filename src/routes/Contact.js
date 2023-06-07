import React, { useState } from 'react';

import { BiMap, BiEnvelope, BiPhone } from 'react-icons/bi';
import './styles/Contact.css';

export default function Contact() {


  const [status, setStatus] = useState("Submit");
  const submitHandler = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, subject, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3002/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);

    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
  };

  return (
    <div className="contact-container">

      <section id="contact" className="contact">
        <div className="">
          <div className="section-title">
            <div className=' a_head col-12 col-md-12 mt-0'>
              <h3 className='med' data-aos="fade-up"
                data-aos-delay="200" >
                Contact Us
                <hr className='hr ' />
              </h3>
            </div>
            <p className='para mt-0' data-aos="fade-up" data-aos-delay="200">Contact us to get started</p>
          </div>

          <div className="row">
            <div className=" col-12 col-md-6 ">
              <form className="php-email-form info-c" onSubmit={submitHandler} data-aos="fade-right" data-aos-delay="200">
                <div className="row ">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" required />

                  </div>
                  <div className="form-group col-md-6 mt-3 mt-md-0">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" name="message" rows="10" required ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center">
                  <button type="submit">{status}</button>
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

                  <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8703399995047!2d78.52475600953004!3d17.41800900185574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9973bb0015e9%3A0x2b40415d8a716d20!2sOsmania%20University!5e0!3m2!1sen!2sin!4v1685936830355!5m2!1sen!2sin" width="600" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='amps-map'></iframe>
                </div>

              </div>
            </div>


          </div>
        </div>
      </section>
    </div>
  );
}
