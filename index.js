/**
 * Created by Sagar Singh on 4/15/2017.
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');   // to hold te value written in the front end
var mongoose = require('mongoose');
var Book = require('./book.model');

var db = 'mongodb://localhost/mongoexample';

mongoose.connect(db);

var port = 8001;

app.listen(port, function () {
   console.log('app listening on port:'+ port);
});