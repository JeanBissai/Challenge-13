// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
router.use('/categories', categoryRoutes);
// Categories have many Products
router.use('/products', productRoutes);
// Products belongToMany Tags (through ProductTag)
router.use('/tags', tagRoutes);
// Tags belongToMany Products (through ProductTag)
router.user('/products', productRoutes)
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
