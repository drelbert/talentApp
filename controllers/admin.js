const Product = require('../models/product');


exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      editing: false
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
    product
       .save()
       .then(result => {
         console.log('Created Product');
         res.redirect('/admin/products');
       })
       .catch(err => {
         console.log(err);
       });
  };

  /*
  exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
      return res.redirect('/');
    }
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product
      });
    });
  };

  exports.postEditProduct = (req, res, next) => {
    //Fetch info for prod
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedCourseCode = req.body.courseCode;
    const updatedDescription = req.body.description;
    const updatedDate = req.body.date;
    const updatedProduct = new Product(
      prodId,
      updatedTitle, 
      updatedCourseCode,
      updatedDescription, 
      updatedDate 
      );
    //Create new prod instance and then save
    updatedProduct.save();
    res.redirect('/admin/products');
  }

  exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/products', {
          prods: products,
          pageTitle: 'Admin Products',
          path: '/admin/products'
        }); 
     });
  };

  exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.deleteById(prodId);
    res.redirect('/admin/products');
  };
  */