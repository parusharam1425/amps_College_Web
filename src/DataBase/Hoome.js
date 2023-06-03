import React, { useState, useEffect } from 'react';

const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080")
      .then(res => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setUsers(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  if (error) {
    return <div className='content-container'>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className='content-container'>Loading...</div>;
  } else {
    return (
      <div className='content-container'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Designation</th>
              <th>number</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.name}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.designation}</td>
                <td>{user.phonenumber}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
