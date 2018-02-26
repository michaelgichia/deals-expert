const mongoose = require('mongoose');
const Product = require('./productModel');
const merge = require('lodash/merge');
const ObjectId = mongoose.Types.ObjectId;

exports.params = (req, res, next, id) => {
  const query = {
    $or: [{ slug: id }]
  };

  if (ObjectId.isValid(id)) {
    query.$or.push({ _id: id });
  }

  Product.findOne(query).exec((err, product) => {
    if (!err && product) {
      req.product = product;
      next();
    } else {
      next(new Error('Product not found.'));
    }
  });
};

exports.post = (req, res, next) =>
  Product.create(req.body)
    .then(product => res.json(product))
    .catch(err => next(err));

exports.get = (req, res, next) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => next(err));
};

exports.put = (req, res, next) => {
  merge(req.product, req.body);
  req.product.save((err, saved) => {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  });
};

exports.delete = (req, res, next) => {
  req.product
    .remove()
    .then(product => res.json(product))
    .catch(err => next(err));
};

exports.getOne = (req, res, next) => res.json(req.product);
