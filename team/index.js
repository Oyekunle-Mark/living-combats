const router = require('express').Router();
const {
  getTeams,
  addTeam,
  getOneTeam,
  deleteTeam,
  editTeam,
  searchTeam,
} = require('./teamController');
const { validateId, validateTeamBody } = require('./teamMiddleware');
const { checkToken } = require('../helpers/authHelpers');
const wrapInTryCatch = require('../helpers/wrapInTryCatch');

router.get('/', checkToken, wrapInTryCatch(getTeams));
router.post('/', validateTeamBody, wrapInTryCatch(addTeam));
router.get('/:id', validateId, wrapInTryCatch(getOneTeam));
router.delete('/:id', validateId, wrapInTryCatch(deleteTeam));
router.put('/:id', validateId, validateTeamBody, wrapInTryCatch(editTeam));
router.post('/search', wrapInTryCatch(searchTeam));

module.exports = router;
