const users = require('./users');
const teams = require('./teams');

const User = require('../user/user');
const Team = require('../team/team');

const seed = async () => {
  await User.insertMany(await users);
  await Team.insertMany(teams);

  // eslint-disable-next-line no-console
  console.log('Users and teams seeded successfully.');
};

seed();
