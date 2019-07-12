const Actions = require('../data/helpers/actionModel');

exports.getAll = async (req, res) => {
  try {
    const projects = await Actions.get();
    res.json(projects);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'There was an error retrieving the actions' });
  }
};

exports.post = async (req, res) => {
  try {
    const action = {
      project_id: req.body.project_id,
      description: req.body.description,
      notes: req.body.notes,
      completed: req.body.completed
    };
    const newAction = await Actions.insert(action);
    res.status(201).json(newAction);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'There was a problem inserting your action' });
  }
};

exports.get = async (req, res) => {
  try {
    const id = req.params.id;
    const action = await Actions.get(id);
    res.json(action);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'There was a problem retrieving your action' });
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const actionsDeleted = await Actions.remove(id);
    if (actionsDeleted) {
      res.json({
        message: `The action with id ${id} was successfully deleted`
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'There was an error deleting your action' });
  }
};

exports.put = async (req, res) => {
  try {
    const action = {
      project_id: req.body.project_id,
      description: req.body.description,
      notes: req.body.notes,
      completed: req.body.completed
    };
    const id = req.params.id;
    const updatedAction = await Actions.update(id, action);
    res.json(updatedAction);
  } catch (error) {
    res.status(500).json({ message: 'There was a problem updating your post' });
  }
};