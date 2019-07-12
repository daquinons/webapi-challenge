const express = require('express');
const projectsController = require('../controllers/projectsController');

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

module.exports = router;
