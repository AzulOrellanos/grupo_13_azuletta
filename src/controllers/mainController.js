const controller = {
    home: (req, res) => {
        res.render('home')
    },
    sobreNosotros: (req, res) => {
        res.render('sobrenosotros')
    },
    contacto: (req, res) => {

        res.render('contacto')
    }
}

module.exports = controller;