var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Mixed = mongoose.Schema.Types.Mixed;

var State = new Schema({
    name : String,
    abbreviation: String,
    producer : [{type : Mixed}]
});



module.exports = mongoose.model('states', State);