const express = require ('express');
const router = express.Router();
const mainController = require("../controllers/mainController.js");
const productsControllers = require("../controllers/productsController");

/* Rutas de generales*/
router.get("/carrito",mainController.carrito);
router.get("/home",mainController.Home);
router.get("/", mainController.index);
router.get("/login",mainController.login);
router.get("/registro",mainController.registro);
router.get("/tienda",mainController.tienda);


/*Rutas de productos*/

router.get("/create",productsControllers.create);
router.get("/list",productsControllers.allProducts);
router.get("/mas", productsControllers.create);
router.get("/new", productsControllers.new);


/recibir informacion del producto creado/


router.post ('/mainRouter', async (req,res)=>{

    const body = req.body;
    console.log(body);
})



module.exports = router;