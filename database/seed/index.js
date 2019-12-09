const users = require('./users');
const teams = require('./teams');

const User = require('../user/user');
const Team = require('../team/team');
const Fixture = require('../fixture/fixture');

// eslint-disable-next-line no-console
const print = str => console.log(`${str} collection seeded successfully`);

const seed = async () => {
  await User.collection.drop();
  await User.insertMany(await users);
  print('User');

  await Team.collection.drop();

  const teamsId = teams.map(async team => {
    const t = await Team.create(team);

    return {
      id: t.id,
      location: t.location,
    };
  });

  print('Team');

  print('3');
};

seed();
