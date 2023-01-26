const path = require('path')

module.exports= {
   
    /*Formulario de creación de productos*/
    create: (req,res)=> {
        res.render ('users/productForm');
      },
};
/*
1. /products (GET)
Listado de productos
3. /products/:id (GET)
Detalle de un producto particular
4. /products (POST)
Acción de creación (a donde se envía el formulario)
5. /products/:id/edit (GET)
Formulario de edición de productos
6. /products/:id (PUT)
Acción de edición (a donde se envía el formulario):
7. /products/:id (DELETE)
Acción de borrado*/
