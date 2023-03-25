const path = require ('path');
const {validationResult} = require('express-validator');
const { saveProduct, findById } = require("../data/user");
const users = require("../data/user");
const fs = require("fs");
const userFilePath = path.resolve('data/users.json');
const db=require ("../src/database/models")
const sequelize=db.sequelize

module.exports = {
    //User Login
    login: async (req,res) =>{
      let userEmail = req.body.usuarioLogin;
      let userPassword = req.body.passwordLogin;
      let userConfirm = await db.User.findOne({where:{email:userEmail}})
      let errors = validationResult(req) ;
      if(userConfirm && userConfirm.password == userPassword){
        session=req.session;
        session.userid= userEmail;
        res.render('index');
    }
    else{
      errors = errors.array();
      res.render('users/admin/login',{errors})
    }
    
    },
    registro:(req,res)=>{
      return res.render('users/registro');
    },
    
    registroUsuario:(req,res)=>{
      const user = {
        id: Date.now(),
        usuario: req.body.nameRegister,
        email: req.body.emailRegister,
        password: req.body.passwordRegister,
        direccion: req.body.direccionRegister,
        pais: req.body.paisRegister,
        telefono: req.body.telefonoRegister,
        tipo: req.body.tipoRegistro,
    };
    
    let userFileContent = fs.readFileSync(userFilePath, "utf-8");
    let userFile = JSON.parse(userFileContent);
    let userEmailCompare = user.email;
    let userEmailExist = userFile.find( (user) => user.email == userEmailCompare);
    if(userEmailExist){
      res.send('Este usuario ya existe')
    }else{
      userFile.push(user);
      userFileContent = JSON.stringify(userFile, null, 4);
      fs.writeFileSync(userFilePath, userFileContent, "utf-8");
      return res.redirect("/tienda");
    }
  },

};