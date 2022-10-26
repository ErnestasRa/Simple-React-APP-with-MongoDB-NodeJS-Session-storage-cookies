const express = require('express')
const router = express.Router()
const {emailValid, passwordValid, isSecretValid} = require('../middleware/middle')
const {register, login, postuser, createpost, mainpage} = require('../controllers/main-controller')

router.post('/register', emailValid, passwordValid, register)
router.post('/login', emailValid, login)
router.post('/postuser', emailValid, postuser)
router.post('/createpost', createpost)
router.get('/mainpage', mainpage)

module.exports = router