const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('./merchantValidator');

const MerchantSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      validate: validator.title
    },
    imageUrl: {
      type: String,
      validate: validator.imageUrl
    },
    backlink: {
      type: String,
      validate: validator.backlink
    },
    description: {
      type: String,
      validate: validator.description
    },
    about: {
      type: String,
      validate: validator.about
    },
    public_id: {
      type: String,
      validate: validator.public_id
    },
    isFeatured: {
      type: Boolean,
      default: false
    },
    subCategory: [
      {
        type: Schema.Types.ObjectId,
        ref: 'SubCategory'
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Merchant', MerchantSchema);
