var express = require('express');
var router = express.Router();
var model = require('../models/index');
 
/* GET todo listing. */
router.get('/', function(req, res, next) {
    res.send('working index!!');
});
 
 
module.exports = router;