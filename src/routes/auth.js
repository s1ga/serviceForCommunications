const router = require('express').Router()
const controller = require('../controller/auth')
const { registerValidator } = require('../utils/validator')

router.post('/register', registerValidator, controller.register)
router.post('/login', controller.login)

module.exports = router