const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));


// Se ontiene la vista del HOME 

app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, '/views/home.html'))

});

// Se obtiene la vista de CREA TU CV

app.get('/creatucv', (req, res) => {

    res.sendFile(path.join(__dirname, '/views/creatucv.html'))
});




app.listen(3100, () => {
    console.log('Servidor levantado en el puerto 3100');
});