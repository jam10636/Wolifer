var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var imageschma = new Schema({
    place: String,
    id: String,
});
var People = mongoose.model('Images', imageschma );
module.exports = People;
