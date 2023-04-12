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
        let usuarioLogin = await User.findOne({
            where:{
                email: usuarioSession,
            }
        });
         let productosAgregados= await ProductosCarrito.findAll({
            where:{
            user_id: usuarioLogin.id,
            },
            include: {
              model: Producto,
              attributes: ['id', 'nombre', 'precio']
            }
            })
        res.render('users/carrito',{productosAgregados});
       },
    agregarCarrito:async(req,res)=>{
        let usuarioSession = session.userid;
        let product_id = req.params.id;
        let cantidad = req.body.cantidad;
        let user_id = await User.findOne({
            where:{
                email: usuarioSession,
            }
        });
        await ProductosCarrito
        .create(
            {
               cantidad: cantidad,
               productos_id: product_id,
               user_id: user_id.id,
            }
        )
        res.redirect("/products/tienda")
    },
    eliminarProducto:async(req,res)=>{
        let usuarioSession = session.userid;
        let user_id = await User.findOne({
            where:{
                email: usuarioSession,
            }
        });
            ProductosCarrito.destroy({
            where:{
            productos_id: req.params.id,
            user_id:user_id.id,
            }
            })
             res.redirect("/carrito" )
    }

}

module.exports = carritoAPIController;