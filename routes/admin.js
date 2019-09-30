const path = require('path');

const express = require('express');

const productsController = require ('../controllers/products');

const router = express.Router();

// For the /admin/add-product => GET 
router.get('/add-product', productsController.getAddProduct);

// For the /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;

