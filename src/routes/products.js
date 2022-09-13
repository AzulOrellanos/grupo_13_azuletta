const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

/* Crea tu cv */
router.get('/creatucv', productController.creaTuCv);

/* Carrito */
router.get('/carrito', productController.carrito)


module.exports = router;