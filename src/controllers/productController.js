const fs = require('fs');
const path = require('path');

function findAll() {
    const dataJson = fs.readFileSync(path.join(__dirname, '../data/curriculums.json'));
    const data = JSON.parse(dataJson);
    return data
}

const controller = {
    creaTuCv: (req, res) => {
        const data = findAll();
        res.render('creatucv', {curriculum: data})
    },
    carrito: (req, res) => {
        res.render('carrito')
    },
    productDetails: (req, res) => {
        const data = findAll();
        let cvEncontrado = data.find( cv => {
            return cv.id == req.params.id
        })
        res.render('productDetail', { cv: cvEncontrado})
    },
    productCreate: (req, res) => {
        res.render('product-create')
    },
    productEdit: (req, res) => {
        res.render('product-edit')
    }
}

module.exports = controller;