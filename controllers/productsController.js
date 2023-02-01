const path = require("path")
const products = require("../data/products");

module.exports= {
  //Listado de productos/
    allProducts: (req, res) => {
      res.render("products/list", { products: products.findAll() });
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
            discount: Number(req.body.discount),
            image: req.file ? req.file.filename : "default-image.png",
        }
    },
    new: (req,res)=> {
        res.render ('users/sprint4');
      },

    };


