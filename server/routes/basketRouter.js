const { Router } = require('express')
const basketController = require('../controllers/basketController')

const router = new Router()

router.post('/', basketController.add)
router.post('/', basketController.remove)
router.get('/', basketController.get)

module.exports = router