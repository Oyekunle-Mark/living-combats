const Fixture = require('./fixture');

const getFixtureById = id => Fixture.findById(id).exec();

const getFixtures = () => Fixture.find({}).exec();

const createFixture = fixtureDetails => Fixture.create(fixtureDetails);

const removeFixture = id => Fixture.findByIdAndDelete(id).exec();

const updateFixture = (id, update) =>
  Fixture.findByIdAndUpdate(id, update, { new: true }).exec();

module.exports = {
  getFixtureById,
  getFixtures,
  createFixture,
  removeFixture,
  updateFixture,
};
