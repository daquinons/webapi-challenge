const express = require('express');
const projectsController = require('../controllers/projectsController');
const validateProjectId = require('../middleware/validation/validateProjectId');
const validateProjectBody = require('../middleware/validation/validateProjectBody');

const router = express.Router();

// Projects
router.get('/', projectsController.getAll);
router.post('/', validateProjectBody, projectsController.post);
router.get('/:id', validateProjectId, projectsController.get);
router.delete('/:id', validateProjectId, projectsController.delete);
router.put('/:id', [validateProjectBody, validateProjectId], projectsController.put);
router.get('/:id/actions', validateProjectId, projectsController.getActions);

module.exports = router;