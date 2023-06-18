const express = require('express');
const caseController = require('../controllers/caseController');
const caseMiddleware = require('../middlewares/caseMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/cases', authMiddleware.verifyToken, caseController.getAll);
router.post('/cases/status', authMiddleware.verifyToken, caseMiddleware.VerifyStatusValue,
    caseController.catchCaseByStatus);
router.post('/cases', authMiddleware.verifyToken, caseMiddleware.ValidatorBody, caseController.create);
router.put('/cases/:id', authMiddleware.verifyToken, caseMiddleware.ValidatorBody, caseController.update);
router.delete('/cases/:id', authMiddleware.verifyToken, caseController.deleteCase);

module.exports = router;