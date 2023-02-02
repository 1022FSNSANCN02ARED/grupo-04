const express = require ('express');
const router = express.Router();
const mainController = require("../controllers/mainController.js");
const productRouter = require("./productRouter");

/* Rutas de generales*/
router.get("/carrito",mainController.carrito);
router.get("/home",mainController.Home);
router.get("/", mainController.index);
router.get("/login",mainController.login);
router.get("/registro",mainController.registro);
router.get("/tienda",mainController.tienda);


/*Rutas de productos*/
router.use("/products",productRouter);


/*recibir informacion del producto creado*/


router.post ('/mainRouter', async (req,res)=>{

    const body = req.body;
    console.log(body);
})



module.exports = router;