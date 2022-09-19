const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

/* Crea tu cv */
router.get('/creatucv', productController.creaTuCv);

/* Carrito */
router.get('/carrito', productController.carrito)

/* Product Details */
router.get('/details/:id', productController.productDetails);

/* Product Create */
router.get('/create', productController.create);
router.post('/create', productController.store);

/* Product Edit */
router.get('/edit/:id', productController.edit);
router.put('/edit/:id', productController.update)


module.exports = router;