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
