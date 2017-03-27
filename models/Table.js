var mongoose = require('mongoose');

var TableSchema = new mongoose.Schema({
  name: String,
  age: Number,
  qualification:String,
  place:String,
  completed: Boolean,
  note: String
});


module.exports = mongoose.model('Table', TableSchema);
