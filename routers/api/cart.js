const express = require('express');
const router = express.Router();
const path = require('path');
const carritoAPIController = require('../../controllers/api/carritoAPIController');

router.get("/carrito",carritoAPIController.vistaCarrito);

module.exports = router;