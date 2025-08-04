const express = require('express');
const { createAccount, loginAccount } = require('../controller/AuthController.js');

const router = express.Router();

// Register Route
router.post('/register', createAccount);

// Login Route
router.post('/login', loginAccount);

module.exports = router;
