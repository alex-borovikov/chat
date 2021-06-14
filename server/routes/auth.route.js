const router = require('express').Router();
const auth = require('../controllers/auth.controller')
const {check} = require('express-validator')
const authMiddleware = require('../midllewares/auth.middleware')

router.post('/signup',[
    check('name').isLength({min: 3}),
    check('email', 'Email is incorrect').isEmail(),
    check('password').isLength({min: 6})
], auth.register)
router.post('/signin', auth.login)
router.get('/check', authMiddleware.auth, auth.checkAuth)
router.get('/checkWithGoogle', authMiddleware.authWithGoogle)

module.exports = router;