const path = require('path');

const express = require('express');

const adminController = require ('../controllers/admin');

const router = express.Router();

// For the /admin/add-product => GET 
router.get('/add-product', adminController.getAddProduct);

// For the /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

//For the /admin/products => GET
router.get('/products', adminController.getProducts)


module.exports = router;

