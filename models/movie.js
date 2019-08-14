var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
    title: String,
    releaseYear: Number,
    mpaaRating: String,
    cast: [String],
    nowShowing: Boolean
})

// Compile the schema into a model and export it
//mongoose.model('Name', schema)
module.exports = mongoose.model('Movie', movieSchema)