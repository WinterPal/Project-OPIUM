const express = require('express');
const router = new express.Router();
const AuthController = require('../controllers/auth.controller');

router.post("/login", AuthController.login);
router.post("/refresh-token", AuthController.refresh_token);

module.exports = router;