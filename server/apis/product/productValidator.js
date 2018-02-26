const validate = require('mongoose-validator');

const validator = {
  name: [
    validate({
      validator: 'isLength',
      arguments: [2, 1000],
      message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
    })
  ]
};

module.exports = validator;
