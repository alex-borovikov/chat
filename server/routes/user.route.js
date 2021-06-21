const router = require('express').Router();
const userController = require('../controllers/user.controller')

router.get('/:userId', userController.getUser)


module.exports = router