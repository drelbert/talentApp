//Importing class from models/product
const Product = require('../models/product');

  // Related to the shop and the admin/products routes
  exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Selections',
      path: '/products'
    }); 
   });
  };

  exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Current Selections',
        path: '/'
      }); 
   });
  };

  exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
      path: '/cart',
      pageTitle: 'Your Learning Assets'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Add'
  });
}