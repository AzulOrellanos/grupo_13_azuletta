const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

/* Crea tu cv */
router.get('/creatucv', productController.creaTuCv);

/* Carrito */
router.get('/carrito', productController.carrito)

/* Product Details */
router.get('/product/details/:id', productController.productDetails);

/* Product Create */
router.get('/product/create', productController.productCreate);


module.exports = router;