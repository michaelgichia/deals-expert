const mongoose = require('mongoose');
const slugify = require('../../utils/slugify');
const validator = require('./productValidator');
const logger = require('../../utils/logger');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    validate: validator.name,
    unique: true,
    max: 200
  },
  slug: { type: String, index: true },
  description: {
    type: String,
    trim: true,
    max: 10000
  },
  backlink: {
    type: String,
    trim: true,
    min: 1,
    max: 1000
  },
  percentage: {
    type: String,
    min: 0,
    max: 99
  },
  // subCategory: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'SubCategory',
  //     autopopulate: true
  //   }
  // ],
  // category: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Category',
  //   autopopulate: true
  // },
  // merchant: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Merchant',
  //   autopopulate: true
  // },
  coupon: {
    type: String
  },
  expire: {
    type: Date
  },

  image: {
    type: String,
    trim: true,
    required: true
  },
  themeColor: {
    type: String,
    max: 50
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  isShipped: {
    type: Boolean,
    trim: false
  },
  public_id: {
    type: String,
    max: 1000
  },
  isCoupon: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  tags: [
    {
      type: String,
      required: true
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

productSchema.pre('save', function(next) {
  try {
    this.slug = slugify(this.title);
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      logger.error(error);
    }
  }
  next();
});

module.exports = mongoose.model('Product', productSchema);
