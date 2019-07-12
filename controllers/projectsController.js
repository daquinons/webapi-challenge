const Projects = require('../data/helpers/projectModel');

exports.get = async (req, res) => {
  try {
    const projects = await Projects.get();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'There was an error retrieving the projects'});
  }
};

exports.post = async (req, res) => {
  try {
    const project = req.body
    const newProject = await Projects.insert(project);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: 'There was a problem inserting your post' });
  }
}
