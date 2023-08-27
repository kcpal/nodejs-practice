const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://kcp:ruwGqtZ0jUn95j33@cluster0.ybpyzxn.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
}

const getDB = () => {
  if(_db) {
    return _db;
  }
  throw "No database found!";
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;


// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize("app_db", "app_user", "app_password", {
//   host: "db",
//   dialect: "mysql",
// });

// module.exports = sequelize;

// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "db",
//   user: "app_user",
//   database: "app_db",
//   password: "app_password",
// });

// module.exports = pool.promise();
