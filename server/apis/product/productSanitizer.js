const requestSanitizer = require('request-sanitizer')();
const validator = requestSanitizer.validator;

requestSanitizer.setOptions({
  body: {
    title: [validator.escape, validator.ltrim],
    description: [validator.escape, validator.ltrim],
    backlink: [validator.escape, validator.ltrim],
    percentage: [validator.escape, validator.ltrim],
    coupon: [validator.escape, validator.ltrim],
    expire: [validator.escape],
    image: [validator.escape, validator.ltrim],
    themeColor: [validator.escape, validator.ltrim],
    isFeatured: [validator.escape],
    isShipped: [validator.escape],
    public_id: [validator.escape],
    isCoupon: [validator.escape],
    isActive: [validator.escape]
  }
});

module.exports = requestSanitizer.sanitize;
