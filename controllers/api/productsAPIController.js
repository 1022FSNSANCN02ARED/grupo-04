const path = require('path');
const db = require('../../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


const Producto = db.Producto;

const productsAPIController = {
    create : (req,res) =>{
       Producto.create({
            nombre: req.body.name,
            descripcion: req.body.description,
            precio: req.body.price,
            categoria_id: req.body.category,
        })
        .then(()=> {
        return res.redirect('/tienda')})
        .catch(error => res.send(error));
        }
}


module.exports = productsAPIController;