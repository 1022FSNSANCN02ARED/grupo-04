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
router.get("/list", productsController.allProducts);

/*crear un producto*/
router.get("/create", productsController.create);

/*no se porque se creo esto*/
router.get("/mas", productsController.create);


/*controlador de todas las operaciones*/
router.get("/new", productsController.new);

/* detalle de un producto*/
router.get('/detail',productsController.detail);

/*borrar un producto*/
router.delete("/:id", productsController.destroy);

/*editar un producto*/





/*recibir informacion del producto creado*/
router.post("/mainRouter", productsController.store);

// Ruta para formulario de edición de productos


module.exports = router;