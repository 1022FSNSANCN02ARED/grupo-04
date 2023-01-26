const express = require ('express');
const router = express.Router();

const mainController = require("../controllers/mainController.js");
const mainControllerproduct = require("../controllers/productsController.js");

router.get("/carrito",mainController.carrito);
router.get("/home",mainController.Home);
router.get("/", mainController.index);
router.get("/login",mainController.login);
router.get("/registro",mainController.registro);
router.get("/tienda",mainController.tienda);


router.get("/create", mainControllerproduct.create);


module.exports = router;