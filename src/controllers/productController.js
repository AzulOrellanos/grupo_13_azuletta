const fs = require('fs');
const path = require('path');

function findAll() {
    const dataJson = fs.readFileSync(path.join(__dirname, '../data/curriculums.json'));
    const data = JSON.parse(dataJson);
    return data
}

function create(data){
    const dataString = JSON.stringify(data, null, 5);
    fs.writeFileSync(path.join(__dirname, '../data/curriculums.json'), dataString)
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
    create: (req, res) => {
        res.render('product-create')
    },
    store: (req, res) => {
        const data = findAll();

        const newProduct = {
            id: data.length + 1,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: "$" + req.body.precio,
            funciones: [req.body.funciones]
        }

        data.push(newProduct);

        create(data);

        res.redirect("/product/creatucv") 
    },
    edit: (req, res) => {
        res.render('product-edit')
    }
}

module.exports = controller;