'use strict';

const PORT = process.env.PORT || 4000;

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('public'));

app.route('/')
.get((req, res, next) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.use('/rooms', require('./routes/rooms'));



// 404 handler
app.use((req, res, next) => {
  res.status(404).send("error 404 and shit\n");
});

// create server, and listen to PORT
app.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);
});
