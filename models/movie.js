var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
    title: String,
    releaseYear: Number,
    mpaaRating: String,
    cast: [String]
})