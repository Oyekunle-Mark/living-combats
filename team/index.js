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
const { checkToken, checkIsAdmin } = require('../helpers/authHelpers');
const wrapInTryCatch = require('../helpers/wrapInTryCatch');

router.get('/', checkToken, wrapInTryCatch(getTeams));
router.post(
  '/',
  [checkToken, checkIsAdmin, validateTeamBody],
  wrapInTryCatch(addTeam),
);
router.get('/:id', [checkToken, validateId], wrapInTryCatch(getOneTeam));
router.delete(
  '/:id',
  [checkToken, checkIsAdmin, validateId],
  wrapInTryCatch(deleteTeam),
);
router.put(
  '/:id',
  [checkToken, checkIsAdmin, validateId],
  wrapInTryCatch(editTeam),
);
router.post('/search', wrapInTryCatch(searchTeam));

module.exports = router;
