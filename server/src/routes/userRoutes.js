const express = require('express');
const router = new express.Router();
const UserController = require('../controllers/user.controller');

router.post("/", UserController.registerUser);

module.exports = router;