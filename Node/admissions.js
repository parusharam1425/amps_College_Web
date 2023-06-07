
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

    
    const deleteAdmission = (id) => {
        return new Promise(function(resolve, reject) {
          pool.query('DELETE FROM admissions WHERE id = $1', [id], (error, results) => {
            if (error) {
              reject(error);
            }
            resolve(`Admission with ID ${id} has been deleted.`);
          });
        });
      };
      
      module.exports = {
        getAdmission,
        addAdmission,
        deleteAdmission,
      };