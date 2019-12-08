const Fixture = require('./fixture');

const getFixtureById = id => Fixture.findById(id).exec();

const getFixtures = () => Fixture.find({}).exec();

const createFixture = fixtureDetails => Fixture.create(fixtureDetails);

const removeFixture = id => Fixture.findByIdAndDelete(id).exec();

const updateFixture = (id, update) =>
  Fixture.findByIdAndUpdate(id, update, { new: true }).exec();

const findFixture = cond => Fixture.find(cond).exec();

const searchFixture = ({ home, away, venue }) =>
  Fixture.find().or([
    { home },
    { away },
    { venue: { $regex: new RegExp(venue, 'i') } },
  ]);

module.exports = {
  getFixtureById,
  getFixtures,
  createFixture,
  removeFixture,
  updateFixture,
  findFixture,
  searchFixture,
};
