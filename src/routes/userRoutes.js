const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/user/createUser', userController.create);
router.post('/user/login', userController.login);

module.exports = router;