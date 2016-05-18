'use strict';

var db = require('../config/db');

// db.query('CREATE TABLE IF NOT EXISTS rooms (id AUTO_INCREMENT, name TEXT)');

exports.findAll = function(type, cb) {
  db.query(`SELECT * FROM ${type}`, function(err, rooms) {
    cb(err, rooms);
  });
};

exports.getOne = function(id, cb) {
  db.query(`SELECT items.id, items.description, items.value, categories.name FROM items INNER JOIN categories ON items.room=categories.id WHERE room = '${id}'`, (err, items) => {
    cb(err, items);
  });
};

// exports.findAllCategories = function(cb) {
//   db.query(`SELECT * FROM categories`, function(err, categories) {
//     cb(err, categories);
//   });
// };
