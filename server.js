const express = require('express');
const helmet = require('helmet');
const routes = require('./routes');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api', routes);

module.exports = server;
