const express = require('express');
const path = require('path');

const app = express();

// Indicamos a Express el template engine EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));

// Indicamos la carpeta de recursos estaticos
app.use(express.static(path.join(__dirname, 'public')));


// Se obtienen las vistas

app.get('/', (req, res) => {

    res.render('home')
});


app.get('/creatucv', (req, res) => {

    res.render('creatucv')
});


app.get('/login', (req, res) => {

    res.render('login')
});


app.get('/registrarse', (req, res) => {

    res.render('registrarse')
});


app.get('/carrito', (req, res) => {

    res.render('carrito')
});


app.get('/sobrenosotros', (req, res) => {

    res.render('sobrenosotros')
});


app.get('/contacto', (req, res) => {

    res.render('contacto')
});


// Se levanta el servidor

app.listen(3100, () => {
    console.log('Servidor levantado');
    console.log('http://localhost:3100');
});
