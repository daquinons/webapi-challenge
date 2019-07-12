const express = require('express');
const actionsController = require('../controllers/actionsController');

const router = express.Router();

// Actions
router.get('/', actionsController.getAll);
router.post('/', actionsController.post);
router.get('/:id', actionsController.get);
router.delete('/:id', actionsController.delete);
router.put('/:id', actionsController.put);

module.exports = router;
