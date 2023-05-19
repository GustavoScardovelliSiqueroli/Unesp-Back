const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const userMiddleware = require('../middlewares/userMiddleware');

const router = express.Router();

router.post('/user/createUser', authMiddleware.verifyToken, userMiddleware.validatorUser, userController.create);
router.post('/user/login', userMiddleware.validatorLogin, userController.login);

module.exports = router;