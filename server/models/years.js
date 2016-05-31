var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var State = require('./states.js')

var Year = new Schema ({
    yearNum : String,
    state : [{type : Schema.Types.ObjectId, ref : 'State'}]
});

module.exports = mongoose.model('years', Year);