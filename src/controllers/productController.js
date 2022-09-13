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
    }
}

module.exports = controller;