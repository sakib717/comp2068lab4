var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'My Home' });
});
/* GET profile page. */
router.get('/profile', function (req, res, next) {
    res.render('index', { title: 'My Profile' });
});
/* GET about page. */
router.get('/messages', function (req, res, next) {
    res.render('index', { title: 'Live Messaging' });
});
module.exports = router;

//# sourceMappingURL=index.js.map
