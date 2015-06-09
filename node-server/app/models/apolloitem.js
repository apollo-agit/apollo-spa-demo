//apolloitem.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ApolloSPAItemSchema = new Schema({
	id: String,
	apolloItemName: String,
	apolloItemDesc: String,
	apolloItemAmount: Number
});

module.exports = mongoose.model('ApolloSPAItem', ApolloSPAItemSchema);