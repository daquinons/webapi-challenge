const Projects = require('../data/helpers/projectModel');

exports.getAll = async (req, res) => {
  try {
    const projects = await Projects.get();
    res.json(projects);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'There was an error retrieving the projects' });
  }
};

exports.get = async (req, res) => {
  try {
    const id = req.params.id;
    const project = await Projects.get(id);
    res.json(project);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'There was an error retrieving the projects' });
  }
};

exports.getActions = async (req, res) => {
  try {
    const id = req.params.id;
    const projectActions = await Projects.getProjectActions(id);
    res.json(projectActions);
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'There was an error retrieving the actions for the project'
      });
  }
};

exports.post = async (req, res) => {
  try {
    const project = {
      name: req.body.name,
      description: req.body.description,
      completed: req.body.completed
    };
    const newProject = await Projects.insert(project);
    res.status(201).json(newProject);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'There was a problem inserting your post' });
  }
};

exports.put = async (req, res) => {
  try {
    const project = {
      name: req.body.name,
      description: req.body.description,
      completed: req.body.completed
    };
    const id = req.params.id;
    const updatedProject = await Projects.update(id, project);
    res.json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: 'There was a problem updating your post' });
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const projectsDeleted = await Projects.remove(id);
    if (projectsDeleted) {
      res.json({
        message: `The project with id ${id} was successfully deleted`
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'There was an error inserting your project' });
  }
};
