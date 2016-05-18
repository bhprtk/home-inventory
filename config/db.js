'use strict';

var mysql = require('mysql');

var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Friday-13',
  database : 'rooms_db'
});

db.connect();

module.exports = db;
