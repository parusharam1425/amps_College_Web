import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SubmitAdmissions = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    course: '',
    phonenumber: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');


  useEffect(() => {
    getAdmission();
  }, []);

  function getAdmission() {
    axios.get('http://localhost:3001')
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    addAdmission();
  };

  const addAdmission = async () => {
    setSubmitting(true);
    try {
      const response = await axios.post('http://localhost:3001/admissions', formData);
      console.log(response);
      alert('Admission Successfully Submitted');
      setError('');
    } catch (error) {
      console.error(error);
      alert('Error submitting admission');
      setError('Internal Server Error');
    } finally {
      setSubmitting(false);
    }
  };
  

  return (
    <div className="content-container">
      <div className="row col-12 col-md-7 text-center ">
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              Name:
              <input
                type="text"
                id="name"
                className="inpl"
                name="name"
                placeholder="Your Name"
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
                placeholder="Your Age"
                className="inpla"
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
                placeholder="Your Email"
                className="inpl"
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
                placeholder="Enter Your Address"
                className="inp"
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
                className="inp"
                id="phonenumber"
                name="phonenumber"
                placeholder="Enter Your Number"
                value={formData.phonenumber}
                onChange={handleChange}
                required
                data-aos="fade-right"
                data-aos-delay="500"
              />
            </label>
          </div>
          {/* <div className="form-group">
            <button type="submit" data-aos="fade-up">
              Submit
            </button>
          </div> */}
          <div className="form-group">
            <button type="submit" disabled={submitting} data-aos="fade-up">
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
            {error && <p>{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitAdmissions;
