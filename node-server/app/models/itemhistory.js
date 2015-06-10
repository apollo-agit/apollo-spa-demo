//itemhistory.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemHistorySchema = new Schema({
	apolloItemId: String,
	itemUpdateDate: {type: Date, default: Date.now},
	itemUpdateBy: String,
	itemUpdateNote: String
});

module.exports = mongoose.model('ItemHistory', ItemHistorySchema);