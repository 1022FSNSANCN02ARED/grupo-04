const express = require ('express');
const bodyParser = require('body-parser')
const app = express ();
const path = require ('path');
const methodOverride = require("method-override");
const router = require('./routers/mainRouter.js');
const session = require('express-session');
const cookieParser = require('cookie-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// Parse application/json
app.use(bodyParser.json())
app.use(methodOverride("_method")); 

app.use(cookieParser());
/*Trabajar con session*/
// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    secret:'Ayuda a los animales ',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: oneDay },

}))



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



 app.use((req,res,next)=>{
 res.status(404).render('notFound')
 })