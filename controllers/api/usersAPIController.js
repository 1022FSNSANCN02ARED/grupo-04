const path = require('path');
const db = require('../../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


const Users = db.User;

const usersAPIController = {
    create: (req,res) => {
        Users
        .create(
            {
               nombre: req.body.nameRegister,
               email: req.body.emailRegister,
               password: req.body.passwordRegister,
               direccion: req.body.direccionRegister,
               pais: req.body.paisRegister,
               telefono: req.body.telefonoRegister,
               tipo: req.body.tipoRegistro,
            }
        )
        .then(()=> {
            return res.redirect('/tienda')})  
        .catch(error => res.send(error))
},
}

module.exports =  usersAPIController;