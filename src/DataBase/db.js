

// // const pgp = require('pg-promise')();
// // const connectionOptions = {
// //     host: "localhost",
// //     port: 5432,
// //     user: "postgres",
// //     password: "Parshaw1425",
// //     database: "MapsDB"
// // };

// // const db = pgp(connectionOptions);

// // module.exports = db;


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

// app.use(express.json());

// app.post('http://licalhost:4000/api/admission', (req, res) => {
//   const { name, age, email, address, phoneNumber } = req.body;
//   const query = 'INSERT INTO your_table_name (name, age, email, address, phoneNumber) VALUES ($1, $2, $3, $4, $5)';
//   const values = [name, age, email, address, phoneNumber];

//   pool.query(query, values)
//     .then(() => {
//       res.status(200).send('Form data saved successfully');
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(500).send('An error occurred while saving the form data');
//     });
// });

// app.listen(4000, () => {
//   console.log('Server listening on port 4000');
// });


const express = require('express');
var cors = require('cors'); //npm i cors
const { Client } = require('pg');
const connectionString = 'postgres://postgres:Parshaw1425@localhost:5432/employe';
//"postgres://YourUserName:YourPassword@localhost:5432/YourDatabase";
const client = new Client({
    connectionString: connectionString
});
client.connect();
var app = express();
app.use(cors());
app.set('port', process.env.PORT || 5000);
app.get('/', function (req, res, next) {

//client.query('SELECT * FROM Employee where id = $1', [1], function (err, result) {
client.query('SELECT * FROM employee', function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});
app.listen(5000, function () {
    console.log('Server is running at 5000');
});