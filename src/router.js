const express = require('express');
const router = express.Router();

const caseController = require('./controllers/caseController');
const caseMiddleware = require('./middlewares/caseMiddleware');

router.get('/cases', caseController.getAll);
router.post('/cases', caseMiddleware.ValidatorBody, caseController.create);
router.put('/cases/:id', caseMiddleware.ValidatorBody, caseController.update);
router.delete('/cases/:id', caseController.deleteCase);

module.exports = router;