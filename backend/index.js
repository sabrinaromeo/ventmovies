const express=require('express');
const app = express();
const morgan = require('morgan');
const path =require('path');//une directorios
const {mongoose} = require('./database/database');


// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



//settings
app.set( 'port', process.env.PORT || 3008 );
//middlewares- funciones antes de rutas
app.use(morgan('dev'));
app.use(express.json());//cada vez que llega un dato pasa por aca y comprueba el fomato, sie s json podremos usarlo
//app.use(mongoose);

//routes
app.use( '/api/movies', require('./routes/routes'));


//static files

app.use(express.static(path.join(__dirname, 'public')));//dirname, direccion del archivo en el que estoyo en este caso donde esta public

//start server
app.listen(app.get('port'),()=>{
    console.log(`servidor en puerto ${app.get('port')}`);
});