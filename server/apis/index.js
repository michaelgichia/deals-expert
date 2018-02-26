const router = require('express').Router();

router.use('/users', require('./user/userRoutes'));
router.use('/product', require('./product/productRoutes'));
router.use('/category', require('./category/categoryRoutes'));

module.exports = router;
