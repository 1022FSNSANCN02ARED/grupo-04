const path = require('path')
const products = require("../data/products");

module.exports= {
  /*Listado de productos*/
    allProducts: (req, res) => {
      res.render("products/list", { products: products.findAll() });
     },
    /*Formulario de creación de productos*/
    create: (req,res)=> {
        res.render ('users/create');
      },
   store: (req, res) => {
        const product = req.body;
        res.send(product);
    },
   new: (req,res)=> {
        res.render ('users/sprint4');
      },
     detail: (req,res)=> {
        res.render ('users/detail');
      },
     destroy: (req, res) => {
        res.send(`deleting ${req.params.id}`);
    },
     /*traer un producto con id*/
     
      

};

/*

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
