const session = require("express-session");
const path = require("path");
const fs = require("fs");
const { saveProduct, findById } = require("../data/products");
const products = require("../data/products");
const productsFilePath =path.resolve("data/productsDatos.json")


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
        let estado = req.session.userid;
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
      let id = req.params.id - 1;

      let jsonData = fs.readFileSync(productsFilePath);
      let data = JSON.parse(jsonData);
      data[id]["name"] = req.body.name;
      data[id]["description"] = req.body.description;
      data[id]["category"] = req.body.category;
      data[id]["price"] = Number(req.body.price);
      data[id]["filename"] = req.file ? req.file.filename : "default-image.png";
      data[id]["colour"] = req.body.colour;
      data[id]["size"] = req.body.size;

      fs.writeFileSync(productsFilePath,(JSON.stringify (data)));
     
      res.redirect('/tienda');

    },
    destroy: (req, res) => {
      let id = req.params.id;
      let jsonData = fs.readFileSync(productsFilePath);
      let data = JSON.parse(jsonData);
      let removed = data.filter(p => p.id != id);
      fs.writeFileSync(productsFilePath,(JSON.stringify (removed)));
     
      res.redirect('/tienda');
      
      
    },
      

    };


