const express = require('express');
const path = require('path');

const app = express();

const indexRouter = require('./src/routes/index');
const userRouter = require('./src/routes/user');
const productRouter = require('./src/routes/products')

// Indicamos a Express el template engine EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));

// Indicamos la carpeta de recursos estaticos
app.use(express.static(path.join(__dirname, 'public')));


// Se obtienen las vistas

app.use('/', indexRouter);

app.use('/', userRouter);

app.use('/', productRouter)

// Se levanta el servidor

app.listen(3100, () => {
    console.log('Servidor levantado');
    console.log('http://localhost:3100');
});
