const { v4 } = require('uuid');
const {
  createFixture,
  getFixtures,
  getFixtureById,
  removeFixture,
  updateFixture,
  findFixture,
} = require('../database/fixture/fixtureHelper');

const getAllFixtures = async (_, res) => {
  const fixtures = await getFixtures();

  return res.status(200).json({
    status: 200,
    data: fixtures,
  });
};

const getOneFixture = async (req, res) => {
  const { id } = req.params;
  const fixture = await getFixtureById(id);

  if (fixture) {
    return res.status(200).json({
      status: 200,
      data: fixture,
    });
  }

  return res.status(400).json({
    status: 400,
    message: 'No fixture matches that id',
  });
};

const addFixture = async (req, res) => {
  const { date, home, away, venue, status } = req.body;
  const link = `${home}_${away}_${v4().slice(0, 8)}`;

  const fixture = await createFixture({
    date,
    home,
    away,
    venue,
    link,
    status,
  });

  return res.status(201).json({
    status: 201,
    data: fixture,
  });
};

const deleteFixture = async (req, res) => {
  const { id } = req.params;
  const fixture = await removeFixture(id);

  if (fixture) {
    return res.status(200).json({
      status: 200,
      message: `${fixture.link} deleted successfully.`,
    });
  }

  return res.status(400).json({
    status: 400,
    message: 'No fixture matches that id',
  });
};

const editFixture = async (req, res) => {
  const { id } = req.params;
  const fixture = await updateFixture(id, req.body);

  if (fixture) {
    return res.status(200).json({
      status: 200,
      data: fixture,
    });
  }

  return res.status(400).json({
    status: 400,
    message: 'No fixture matches that id',
  });
};

const findPending = async (_, res) => {
  const fixture = await findFixture({ status: 'pending' });

  return res.status(200).json({
    status: 200,
    data: fixture,
  });
};

const findCompleted = async (_, res) => {
  const fixture = await findFixture({ status: 'completed' });

  return res.status(200).json({
    status: 200,
    data: fixture,
  });
};

module.exports = {
  getAllFixtures,
  addFixture,
  getOneFixture,
  deleteFixture,
  editFixture,
  findCompleted,
  findPending,
};
