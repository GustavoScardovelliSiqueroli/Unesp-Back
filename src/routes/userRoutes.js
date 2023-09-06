const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const userMiddleware = require('../middlewares/userMiddleware');

const router = express.Router();

router.post('/api/createUser', authMiddleware.verifyToken, userMiddleware.validatorUser, userController.create);
router.post('/api/login', userMiddleware.validatorLogin, userController.login);
router.post('/api/firstLoginVerify', userMiddleware.validatorFirstLoginVerify, userController.firstLoginVerify);
router.post('/api/firstLogin/:id', userMiddleware.validatorFirstLogin, userMiddleware.verifyPassword,
    userController.firstLogin);
router.put('/api/changePassword', authMiddleware.verifyToken, userMiddleware.validatorVerifyPassword, userMiddleware.verifyPassword,
    userController.changePassword);

module.exports = router;