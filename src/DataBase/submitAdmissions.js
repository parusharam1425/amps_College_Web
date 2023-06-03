// import React, { useState, useEffect }  from 'react';
// const submitAdmissions = () => {
// const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [users, setUsers] = useState([]);    useEffect(() => {
//         fetch("http://localhost:3000/admissions")
//             .then(res => res.json())
//             .then(
//                 (data) => {
//                     setIsLoaded(true);
//                     setUsers(data);
//                 },
//                 (error) => {
//                     setIsLoaded(true);
//                     setError(error);
//                 }
//             )
//       }, [])
//       if (error) {
//         return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//         return <div>Loading...</div>;
//     } else {
//         return (
//             <ul>
//                 {users.map(user => (
//                 <li key={user.ecode}>
//                     {user.name} 
//                     {user.designation} 
//                     {user.email}
//                     {user.age}
//                     {user.salary}
//                     {user.location}
//                     {user.performance}
//                 </li>
//                 ))}
//             </ul>
//         );
//     }
// }
// export default submitAdmissions;

import React, { useState } from 'react';

import axios from 'axios'

const SubmitAdmissions = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    designation: '',
    phoneNumber: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the form data to the server
    axios.post('http://localhost:8080', formData)
      .then((response) => {
        console.log(response.data); // Optionally, handle the response from the server
        // Reset the form fields after successful submission
        setFormData({
          name: '',
          age: '',
          email: '',
          designation: '',
          phoneNumber: '',
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='content-container'>

  
    <div className='row col-12 col-md-7 text-center '>
      <br>
      </br>
      <br>
      </br>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
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
            <label htmlFor="designation">
              Designation:
              <input
                type="text"
                id="designation"
                name="designation"
                placeholder='Enter Your Address'
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
                placeholder='Enter Your Number'
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

export default SubmitAdmissions;
