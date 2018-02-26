const SubCategory = require('./subcategoryModel');
const merge = require('lodash/merge');

exports.params = (req, res, next, id) =>
  SubCategory.findById(id).exec((err, subcategory) => {
    if (!err && subcategory) {
      req.subcategory = subcategory;
      next();
    } else {
      next(new Error('Subcategory not found.'));
    }
  });

exports.post = (req, res, next) =>
  SubCategory.create(req.body)
    .then(subcategory => res.json(subcategory))
    .catch(err => next(err));

exports.get = (req, res, next) => {
  SubCategory.find()
    .then(subcategories => res.json(subcategories))
    .catch(err => next(err));
};

exports.put = (req, res, next) => {
  merge(req.subcategory, req.body);
  req.subcategory.save((err, saved) => {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  });
};

exports.delete = (req, res, next) => {
  req.subcategory
    .remove()
    .then(subcategory => res.json(subcategory))
    .catch(err => next(err));
};

exports.getOne = (req, res, next) => res.json(req.subcategory);
