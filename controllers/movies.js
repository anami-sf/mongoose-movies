var Todo = require('../models/movie');

const newMovie= (req, res) => {
    res.render( 'todos/new')
}

module.exports = {
    new: newMovie
}