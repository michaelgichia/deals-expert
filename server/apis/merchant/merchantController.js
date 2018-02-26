const Merchant = require('./merchantModel');
const merge = require('lodash/merge');

exports.params = (req, res, next, id) =>
  Merchant.findById(id).exec((err, merchant) => {
    if (!err && merchant) {
      req.merchant = merchant;
      next();
    } else {
      next(new Error('Merchant not found.'));
    }
  });

exports.post = (req, res, next) =>
  Merchant.create(req.body)
    .then(merchant => res.json(merchant))
    .catch(err => next(err));

exports.get = (req, res, next) => {
  Merchant.find()
    .then(merchants => res.json(merchants))
    .catch(err => next(err));
};

exports.put = (req, res, next) => {
  merge(req.merchant, req.body);
  req.merchant.save((err, saved) => {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  });
};

exports.delete = (req, res, next) => {
  req.merchant
    .remove()
    .then(merchant => res.json(merchant))
    .catch(err => next(err));
};

exports.getOne = (req, res, next) => res.json(req.merchant);
