//Importing class from models/product
const Product = require('../models/product');
const Cart = require('../models/cart');

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

  exports.getProduct = (req, res, next) =>  {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    });
  }

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
    Cart.getCart(cart => {
     Product.fetchAll(products => {
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(prod => prod.id === product.id);
        if (cartProductData) {
          cartProducts.push({productData: product, qty: cartProductData.qty});
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Learning Assets',
        products: cartProducts
      });
    });
  });
};

  exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, (product) => {
     Cart.addProduct(prodId, product.price);
    });
    res.redirect('/cart');
  };

  exports.postCartDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, product => {
      Cart.deleteProduct(prodId, product.productQty);
      res.redirect('/cart');
    });
  };

  exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
      path: '/orders',
      pageTitle: 'Your Pending Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Add'
  });
}