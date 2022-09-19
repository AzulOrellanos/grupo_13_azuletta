const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

const app = express();

const indexRouter = require('./src/routes/index');
const userRouter = require('./src/routes/user');
const productRouter = require('./src/routes/products');

//Implementamos los metodos PUT y DELETE
app.use(methodOverride("_method"));

// Capturar informacion formularios
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

// Indicamos a Express el template engine EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));

// Indicamos la carpeta de recursos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// Se obtienen las vistas

app.use('/', indexRouter);

app.use('/user', userRouter);

app.use('/product', productRouter)

// Se levanta el servidor

app.listen(3100, () => {
    console.log('Servidor levantado');
    console.log('http://localhost:3100');
});
