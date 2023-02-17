const express = require ('express');
const path = require ('path');
const router = express.Router();
const productsControllers = require("../controllers/tiendaController");

router.get('/cuadro',productsControllers.cuadro);
router.get('/cuadro1',productsControllers.cuadro1);
router.get('/productoHombre',productsControllers.productoHombre);
router.get('/productoMujer',productsControllers.productoMujer);
router.get('/unisex',productsControllers.unisex);

module.exports=router;