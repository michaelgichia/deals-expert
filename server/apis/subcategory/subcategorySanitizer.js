const requestSanitizer = require('request-sanitizer')();
const validator = requestSanitizer.validator;

requestSanitizer.setOptions({
  body: {
    title: [validator.escape, validator.ltrim],
    description: [validator.escape, validator.ltrim],
    isFeatured: [validator.escape],
    category: [validator.escape]
  }
});

module.exports = requestSanitizer.sanitize;
