const router = require('express').Router();
const auth = require('../controllers/auth.controller')
const {check} = require('express-validator')

router.post('/signup',[
    check('name').isLength({min: 3}),
    check('email', 'Email is incorrect').isEmail(),
    check('password').isLength({min: 6})
], auth.register)
router.post('/signin', auth.login)

module.exports = router;