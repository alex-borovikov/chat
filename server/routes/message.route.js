const router = require('express').Router();
const messageController = require('../controllers/message.controller')

router.get('/get/:dialogueId', messageController.getMessage)
router.post('/create', messageController.create)


module.exports = router;