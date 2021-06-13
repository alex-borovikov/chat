const router = require('express').Router();
const dialogController = require('../controllers/dialog.controller')

router.post('/dialogs/all', dialogController.getAll)
router.post('/dialogs/create', dialogController.create)

module.exports = router;