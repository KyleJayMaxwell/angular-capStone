var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var State = require('./states.js')

var yearSchema = new Schema ({
    yearNum : String,
    state : [{type : Schema.Types.ObjectId, ref : 'State'}]
});
var Year =  mongoose.model('Year', yearSchema);

module.exports = Year;