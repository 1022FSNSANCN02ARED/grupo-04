const express = require ('express');

const app = express ();
const path = require ('path');


app.use(express.static(path.join(__dirname,'public')));

app.listen(3026,() => {

console.log('se prendio');

});

app.get ('/',(req,res)=>{

res.sendFile(path.resolve(__dirname,'views/home.html'));

});
app.get ('/home',(req,res)=>{

res.sendFile(path.resolve(__dirname,'views/home.html'));

});

app.get ('/login',(req,res)=>{

    res.sendFile(path.resolve(__dirname,'views/login.html'));
    
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
    app.get ('/productoHombre',(req,res)=>{

        res.sendFile(path.resolve(__dirname,'views/productoHombre.html'));
        
        });
 app.get ('/productoMujer',(req,res)=>{

        res.sendFile(path.resolve(__dirname,'views/productoMujer.html'));
        
        });
app.get ('/unisex',(req,res)=>{

        res.sendFile(path.resolve(__dirname,'views/unisex.html'));
        
        });
    app.get ('/cuadro',(req,res)=>{

        res.sendFile(path.resolve(__dirname,'views/cuadro.html'));
        
        });
    app.get ('/cuadro1',(req,res)=>{

        res.sendFile(path.resolve(__dirname,'views/cuadro1.html'));
        
        });




