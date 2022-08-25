const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3100, () => {
    console.log('Servidor levantado en el puerto 3100');
});


app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, '/views/home.html'))

})