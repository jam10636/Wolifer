var express = require('express');
var app = express();
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1:27017/test';
mongoose.connect(mongoDB);
var db = mongoose.connection;
var bodyParser = require('body-parser');
var data=require('./Models/file');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var User = require('./Models/models');
var Image = require('./Models/imagemod');
var detail=require('./Models/detailpage');



app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.post('/addname', function (req, res) {
  var person=new User(req.body.user);
  console.log(person.name);
  person.save(function(err) {
  if (err) throw err;
   res.json("User saved!!");
 });
});
app.get('/find', function (req, res) {
  Image.find({}, function(err, user) {
    if (err) throw err;
    res.json(user);
  });
});
app.get('/detail', function (req, res) {
  detail.find({place:req.query.id}, function(err, user) {
    if (err) throw err;
    res.json(user);
  });
});
var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
});
