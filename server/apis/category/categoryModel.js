const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('./categoryValidator');

const CategorySchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      validate: validator.title
    },
    description: {
      type: String,
      validate: validator.description
    },
    isFeatured: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Category', CategorySchema);
