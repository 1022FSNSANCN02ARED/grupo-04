// *Require's *

const express = require("express");
const router = express.Router();
const productsControllers = require("../controllers/productsController");
// *Controller Require *
//const productsController = require("../controllers/productsController");
router.get('/create',productsControllers.create)

/*1. 
/products (GET)
Listado de productos

router.get();



3. 
/products/:id (GET)
Detalle de un producto particular

router.get("/:id", );

4. 
/products (POST)
Acción de creación (a donde se envía el formulario)

router.post("/", productsController.store);

5. 
/products/:id/edit (GET)
Formulario de edición de productos

router.get("/:id/edit",);


6. 
/products/:id (PUT)
Acción de edición (a donde se envía el formulario):

router.put("/:id", );


7. 
/products/:id (DELETE)

router.delete("/:id",);
Acción de borrado */


module.exports = router;




