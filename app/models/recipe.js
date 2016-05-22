// app/models/asset.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var recipeSchema = new Schema({
  title: String,
  url: String,
  summary: String,
  ingredients: Array,
  time: { prepTime: Number, cookTime: Number },
  steps: Array,
  notes: String,
  created_at: Date,
  updated_at: Date
  // TODO: user ?
});

var Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
