// const express = require('express');
// const app = express();
// const { Pool } = require('pg');
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'MapsDB',
//   password: 'Parshaw1425',
//   port: 5432,
// });

// const getAdmission = () => {
//   return new Promise((resolve, reject) => {
//     pool.query('select * from admissions', (error, result) => {
//       if (error) {
//         reject(error);
//       }
//       resolve(result.rows);
//     });
//   });
// };

// const addAdmission = () => {
//   return new Promise((resolve, reject) => {
//     const { name, age, email, course, phonenumber } = body;

//     const query = `INSERT INTO admissions (name, age, email, course, phonenumber) VALUES ('${name}', '${age}', '${email}', '${course}', '${phonenumber}')`;

//     pool.query(query, (error, result) => {
//       if (error) {
//         reject(`Error adding new admission: ${error}`);
//       }

//       resolve(`New admission added: ${result.rows[0]}`);
//     });
//   });
// };

// module.exports = { getAdmission, addAdmission };


const Pool = require('pg').Pool
const pool = new Pool({
user: 'postgres',
host: 'localhost',
database: 'MapsDB',
password: 'Parshaw1425',
port: 5432,
});


const getAdmission = () => {
    return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM admissions', (error, results) => {
    if (error) {
    reject(error)
    }
    resolve(results.rows);
    })
    })
    }
    const addAdmission = (body) => {
    return new Promise(function(resolve, reject) {
    const { name,age, email, course, phonenumber } = body
    pool.query('INSERT INTO admissions (name, age, email, course, phonenumber) VALUES ($1, $2,$3, $4, $5) RETURNING *', [name,
    age, email, course, phonenumber], (error, results) => {
    if (error) {
    reject(error)
    }
    resolve(`A new admission has been added added: ${results.rows[0]}`)
    })
    })
    }
    module.exports = {
    getAdmission,
    addAdmission,
  
    }