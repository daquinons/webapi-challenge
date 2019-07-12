const Projects = require('../../data/helpers/projectModel');

const validateProjectId = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (Number(id)) {
      const project = await Projects.get(id);
      if (project) {
        req.project = project;
        next();  
      } else {
        throw new Error();
      }
    } else {
      res.status(400).json({ message: 'Not a valid project ID' });
    }
  } catch (error) {
    res.status(404).json({ message: 'No project found with the given ID' });
  }
};

module.exports = validateProjectId;
