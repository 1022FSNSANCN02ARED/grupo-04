const express = require ('express');
const bodyParser = require('body-parser')
const app = express ();
const path = require ('path');
const methodOverride = require("method-override");
const router = require('./routers/mainRouter.js');
const methodOverride = require("method-override");


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(methodOverride("_method")); 

//Para utilizar delete//
app.use(methodOverride("_method"));

/*Carpeta public*/
app.use(express.static(path.join(__dirname,'public')));

var PORT = 3026;

app.listen(PORT,() => {

console.log(`Se prendio el servidor en ${PORT}`);

});

/*EJS ENGINE*/
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/*Vistas renderizadas*/
app.use('/', router);

app.use('/login',router);

app.use('/home',router);

app.use('/registro',router);

app.use('/tienda',router);

app.use('/carrito',router);

app.use('/create',router);

app.use ('/list',router);

/*Vistas sin renderizar*/


app.get ('/productoHombre',(req,res)=>{

    res.sendFile(path.resolve(__dirname,'views/products/productoHombre.html'));
    
    });
app.get ('/productoMujer',(req,res)=>{

    res.sendFile(path.resolve(__dirname,'views/products/productoMujer.html'));
    
    });
app.get ('/unisex',(req,res)=>{

    res.sendFile(path.resolve(__dirname,'views/products/unisex.html'));
    
    });
app.get ('/cuadro',(req,res)=>{

    res.sendFile(path.resolve(__dirname,'views/products/cuadro.html'));
    
    });
app.get ('/cuadro1',(req,res)=>{

    res.sendFile(path.resolve(__dirname,'views/products/cuadro1.html'));
    
    });

/*Vistas anteriores*/
/*
app.get ('/list',(req,res)=>{

    res.render('products/list',{ products: products.findAll() });
    });

app.get ('/registro',(req,res)=>{

     res.sendFile(path.resolve(__dirname,'views/registro.html'));
        
    });

 app.get ('/carrito',(req,res)=>{

        res.sendFile(path.resolve(__dirname,'views/carrito.html'));
        
        });
app.get ('/tienda',(req,res)=>{

        res.sendFile(path.resolve(__dirname,'views/tienda.html'));
        
        });

        */



        app.use((req,res,next)=>{
            res.status(404).render('notFound')
    })