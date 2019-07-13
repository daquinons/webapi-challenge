const setCompleted = require('../../hooks/setCompleted');
const { BadRequest } = require('@feathersjs/errors');

const validate = async context => {
  try {
    const { data } = context;

    // Check if there is `text` property
    if (!data.project_id) {
      throw new BadRequest('Project ID must exist');
    }

    // Check if it is a string and not just whitespace
    if (typeof data.project_id !== 'string' || data.project_id.trim() === '') {
      throw new BadRequest('Project ID is invalid');
    }

    if (!data.description) {
      throw new BadRequest('Description must exist');
    }

    if (
      typeof data.description !== 'string' ||
      data.description.trim() === ''
    ) {
      throw new BadRequest('Description is invalid');
    }

    if (!data.notes) {
      throw new BadRequest('Notes must exist');
    }

    if (typeof data.notes !== 'string' || data.notes.trim() === '') {
      throw new BadRequest('Notes are invalid');
    }
    // Change the data to be only the text
    // This prevents people from adding other properties to our database
    context.data = {
      project_id: data.project_id.toString(),
      description: data.description.toString(),
      notes: data.notes.toString()
    };

    return context;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [validate, setCompleted],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
