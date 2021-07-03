const router = require('express').Router();
const fileController = require('../controllers/file.controller')
const authMiddleware = require('../midllewares/auth.middleware')

router.post('/upload', fileController.upload)

module.exports = router;