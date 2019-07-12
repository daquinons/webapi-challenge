const express = require('express');
const projectsController = require('../controllers/projectsController');

const router = express.Router();
router.get('/', (req, res) => {
  res.json({ message: 'API is up'});
})

// Projects
router.get('/projects', projectsController.get);
router.post('/projects', projectsController.post);

module.exports = router;