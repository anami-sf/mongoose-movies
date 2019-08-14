var express = require('express');
var router = express.Router();
var moviesCtrl = require('../contorllers/movies')

/* GET users listing. */
router.get('/new', moviesCtrl.new);

router.post('/', moviesCtrl.create);

module.exports = router;
