require('dotenv').config();
const server = require('./app/server');

const PORT = process.env.PORT || 5000;

server.listen(PORT, () =>
  // eslint-disable-next-line no-console
  console.log(`:::: Server up and doing at port ${PORT} ::::`),
);
