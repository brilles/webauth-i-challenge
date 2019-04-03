const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const restrictedRouter = require('../restricted/restricted-router.js');
const restrictedMiddleware = require('../restricted/restricted-2.js');
const sessionConfig = require('../auth/session-config.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));
server.enable('trust proxy');

server.get('/', (req, res) => {
  res.send('working');
});

server.use('/api', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/restricted', restrictedMiddleware, restrictedRouter);

module.exports = server;
