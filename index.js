require('dotenv').config();
const server = require('./app/server');
const connect = require('./database/connect');

const { PORT, DB_URL } = process.env;

connect(DB_URL)
  .then(() =>
    server.listen(PORT, () =>
      // eslint-disable-next-line no-console
      console.log(`:::: Server up and doing at port ${PORT} ::::`),
    ),
  )
  // eslint-disable-next-line no-console
  .catch(err => console.error(err));
