const validateActionBody = (req, res, next) => {
  const action = {
    project_id: req.body.project_id,
    description: req.body.description,
    notes: req.body.notes,
    completed: req.body.completed
  };
  if (!action.project_id) {
    res.status(400).json( { message: 'project_id is required'});
  } else if (!action.description) {
    res.status(400).json( { message: 'description is required'});
  } else if (!action.notes) {
    res.status(400).json( { message: 'notes is required'});
  } else {
    req.actionBody = action;
    next();
  }
};

module.exports = validateActionBody;
