const path = require("path");
const { saveProduct, findById } = require("../data/products");
const products = require("../data/products");

module.exports= {
  //Listado de productos/
    allProducts: (req, res) => {
      res.render('users/list', { products: products.findAll() });
     },
   //Formulario de creación de productos/
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
            image: req.file ? req.file.filename : "default-image.png",
            colour: req.body.colour,
            size: req.body.size,
        };

    products.saveProduct(product);
    res.redirect('/tienda')

    },
    dashboard: (req,res)=> {

        res.render ('users/dashboard');
      },
     detail: (req,res)=> {
        res.render ('users/detail');
      },
     destroy: (req, res) => {
      res.send('Eliminar')
    },
     
    edit: (req, res) => {
        const product = products.findById(req.params.id);
        res.render("products/edit-form", { product });
    },

     // const idUser = req.params.idUser;

     // res.send(idUser)
    //}
    
    

    };


