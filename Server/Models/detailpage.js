var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var detailschema = new Schema({
    place: String,
    location:String,
    long: Number,
    Lat: Number,
    descrption:String
});
var detail = mongoose.model('pagedetail', detailschema );
module.exports = detail;
