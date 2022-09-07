const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Se levanta el servidor

app.listen(3100, () => {
    console.log('Servidor levantado');
    console.log('http://localhost:3100');
});


// Se ontiene la vista del HOME 

app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, '/views/home.html'))

});

// Se obtiene la vista de CREA TU CV

app.get('/creatucv', (req, res) => {

    res.sendFile(path.join(__dirname, '/views/creatucv.html'))
});

// Se obtiene la vista de LOGIN

app.get('/login', (req, res) => {

    res.sendFile(path.join(__dirname, '/views/login.html'))
});

// Se obtiene la vista de REGISTRARSE

app.get('/registrarse', (req, res) => {

    res.sendFile(path.join(__dirname, '/views/registrarse.html'))
});

// Se obtiene la vista del CARRITO

app.get('/carrito', (req, res) => {

    res.sendFile(path.join(__dirname, '/views/carrito.html'))
});

// Se obtiene la vista de SOBRE NOSOTROS

app.get('/sobrenosotros', (req, res) => {

    res.sendFile(path.join(__dirname, '/views/sobrenosotros.html'))
});

// Se obtiene la vista de CONTACTO

app.get('/contacto', (req, res) => {

    res.sendFile(path.join(__dirname, '/views/contacto.html'))
});