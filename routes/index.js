const express = require('express');
const projectsController = require('../controllers/projectsController');
const actionsController = require('../controllers/actionsController');

const router = express.Router();
router.get('/', (req, res) => {
  res.json({ message: 'API is up' });
});

// Projects
router.get('/projects', projectsController.getAll);
router.post('/projects', projectsController.post);
router.get('/projects/:id', projectsController.get);
router.delete('/projects/:id', projectsController.delete);
router.put('/projects/:id', projectsController.put);
router.get('/projects/:id/actions', projectsController.getActions);

// Actions
router.get('/actions', actionsController.getAll);
router.post('/actions', actionsController.post);
router.get('/actions/:id', actionsController.get);
router.delete('/actions/:id', actionsController.delete);
router.put('/actions/:id', actionsController.put);

module.exports = router;
