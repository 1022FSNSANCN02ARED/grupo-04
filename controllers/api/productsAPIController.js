const path = require('path');
const db = require('../../src/database/models');
const sequelize = db.sequelize;
const { Op, where } = require("sequelize");
const moment = require('moment');
const { update } = require('../productsController');
const req = require('express/lib/request');



const Producto = db.Producto;
const Categoria = db.Categoria;

const productsAPIController = {

    detail: async (req,res) => {
     const product = await Producto.findByPk(req.params.id);
     let estado = req.session.userid;
     if (product != undefined){
        res.render("products/detail", { product,estado });  
       }
     else {

        res.redirect ('../notFound')
      }

    },

    tienda: (req, res) => {
        let estado = req.session.userid;
        
        Producto.findAll({
          include:  [{
            model: Categoria,
            as: 'categoria'
          }],
        })
          .then((productos) => {
          //res.json(productos)
           res.render('products/tienda', { productos, estado });
          })
          .catch((error) => {
            console.log(error);
          res.status(500).send('Error interno del servidor');
        });
      },
       createProduct: (req,res)=> {
        let estado = req.session.userid;
        res.render ('users/admin/create');
      },

       create : (req,res) =>{
       Producto.create({
         
            nombre: req.body.name,
            descripcion: req.body.description,
            precio: req.body.price,
            imagen: req.file ? req.file.filename : "default-image.png",
            color: req.body.colour,
            talle: req.body.size,
            categoria_id: req.body.category,

        })
        .then(()=> {
        return res.redirect('/products/tienda')})
        .catch(error => res.send(error));
        },

    update : async(req,res) => {

       await Producto.update({
            nombre: req.body.name,
            descripcion: req.body.description,
            precio: req.body.price,
            imagen: req.file ? req.file.filename : "default-image.png",
            color: req.body.colour,
            talle: req.body.size,
        
        }, {where: {id: req.params.id}})
        .then(()=> {
        return res.redirect('/products/tienda')})
        .catch(error => res.send(error));
        },


     destroy: (req,res) => {
        Producto.destroy({
        where:{
        id: req.params.id,
        }
        })
         return res.redirect('/products/tienda' )
     },

     edit: async (req, res) => {
      const product = await Producto.findByPk(req.params.id);
      let estado = req.session.userid;
      res.render("users/admin/edit", { product,estado });
      console.log(estado);
    },
        
      decoracion:async (req,res) => {
      let pDecoracion = await Producto.findAll({
        where:{
        categoria_id: 1,
        }
        })
        res.render('products/decoracion', {pDecoracion})  
     },

     hogar:async (req,res) => {
      let pHogar = await Producto.findAll({
        where:{
        categoria_id: 2,
        }
        })
        res.render('products/hogar', {pHogar})  
     },


     indumentaria:async (req,res) => {
      let pIndumentaria = await Producto.findAll({
        where:{
        categoria_id: 3,
        }
        })
        res.render('products/indumentaria', {pIndumentaria})  
     },


    }



module.exports = productsAPIController;