const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const config = require('../config/config');

const checkToken = expressJwt({ secret: config.secrets.jwt });
const User = require('../apis/user/userModel');

exports.decodeToken = function() {
  return function(req, res, next) {
    if (req.query && req.query.hasOwnProperty('access_token')) {
      req.headers.authorization = `Bearer ${req.query.access_token}`;
    }

    checkToken(req, res, next);
  };
};

exports.getFreshUser = function() {
  return function(req, res, next) {
    User.findById(req.user._id).exec((err, user) => {
      if (err) {
        res.status(401).send('Unauthorized');
      }
      req.user = user;
      next();
    });
  };
};

exports.verifyUser = function() {
  return function(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
      res.status(400).send('You need a username and password');
      return;
    }

    User.findOne({ username }).then(
      (user) => {
        if (!user) {
          res.status(401).send('No user with the given username');
        } else if (!user.authenticate(password)) {
          res.status(401).send('Wrong password');
        } else {
          req.user = user;
          next();
        }
      },
      (err) => {
        next(err);
      }
    );
  };
};

exports.signToken = function(id) {
  return jwt.sign({ _id: id }, config.secrets.jwt, {
    expiresIn: config.expireTime
  });
};
