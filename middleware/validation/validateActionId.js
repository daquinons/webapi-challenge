const Actions = require('../../data/helpers/actionModel');

const validateActionId = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (Number(id)) {
      const action = await Actions.get(id);
      req.action = action;
      next();
    } else {
      res.status(400).json({ message: 'Not a valid action ID' });
    }
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: 'No action found with the given ID' });
  }
};

module.exports = validateActionId;
