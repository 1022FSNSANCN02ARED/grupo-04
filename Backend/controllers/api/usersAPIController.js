const path = require('path');
const db = require('../../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const bcrypt = require('bcryptjs');


const Users = db.User;
const Rols = db.Rol;

const usersAPIController = {
    user: (req, res) => {
        Users.findAll({
            include: [{
                model: Rols,
                as: 'rol',
                attributes: ['id', 'rol']
              }]
        })
        .then(users => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: users.length,
                },
                data: users
            }
                res.json(respuesta);
            })
    },
    userId: async (req,res)=>{
            let id = req.params.id;
            const usuarioId = await Users.findByPk(id);
             res.json(usuarioId);
    },
    create: (req,res) => {
        Users
        .create(
            {
               nombre: req.body.nameRegister,
               email: req.body.emailRegister,
               //password: req.body.passwordRegister,
               password: bcrypt.hashSync(req.body.passwordRegister, 10),
               direccion: req.body.direccionRegister,
               pais: req.body.paisRegister,
               telefono: req.body.telefonoRegister,
               tipo: req.body.tipoRegistro,
               rol_id: req.body.tipoRegistro
            
            }
        )
        .then(()=> {
            return res.redirect('/user/login')})  
        .catch(error => res.send(error))
    },
    logout:(req,res,next)=>{
        if (req.session) {
            req.session.destroy(function (err) {
              if (err) {
                return next(err);
              } else {
                return res.redirect('/');
              }
            });
          }
     },
 }




module.exports =  usersAPIController;