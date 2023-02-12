const path = require("path");

module.exports = {
  Home: (req,res)=> {
    return res.render ('index');
  },
  index: (req, res) => {
    return res.render('index');
  },
  login:(req, res) => {
    return res.render('users/login');
  },
  tienda:(req,res)=>{
    return res.render('users/tienda');
  },
  nosotros:(req,res)=>{
    return res.render('users/nosotros');
  },
  carrito:(req,res)=>{
    return res.render('users/carrito');
  },  
};