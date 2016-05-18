'use strict';

var express = require('express');
var router = express.Router();

var Rooms = require('../models/room');

// /rooms/
router.get('/', (req, res) => {
  Rooms.findAll(req.query.type, function(err, rooms) {
    if(err) return res.status(400).send(err);
    res.send(rooms);
  });
});

// router.get('/categories', (req, res) => {
//   Rooms.findAllCategories((err, categories => {
//     if(err) return res.status(400).send(err);
//     res.send(categories);
//   }));
// });

router.get('/getoneroom', (req, res) => {
  Rooms.getOne(req.query.id, (err, items) => {
    if(err) return res.status(400).send(err);
    res.send(items);
  });
});









module.exports = router;
