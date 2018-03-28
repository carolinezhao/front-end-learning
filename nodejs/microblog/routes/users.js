var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

// path: /users/:username
router.get('/:username', function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next();
}, function (req, res) {
    res.send('user: ' + req.params.username);
})

module.exports = router;