const Banner = require('./bannerModel');
const merge = require('lodash/merge');

exports.params = (req, res, next, id) =>
  Banner.findById(id).exec((err, banner) => {
    if (!err && banner) {
      req.banner = banner;
      next();
    } else {
      next(new Error('Banner not found.'));
    }
  });

exports.post = (req, res, next) =>
  Banner.create(req.body)
    .then(banner => res.json(banner))
    .catch(err => next(err));

exports.get = (req, res, next) => {
  Banner.find()
    .then(banners => res.json(banners))
    .catch(err => next(err));
};

exports.put = (req, res, next) => {
  merge(req.banner, req.body);
  req.banner.save((err, saved) => {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  });
};

exports.delete = (req, res, next) => {
  req.banner
    .remove()
    .then(banner => res.json(banner))
    .catch(err => next(err));
};

exports.getOne = (req, res, next) => res.json(req.banner);
