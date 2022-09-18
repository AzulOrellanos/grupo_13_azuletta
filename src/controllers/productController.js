const products = require('./curriculums');

const controller = {
    creaTuCv: (req, res) => {
        res.render('creatucv')
    },
    carrito: (req, res) => {
        res.render('carrito')
    },
    productDetails: (req, res) => {
        let cvEncontrado = products.find( cv => {
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