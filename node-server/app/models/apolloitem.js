//apolloitem.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ApolloSPAItemSchema = new Schema({
	apolloItemName: {type: String, required: true},
	apolloItemDesc: {type: String, max: 4000},
	apolloItemAmount: Number
});

module.exports = mongoose.model('ApolloSPAItem', ApolloSPAItemSchema);


/*
{ id:
{ enumValues: [],
  regExp: null,
  path: 'id',
  instance: 'String',
  validators: [ [Object] ],
  setters: [],
  getters: [],
  options: { type: [Function: String], required: true },
  _index: null,
  isRequired: true,
  requiredValidator: [Function] },
apolloItemName:
{ enumValues: [],
  regExp: null,
  path: 'apolloItemName',
  instance: 'String',
  validators: [ [Object] ],
  setters: [],
  getters: [],
  options: { type: [Function: String], required: true },
  _index: null,
  isRequired: true,
  requiredValidator: [Function] },
apolloItemDesc:
{ enumValues: [],
  regExp: null,
  path: 'apolloItemDesc',
  instance: 'String',
  validators: [],
  setters: [],
  getters: [],
  options: { type: [Function: String], max: 4000 },
  _index: null },
apolloItemAmount:
{ path: 'apolloItemAmount',
  instance: 'Number',
  validators: [],
  setters: [],
  getters: [],
  options: { type: [Function: Number] },
  _index: null },
_id:
{ path: '_id',
  instance: 'ObjectID',
  validators: [],
  setters: [ [Function: resetId] ],
  getters: [],
  options: { type: [Object], auto: true },
  _index: null,
  defaultValue: [Function: defaultId] },
__v:
{ path: '__v',
  instance: 'Number',
  validators: [],
  setters: [],
  getters: [],
  options: { type: [Function: Number] },
  _index: null } }

*/