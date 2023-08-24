const mysql = require('mysql2');

const pool = mysql.createPool({
  host: "db",
  user: "app_user",
  database: "app_db",
  password: "app_password",
});

module.exports = pool.promise();