// const express = require('express');
// const cors = require('cors');
// const app = express();

// const port = 3001;

// const admissions = require('./admissions');

// app.use(express.json());
// app.use(cors());

// app.get('/', (req, res) => {
//   admissions.getAdmission()
//     .then(response => {
//       res.status(200).send(response);
//     })
//     .catch(error => {
//       res.status(500).send(error);
//     });
// });

// app.post('/admissions', (req, res) => {
//   admissions.addAdmission(req.body)
//     .then(response => {
//       res.status(200).send(response);
//     })
//     .catch(error => {
//       res.status(500).send(error);
//     });
// });

// app.listen(port, () => {
//   console.log(`App running on http://localhost:${port}`);
// });


// const express = require('express');
// const cors = require('cors');
// const app = express();

// const port = 3001;

// const admissions = require('./admissions');

// app.use(express.json());
// app.use(cors());

// app.get('/', (req, res) => {
//     admissions.getAdmission(req.body)
//       .then(response => {
//         res.status(200).send(response);
//       })
//       .catch(error => {
//         console.error('Error retrieving admission:', error);
//         res.status(500).send('Internal Server Error');
//       });
//   });
  
//   app.post('http:localhost:3001/admissions',(req, res) =>{
//     admissions.addAdmission(req.body)
//     .then(response =>{
//         res.status(200).send(response)
//         }).catch(error =>{
//             res.status(500).send(error)
//             })
// })
  

// app.listen(port, () => {
//   console.log(`App running on http://localhost:${port}`);
// });


const express = require('express')
const app = express()
const port = 3001
const admission_data = require('./admissions')
app.use(express.json())
app.use(function (req, res, next) {
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');

res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');

next();
});
app.get('/', (req, res) => {
admission_data.getAdmission()
.then(response => {
res.status(200).send(response);
})
.catch(error => {
res.status(500).send(error);
})
})
app.post('/admissions', (req, res) => {
admission_data.addAdmission(req.body)
.then(response => {
res.status(200).send(response);

})
.catch(error => {
res.status(500).send(error);
})
})

app.listen(port, () => {
console.log(`App running on port ${port}.`)
})