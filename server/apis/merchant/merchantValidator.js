const validate = require('mongoose-validator');

const validator = {
  title: [
    validate({
      validator: 'isLength',
      arguments: [2, 100],
      message: 'Name should be between {ARGS[0]} and {ARGS[1]} character'
    })
  ],
  imageUrl: [
    validate({
      validator: 'isLength',
      arguments: [2, 500],
      message: 'Name should be between {ARGS[0]} and {ARGS[1]} character'
    })
  ],
  backlink: [
    validate({
      validator: 'isLength',
      arguments: [2, 500],
      message: 'Name should be between {ARGS[0]} and {ARGS[1]} character'
    })
  ],
  description: [
    validate({
      validator: 'isLength',
      arguments: [2, 10000],
      message: 'Name should be between {ARGS[0]} and {ARGS[1]} character'
    })
  ],
  about: [
    validate({
      validator: 'isLength',
      arguments: [2, 10000],
      message: 'Name should be between {ARGS[0]} and {ARGS[1]} character'
    })
  ],
  public_id: [
    validate({
      validator: 'isLength',
      arguments: [2, 500],
      message: 'Name should be between {ARGS[0]} and {ARGS[1]} character'
    })
  ]
};

module.exports = validator;
