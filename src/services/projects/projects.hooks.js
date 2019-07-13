const setCompleted = require('../../hooks/setCompleted');
const { BadRequest } = require('@feathersjs/errors');

const validate = async context => {
  try {
    const { data } = context;

    // Check if there is `text` property
    if (!data.name) {
      throw new BadRequest('Name must exist');
    }

    // Check if it is a string and not just whitespace
    if (typeof data.name !== 'string' || data.name.trim() === '') {
      throw new BadRequest('Name is invalid');
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
    // Change the data to be only the text
    // This prevents people from adding other properties to our database
    context.data = {
      name: data.name.toString(),
      description: data.description.toString()
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
