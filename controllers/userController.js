const path = require ('path');
const {validationResult} = require('express-validator');


module.exports = {
    login: (req,res) =>{
        let errors = validationResult(req) ;
        if (errors.isEmpty()){
         res.render('users/dashboard');
        }else{
            res.render('users/login',{errors:errors.mapped(),old: req.body});
        }
    }
};