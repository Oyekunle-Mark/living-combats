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

  let start = 0;
  let end = teamsId.length - 1;
  const status = ['completed', 'pending'];

  await Fixture.collection.drop();

  while (start < end) {
    // eslint-disable-next-line no-await-in-loop
    await Fixture({
      date: new Date(),
      home: teamsId[start].id,
      away: teamsId[end].id,
      venue: teamsId[start].location,
      link: `${teamsId[start].id}_${teamsId[start].location}`,
      status: status[Math.floor(Math.random() * 2)],
    });

    start += 1;
    end -= 1;
  }

  print('Fixture');

  print('3');
};

seed();
