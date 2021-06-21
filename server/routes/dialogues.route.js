const router = require('express').Router();
const DialogueController = require('../controllers/dialogue.controller')

router.get('/get/:userId', DialogueController.getDialogue)
router.post('/create', DialogueController.create)

module.exports = router;