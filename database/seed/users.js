const { hash } = require('../../helpers/bcryptHelper');

module.exports = (async () => [
  {
    email: 'func@func.com',
    password: await hash('werocktheworld'),
  },
  {
    email: 'rainbow@func.com',
    password: await hash('swiminmwiththetide'),
    isAdmin: true,
  },
  {
    email: 'john@wick.com',
    password: await hash('killemall'),
    isAdmin: true,
  },
  {
    email: 'kimbo@slice.com',
    password: await hash('brawlthegods'),
  },
  {
    email: 'arsene@wenger.com',
    password: await hash('theyoungshallgrow'),
  },
])();
