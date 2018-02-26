const validate = require('mongoose-validator');

const validator = {
  title: [
    validate({
      validator: 'isLength',
      arguments: [2, 50],
      message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
    })
  ],
  description: [
    validate({
      validator: 'isLength',
      arguments: [2, 10000],
      message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
    })
  ]
};

module.exports = validator;
