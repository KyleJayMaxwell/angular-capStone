var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Mixed = mongoose.Schema.Types.Mixed;

var stateSchema = new Schema({
    name : String,
    abbreviation: String,
    producer : [{type : Mixed}]
});

var State = mongoose.model('State', stateSchema);

module.exports = State;