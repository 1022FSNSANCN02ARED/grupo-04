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
        const product = {
            id: Date.now(),
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: Number(req.body.price),
            discount: Number(req.body.discount),
            image: req.file ? req.file.filename : "default-image.png",
        }
},
new: (req,res)=> {
        res.render ('users/sprint4');
      },

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
