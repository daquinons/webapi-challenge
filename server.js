const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/api', routes);

module.exports = server;
