import feathers from '@feathersjs/client';

// Create a Feathers application
const app = feathers();
// Initialize a REST connection
const rest = feathers.rest('http://localhost:3030');
// Configure the REST client to use 'window.fetch'
app.configure(rest.fetch(window.fetch));

export default app;