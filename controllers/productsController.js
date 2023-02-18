const session = require("express-session");
const path = require("path");
const { saveProduct, findById } = require("../data/products");
const products = require("../data/products");

module.exports= {
      detail: (req, res) => {
       const product = products.findById(req.params.id);
       let estado = req.session.userid;
       if (product != undefined){
        res.render("products/detail", { product,estado });  
       }
      else {

        res.redirect ('../notFound')
      }
      },
     
   //Formulario de creación de productos/
    create: (req,res)=> {
        res.render ('users/admin/create');
       
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
  
    edit: (req, res) => {
      const product = products.findById(req.params.id);
      res.render("users/admin/edit", { product });
    },

    update: (req, res) => {
        const product = req.body;
        res.send(product);
    },
    destroy: (req, res) => {
        res.send(`deleting ${req.params.id}`);
    },
      

    };


