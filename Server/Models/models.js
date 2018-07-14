var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SomeModelSchema = new Schema({
    place: String,
    location: String,
});
var People = mongoose.model('People', SomeModelSchema );
module.exports = People;
