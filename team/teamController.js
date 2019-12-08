const {
  createTeam,
  getAllTeams,
  getTeamById,
  removeTeam,
  updateTeam,
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

  if (team) {
    return res.status(200).json({
      status: 200,
      data: team,
    });
  }

  return res.status(400).json({
    status: 400,
    message: 'No team matches that id',
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

  if (team) {
    return res.status(200).json({
      status: 200,
      message: `${team.name} deleted successfully.`,
    });
  }

  return res.status(400).json({
    status: 400,
    message: 'No team matches that id',
  });
};

const editTeam = async (req, res) => {
  const { id } = req.params;
  const team = await updateTeam(id, req.body);

  if (team) {
    return res.status(200).json({
      status: 200,
      data: team,
    });
  }

  return res.status(400).json({
    status: 400,
    message: 'No team matches that id',
  });
};

module.exports = {
  getTeams,
  addTeam,
  getOneTeam,
  deleteTeam,
  editTeam,
};
