const Team = require('./team');

const getTeamById = id => Team.findById(id).exec();

const getAllTeams = () => Team.find({}).exec();

const createTeam = teamDetails => Team.create(teamDetails);

const removeTeam = id => Team.findByIdAndDelete(id).exec();

const updateTeam = (id, update) =>
  Team.findByIdAndUpdate(id, update, { new: true }).exec();

module.exports = {
  getTeamById,
  getAllTeams,
  createTeam,
  removeTeam,
  updateTeam,
};
