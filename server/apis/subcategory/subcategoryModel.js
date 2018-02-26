const mongoose = require('mongoose');
const validator = require('./subcategoryValidator');
const Schema = mongoose.Schema;

const SubCategorySchema = new Schema(
  {
    title: {
      type: String,
      validate: validator.title,
      unique: true,
      max: 100
    },
    description: {
      type: String,
      validate: validator.description
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('SubCategory', SubCategorySchema);
