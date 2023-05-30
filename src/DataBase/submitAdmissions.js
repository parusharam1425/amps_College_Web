const { Client } = require('pg');

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "Parshaw1425",
  database: "MapsDB"
});

client.connect();

client.query(
  "INSERT INTO admissions VALUES ()",
  (err, result) => {
    if (!err) {
      console.log(result.rowCount + " row(s) inserted successfully.");
    }
    client.end();
  }
);
