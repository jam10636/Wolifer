var express = require('express');
var app = express();
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1:27017/test';
mongoose.connect(mongoDB);
var db = mongoose.connection;
var User = require('./Models/models');
var Image = require('./Models/imagemod');
var bodyParser = require('body-parser');
var data=require('./Models/file');
/*var image=
{
  place:'',
  id:'',
}
for(var i=0;i<data.length;i++)
{
  image.place=data[i][0];
  image.id=data[i][1];
  var imagedata=new Image(image);
  imagedata.save(function(err) {
  if (err) throw err;
   console.log("User saved!!");
 });
}*/

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
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
var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
});
