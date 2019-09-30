//Importing class from models/product
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };
  
  exports.postAddProduct = (req, res, next) => {
    //Creating new object based on class blueprint
    //Note classes are blueprints
    const product = new Product(req.body.title, req.body.courseCode);
    product.save();
    res.redirect('/');
  };

  // Related to the shop route 
  exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Current Selections',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    }); 
   });
  };