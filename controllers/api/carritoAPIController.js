const path = require('path');
const db = require('../../src/database/models');
const sequelize = db.sequelize;
const { Op, where } = require("sequelize");
const moment = require('moment');
const { update } = require('../productsController');
const req = require('express/lib/request');



const Producto = db.Producto;
const Categoria = db.Categoria;
const ProductosCarrito = db.Productocarrito;
const User = db.User;

const carritoAPIController = {
    vistaCarrito: async (req,res)=>{
        let usuarioSession = session.userid;
        let total = 15;
        let usuarioLogin = await User.findOne({
            where:{
                email: usuarioSession,
            }
        });
         let productosAgregados= await ProductosCarrito.findAll({
            where:{
            user_id: usuarioLogin.id,
            }
            })
        res.render('users/carrito',{productosAgregados,total});
       },

}

module.exports = carritoAPIController;