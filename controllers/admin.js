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
    const title = req.body.title;
    const courseCode = req.body.courseCode;
    const description = req.body.description;
    const date = req.body.date;
    const product = new Product(title, courseCode, description, date);
    product.save();
    res.redirect('/');
  };

  exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/products', {
          prods: products,
          pageTitle: 'Admin Products',
          path: '/admin/products'
        }); 
     });
  }