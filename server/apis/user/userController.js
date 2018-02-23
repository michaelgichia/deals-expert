const User = require("./userModel");
const _ = require("lodash");
const signToken = require("../../auth").signToken;

exports.params = function(req, res, next, id) {
  User.findById(id)
    .select("-password")
    .exec()
    .then(
      user => {
        if (!user) {
          next(new Error("No user with that id"));
        } else {
          req.user = user;
          next();
        }
      },
      err => {
        next(err);
      }
    );
};

exports.get = function(req, res, next) {
  User.find({})
    .select("-password")
    .exec((err, data) => {
      if (err) return next(err);
      else res.json(data);
    });
};

exports.getOne = function(req, res, next) {
  const user = req.user.toJson();
  res.json(user);
};

exports.put = function(req, res, next) {
  const user = req.user;

  const update = req.body;

  _.merge(user, update);

  user.save((err, response) => {
    if (err) {
      return next(err);
    } else {
      res.json(response);
    }
  });
};

exports.post = function(req, res, next) {
  const newUser = new User(req.body);

  newUser.save((err, user) => {
    console.log({ err });
    if (err) {
      next(err);
      return;
    }

    const token = signToken(user._id);
    res.json({ token });
  });
};

exports.delete = function(req, res, next) {
  req.user.remove((err, removed) => {
    if (err) {
      next(err);
    } else {
      res.json(removed.toJson());
    }
  });
};

exports.me = function(req, res) {
  res.json(req.user.toJson());
};
