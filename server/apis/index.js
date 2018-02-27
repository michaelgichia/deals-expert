const router = require('express').Router();

router.use('/users', require('./user/userRoutes'));
router.use('/banner', require('./banner/bannerRoutes'));
router.use('/product', require('./product/productRoutes'));
router.use('/merchant', require('./merchant/merchantRoute'));
router.use('/category', require('./category/categoryRoutes'));
router.use('/subcategory', require('./subcategory/subcategoryRoute'));

module.exports = router;
