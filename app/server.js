const express = require('express');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');

const server = express();

const authRouter = require('../auth');

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(logger('dev'));
server.use(helmet());
server.use(compression());
server.use(cors());

server.get('/', (_, res) =>
  res.status(200).json({
    status: 200,
    message: 'The Mock Premier League API is alive and kicking!',
  }),
);

server.use('/api/auth', authRouter);

server.use((_, res) =>
  res.status(404).json({
    status: 404,
    message: 'That URL looks quite fishy, mate!',
  }),
);

module.exports = server;
