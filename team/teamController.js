const {
  createTeam,
  getAllTeams,
  getTeamById,
  removeTeam,
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

  return res.status(201).json({
    status: 201,
    data: team,
  });
};

const deleteTeam = async (req, res) => {
  const { id } = req.params;
  const team = await removeTeam(id);

  return res.status(200).json({
    status: 200,
    message: `${team.name} deleted successfully.`,
  });
};

module.exports = {
  getTeams,
  addTeam,
  getOneTeam,
  deleteTeam,
};
