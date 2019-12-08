const { getTeamById, getAllTeams } = require('../database/team/teamHelper');

const getTeams = async (req, res) => {
  const teams = await getAllTeams();

  return res.status(200).json({
    status: 200,
    data: teams,
  });
};

module.exports = {
  getTeams,
};
