const router = require('express').Router();

router.use('/users', require('./user/userRoutes'));
router.use('/merchant', require('./merchant/merchantRoute'));
router.use('/product', require('./product/productRoutes'));
router.use('/category', require('./category/categoryRoutes'));
router.use('/subcategory', require('./subcategory/subcategoryRoute'));

module.exports = router;
