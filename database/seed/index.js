require('dotenv').config();
const process = require('process');
const users = require('./users');
const teams = require('./teams');
const connect = require('../connect');

const User = require('../user/user');
const Team = require('../team/team');
const Fixture = require('../fixture/fixture');

// eslint-disable-next-line no-console
const print = str => console.log(`${str}`);

const { MONGODB_URI } = process.env;

connect(MONGODB_URI)
  .then(() => print(':::: Connection to the mongoDB successful. ::::\n'))
  .catch(err => print(err));

const seed = async () => {
  await User.collection.drop();
  await User.insertMany(await users);
  print(' - User collection seeded successfully');

  await Team.collection.drop();

  const teamPromise = teams.map(async team => {
    const t = await Team.create(team);

    return {
      id: t.id,
      location: t.location,
    };
  });

  print(' - Team collection seeded successfully');

  const teamsId = await Promise.all(teamPromise);

  let start = 0;
  let end = teamsId.length - 1;
  const status = ['completed', 'pending'];

  await Fixture.collection.drop();

  while (start < end) {
    // eslint-disable-next-line no-await-in-loop
    await Fixture.create({
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

  print(' - Fixture collection seeded successfully');

  print('=> 3 collections seeded successfully');

  setTimeout(() => process.exit(0), 3000);
};

seed();
