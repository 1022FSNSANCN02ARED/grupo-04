const express = require ('express');
const router = express.Router();
const mainController = require("../controllers/mainController.js");
const productRouter = require("./productRouter");



/* Rutas de mainController*/

/* Rutas de generales*/

router.get("/carrito",mainController.carrito);
router.get("/home",mainController.Home);
router.get("/", mainController.index);
router.get("/login",mainController.login);
router.get("/registro",mainController.registro);
router.get("/tienda",mainController.tienda);


router.use("/products",productRouter);

router.post ('/list', async (req,res)=>{

    const body = req.body;
    console.log(body);
})
/*recibir informacion del producto creado*/


// Ruta para formulario de edición de productos


module.exports = router;