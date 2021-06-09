const router = require('express').Router();
const auth = require('../controllers/auth.controller')
const {check} = require('express-validator')

router.post('/register',[
    check('name'),
    check('email').isEmail('Email is incorrect'),
    check('password').isLength({min: 6})
], auth.register)
router.post('/login', auth.login)

module.exports = router;