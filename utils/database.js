const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("app_db", "app_user", "app_password", {
  host: "db",
  dialect: "mysql",
});

module.exports = sequelize;

// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "db",
//   user: "app_user",
//   database: "app_db",
//   password: "app_password",
// });

// module.exports = pool.promise();
