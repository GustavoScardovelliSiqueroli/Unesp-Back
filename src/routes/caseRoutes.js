const express = require('express');
const caseController = require('../controllers/caseController');
const caseMiddleware = require('../middlewares/caseMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/cases',authMiddleware.verifyToken, caseController.getAll);
router.post('/cases', caseMiddleware.ValidatorBody, caseController.create);
router.put('/cases/:id', caseMiddleware.ValidatorBody, caseController.update);
router.delete('/cases/:id', caseController.deleteCase);

module.exports = router;