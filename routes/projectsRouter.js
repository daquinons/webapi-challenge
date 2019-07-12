const express = require('express');
const projectsController = require('../controllers/projectsController');

const router = express.Router();

// Projects
router.get('/', projectsController.getAll);
router.post('/', projectsController.post);
router.get('/:id', projectsController.get);
router.delete('/:id', projectsController.delete);
router.put('/:id', projectsController.put);
router.get('/:id/actions', projectsController.getActions);

module.exports = router;