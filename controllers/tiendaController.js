const path = require ('path');

module.exports ={
    cuadro: (req,res)=>{
        res.render('products/cuadro')
    },
    cuadro1: (req,res)=>{
        res.render('products/cuadro1')
    },
    productoHombre: (req,res)=>{
        res.render('products/productoHombre')
    },
    productoMujer: (req,res)=>{
        res.render('products/productoMujer')
    },
    unisex: (req,res)=>{
        res.render('products/unisex')
    },
}