const express = require('express');
const router = express.Router();

const userController = require('../controllers/usersController')

/* Login */
router.get('/login', userController.login);

/* Registarse */
router.get('/registrarse', userController.registro)

module.exports = router;