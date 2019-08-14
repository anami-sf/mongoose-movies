var Todo = require('../models/movie');

module.exports = {
    new: newMovie
}

const newMovie= (req, res) => {
    res.render( 'moview/new')
}

