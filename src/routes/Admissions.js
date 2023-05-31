import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './styles/Admissions.css';

const Admissions = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    address: '',
    phoneNumber: '',
  
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.age ||
      !formData.email ||
      !formData.address ||
      !formData.phoneNumber
    ) {
      return;
    }

    console.log(formData);
    setFormData({
      name: '',
      age: '',
      email: '',
      address: '',
      phoneNumber: '',
    });
  };


  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  

  return (
    <div className="content-container">

        <div className=' a_head col-12 col-md-12 mb-3'>

        <h3 className='' data-aos="fade-up" 
                data-aos-delay="200" >
          Fill the below form to admission
          

          <hr className='hr '/>
         
        </h3>
        </div>
      <div className='row col-12 col-md-6 text-center' >
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" >
              Name:
              <input
                type="text"
                id="name"
                className='inpl'
                name="name"
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
            <label htmlFor="address">
              Address:
              <input
                type="text"
                id="address"
                name="address"
                className='inp'
                value={formData.address}
                required
                onChange={handleChange}
                data-aos="fade-right" 
                data-aos-delay="500" 
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">
              Number:
              <input
                type="tel"
                className='inp'
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                data-aos="fade-right" 
                data-aos-delay="500" 
              />
            </label>
          </div>
          <div className="form-group">
            <button type="submit" data-aos="fade-up">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admissions;
