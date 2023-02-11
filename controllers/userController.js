const path = require ('path');
const {validationResult} = require('express-validator');
const { saveProduct, findById } = require("../data/user");
const users = require("../data/user");


module.exports = {
    //User Login
    login: (req,res) =>{
        let errors = validationResult(req) ;
        if (errors.isEmpty() && req.body.usuarioLogin == 'admin' && req.body.passwordLogin == 123){
         res.render('users/dashboard');
        }else{
          //return res.status(422).json({ errors: errors.mapped()});//
           res.render('users/login',{errors:errors.mapped(), old: req.body});
          // res.send('Hay errores');//
        }
    },
    registro:(req,res)=>{
      return res.render('users/registro');
    },
    
    store:(req,res)=>{
      const user = {
        id: Date.now(),
        usuario: req.body.userRegister,
        email: req.body.userEmail,
        password: req.body.userPassword,
    };
    users.saveProduct(user);
    res.send('Se registro con exito')

    },

};