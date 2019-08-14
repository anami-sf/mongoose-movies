const mongoose = require('mongoose');

mongoose.connect(
    //host/database_name
    'mongodb://localhost/movies',
    //Always use the options below:
    {
        useNewUrlParser: true, 
        useCreateIndex: true
    }
);