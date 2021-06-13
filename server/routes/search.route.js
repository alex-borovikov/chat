const router = require('express').Router()
const searchController = require('../controllers/search.controller')

router.post('/', searchController)

module.exports = router