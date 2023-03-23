const express = require ('express');
const router = express.Router();
const mainController = require("../controllers/mainController.js");
const productRouter = require("./productRouter");
const userLoginRouter = require ("./userLoginRouter");
const userRegisterRouter = require('./userRegisterRouter');
const apiUsersRouter = require('./api/users')



/* Rutas de mainController*/

/* Rutas de generales*/

router.get("/carrito",mainController.vistaCarrito);
router.post("/carrito/:id",mainController.carrito);
router.delete("/:id",mainController.destroyProductosCarrito);
router.get("/home",mainController.Home);
router.get("/", mainController.index);
router.get("/tienda",mainController.tienda);
router.get("/nosotros",mainController.nosotros);
router.get("/donaciones",mainController.donaciones);
router.get('/decoracion', mainController.decoracion);
router.get('/hogar', mainController.hogar);
router.get('/indumentaria', mainController.indumentaria);




router.use("/products",productRouter);

router.use("/user", userLoginRouter);
router.use("/user",userRegisterRouter);

router.use('/registro',apiUsersRouter);



router.post ('/list', async (req,res)=>{

    const body = req.body;
    console.log(body);
})
/*recibir informacion del producto creado*/


// Ruta para formulario de edición de productos


module.exports = router;