const path = require("path");
const { saveProduct, findById } = require("../data/products");
const products = require("../data/products");
const fs = require("fs");
const carritoFilePath = path.resolve("data/carrito.json");
const productosfilepath = path.resolve('data/productsDatos.json')

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
  nosotros:(req,res)=>{
    return res.render('users/nosotros'); 
  },
  carrito:(req,res)=>{
    let id = req.params.id;
    let productos = products.findById(id);
    let pCarrito = {
      id: Date.now(),
      usuario: session.userid,
      name: productos.nombre,
      price: productos.precio,
    }
    let carritoFileContent = fs.readFileSync(carritoFilePath, "utf-8");
    let carrito = JSON.parse(carritoFileContent);
    carrito.push(pCarrito);
    carritoFileContent = JSON.stringify(carrito, null, 4);
    fs.writeFileSync(carritoFilePath, carritoFileContent, "utf-8");
    res.redirect("/tienda")
    },
  vistaCarrito: (req,res)=>{
    let usuarioSession = session.userid;
    let carritoArchivo = fs.readFileSync(carritoFilePath, "utf-8");
    let carritoTotal =JSON.parse(carritoArchivo);
    let agregados= carritoTotal.filter( (carrito)=>carrito.usuario == usuarioSession );
    let total = 0;
    for(let i =0;i < agregados.length; i++){ 
      total = total + agregados[i].price;}
    res.render('users/carrito',{agregados,total});
  },
 destroyProductosCarrito:(req,res)=>{
  let id = req.params.id;
  let jsonData = fs.readFileSync(carritoFilePath);
  let data = JSON.parse(jsonData);
  let removed = data.filter(p => p.id != id);
  fs.writeFileSync(carritoFilePath,(JSON.stringify (removed)));
 
  res.redirect('/carrito');
 },

  donaciones:(req,res)=>{
    return res.render('users/donaciones');
    
  },
};


 

    