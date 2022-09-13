const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

/* Home */
router.get('/', mainController.home);

/* Sobre Nosotros */
router.get('/sobrenosotros', mainController.sobreNosotros);

/* Contacto */
router.get('/contacto', mainController.contacto)

module.exports = router;