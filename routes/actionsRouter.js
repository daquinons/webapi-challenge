const express = require('express');
const actionsController = require('../controllers/actionsController');
const validateActionId = require('../middleware/validation/validateActionId');
const validateActionBody = require('../middleware/validation/validateActionBody');

const router = express.Router();

// Actions
router.get('/', actionsController.getAll);
router.post('/', validateActionBody, actionsController.post);
router.get('/:id', validateActionId, actionsController.get);
router.delete('/:id', validateActionId, actionsController.delete);
router.put('/:id', [validateActionId, validateActionBody], actionsController.put);

module.exports = router;
