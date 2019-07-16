const validateProjectBody = (req, res, next) => {
  const project = {
    name: req.body.name,
    description: req.body.description,
    completed: req.body.completed
  };
  if (!project.name) {
    res.status(400).json({ message: 'name is required' });
  } else if (!project.description) {
    res.status(400).json({ message: 'description is required' });
  } else {
    req.projectBody = project;
    next();
  }
};

module.exports = validateProjectBody;
