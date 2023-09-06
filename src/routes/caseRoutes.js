const express = require('express');
const caseController = require('../controllers/caseController');
const caseMiddleware = require('../middlewares/caseMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/api/cases', authMiddleware.verifyToken, caseController.getAll);
router.get('/api/cases/status', authMiddleware.verifyToken, caseMiddleware.VerifyStatusValue,
    caseController.catchCaseByStatus);
router.post('/api/cases', authMiddleware.verifyToken, caseMiddleware.ValidatorBody, caseController.create);
router.put('/api/cases/:id', authMiddleware.verifyToken, caseMiddleware.ValidatorBody, caseController.update);
router.delete('/api/cases/:id', authMiddleware.verifyToken, caseController.deleteCase);

module.exports = router;