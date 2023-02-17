const path = require ('path');
const {validationResult} = require('express-validator');
const { saveProduct, findById } = require("../data/user");
const users = require("../data/user");


module.exports = {
    //User Login
    login: (req,res) =>{
      let myusername = 'admin';
      let mypassword = 123;
      let errors = validationResult(req) ;
      if(req.body.usuarioLogin == myusername && req.body.passwordLogin == mypassword){
        session=req.session;
        session.userid=req.body.usuarioLogin;
        console.log(req.session)
        res.render('users/dashboard');
    }
    else{
      errors = errors.array();
      res.render('users/login',{errors})
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