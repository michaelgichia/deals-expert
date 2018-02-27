const mongoose = require('mongoose');
const validator = require('./bannerValidator');
const Schema = mongoose.Schema;

const BannerSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    validate: validator.title
  },
  backlink: {
    type: String,
    validate: validator.title
  },
  description: {
    type: String,
    validate: validator.description
  },
  imageUrl: {
    type: String,
    validate: validator.imageUrl
  },
  public_id: {
    type: String,
    validate: validator.public_id
  },
  isFeatured: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Banner', BannerSchema);
