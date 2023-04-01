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

    list: (req, res) => {
        let estado = req.session.userid;
        Producto.findAll({
          include: {
            model: Categoria,
            as: 'categoria',
          },
          raw: true,
        })
          .then((productos) => {
           res.json(productos)
           // ('products/tienda', { productos, estado });
          })
          .catch((error) => console.log(error));
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
        return res.redirect('/tienda')})
        .catch(error => res.send(error));
        },

    update : (req,res) => {

        Producto.update({
            nombre: req.body.name,
            descripcion: req.body.description,
            precio: req.body.price,
            categoria_id: req.body.category,
        }, {where: {id: req.params.id}})
        .then(()=> {
        return res.redirect('/tienda' + req.params.id)})
        .catch(error => res.send(error));
        },
     destroy: (req,res) => {
         
     }
    
    
    
    
    }



module.exports = productsAPIController;