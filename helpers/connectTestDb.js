require('dotenv').config();
const conn = require('../database/connect');
const server = require('../app/server');

module.exports = () => {
  const { PORT, TEST_DB_URL } = process.env;

  conn(TEST_DB_URL)
    .then(() =>
      server.listen(PORT, () =>
        // eslint-disable-next-line no-console
        console.log(`:::: Server up and doing at port ${PORT} ::::`),
      ),
    )
    // eslint-disable-next-line no-console
    .catch(err => console.error(err));
};
