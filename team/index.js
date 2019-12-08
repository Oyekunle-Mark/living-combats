const router = require('express').Router();
const {
  getTeams,
  addTeam,
  getOneTeam,
  deleteTeam,
} = require('./teamController');
const wrapInTryCatch = require('../helpers/wrapInTryCatch');

router.get('/', wrapInTryCatch(getTeams));
router.post('/', wrapInTryCatch(addTeam));
router.get('/:id', wrapInTryCatch(getOneTeam));
router.delete('/:id', wrapInTryCatch(deleteTeam));

module.exports = router;
