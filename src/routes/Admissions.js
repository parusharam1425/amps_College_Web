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
      <div className="text-center">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              Name:
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                value={formData.age}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.address}
                onChange={handleChange}
                data-aos="fade-right" 
                data-aos-delay="600" 
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">
              Phone Number:
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                data-aos="fade-right" 
                data-aos-delay="800" 
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
