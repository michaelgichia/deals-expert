const Category = require('./categoryModel');
const merge = require('lodash/merge');

exports.params = (req, res, next, id) =>
  Category.findById(id).exec((err, category) => {
    if (!err && category) {
      req.category = category;
      next();
    } else {
      next(new Error('Category not found.'));
    }
  });

exports.post = (req, res, next) =>
  Category.create(req.body)
    .then(category => res.json(category))
    .catch(err => next(err));

exports.get = (req, res, next) => {
  Category.find()
    .then(categorys => res.json(categorys))
    .catch(err => next(err));
};

exports.put = (req, res, next) => {
  merge(req.category, req.body);
  req.category.save((err, saved) => {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  });
};

exports.delete = (req, res, next) => {
  req.category
    .remove()
    .then(category => res.json(category))
    .catch(err => next(err));
};

exports.getOne = (req, res, next) => res.json(req.category);
