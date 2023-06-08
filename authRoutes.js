const express = require('express')
const router = express.Router()
const AuthController = require('./AuthController')

//helper
const checkAuth = require('./auth').checkAuth

//controller

router.get('/login', AuthController.login)
router.post('/login', AuthController.loginPost)
router.get('/register', checkAuth, AuthController.register)
router.post('/register', AuthController.registerPost)

module.exports = router