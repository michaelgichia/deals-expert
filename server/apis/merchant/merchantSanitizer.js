const requestSanitizer = require('request-sanitizer')();
const validator = requestSanitizer.validator;

requestSanitizer.setOptions({
  body: {
    title: [validator.escape, validator.ltrim],
    description: [validator.escape, validator.ltrim],
    isFeatured: [validator.escape],
    subCategory: [validator.escape],
    imageUrl: [validator.escape, validator.ltrim],
    backlink: [validator.escape, validator.ltrim],
    about: [validator.escape, validator.ltrim],
    public_id: [validator.escape, validator.ltrim]
  }
});

module.exports = requestSanitizer.sanitize;
