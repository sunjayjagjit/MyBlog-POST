const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  database: "blogspace",
  user: "root",
  password: "Rootpassword",
});

module.exports = pool;
