const express = require ('express');
const router = express.Router();

const mainController = require("../controllers/mainController.js");
const productsController = require("../controllers/productsController.js");

/* Rutas de mainController*/
router.get("/carrito",mainController.carrito);
router.get("/home",mainController.Home);
router.get("/", mainController.index);
router.get("/login",mainController.login);
router.get("/registro",mainController.registro);
router.get("/tienda",mainController.tienda);

/* Rutas de productsController */
router.get("/list",productsController.allProducts);
router.get("/create", productsController.create);


module.exports = router;