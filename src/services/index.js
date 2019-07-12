const projects = require('./projects/projects.service.js');
const actions = require('./actions/actions.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(projects);
  app.configure(actions);
};
