const express = require('express');
const projectsRouter = require('./projectsRouter');
const actionsRouter = require('./actionsRouter');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'API is up' });
});

router.use('/projects', projectsRouter);
router.use('/actions', actionsRouter);

module.exports = router;
