

const pgp = require('pg-promise')();
const connectionOptions = {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "Parshaw1425",
    database: "MapsDB"
};

const db = pgp(connectionOptions);

module.exports = db;
