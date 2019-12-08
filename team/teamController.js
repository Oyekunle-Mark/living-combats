const {
  createTeam,
  getAllTeams,
  getTeamById,
} = require('../database/team/teamHelper');

const getTeams = async (_, res) => {
  const teams = await getAllTeams();

  return res.status(200).json({
    status: 200,
    data: teams,
  });
};

const getOneTeam = async (req, res) => {
  const { id } = req.params;
  const team = await getTeamById(id);

  return res.status(200).json({
    status: 200,
    data: team,
  });
};

const addTeam = async (req, res) => {
  const team = await createTeam(req.body);

  return res.status(200).json({
    status: 200,
    data: team,
  });
};

module.exports = {
  getTeams,
  addTeam,
  getOneTeam,
};
