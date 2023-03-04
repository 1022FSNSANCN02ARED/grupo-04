const path = require("path");
const { saveProduct, findById } = require("../data/products");
const products = require("../data/products");

module.exports = {
  Home: (req,res)=> {
    return res.render ('index');
  },
  index: (req, res) => {
    return res.render('index');
  },
  login:(req, res) => {
    return res.render('users/admin/login');
  },
  tienda:(req,res)=>{
    let estado = req.session.userid;
    return res.render('products/tienda', { products: products.findAll(),estado});
  },
  nosotros:(req,res)=>{
    return res.render('users/nosotros');
  },
  carrito:(req,res)=>{
   return res.render('users/carrito');
    
    },

  donaciones:(req,res)=>{
    return res.render('users/donaciones');
  },
};


 

    