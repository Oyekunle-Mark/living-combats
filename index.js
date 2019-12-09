require('dotenv').config();
const server = require('./app/server');
const connect = require('./database/connect');

const { PORT, DB_ENV } = process.env;
let DB_URL;

if (DB_ENV === 'testing') {
  DB_URL = process.env.TEST_DB_URL;
} else {
  DB_URL = process.env.DB_URL;
}

connect(DB_URL)
  .then(() =>
    server.listen(PORT, () =>
      // eslint-disable-next-line no-console
      console.log(`:::: Server up and doing at port ${PORT} ::::`),
    ),
  )
  // eslint-disable-next-line no-console
  .catch(err => console.error(err));
