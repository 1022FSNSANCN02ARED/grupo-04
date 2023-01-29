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
  registro:(req,res)=>{
    return res.render('users/registro');
  },
  tienda:(req,res)=>{
    return res.render('users/tienda');
  },
  carrito:(req,res)=>{
    return res.render('users/carrito');
  },  
};