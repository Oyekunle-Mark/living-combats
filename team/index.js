const router = require('express').Router();
const { getTeams, addTeam, getOneTeam } = require('./teamController');
const wrapInTryCatch = require('../helpers/wrapInTryCatch');

router.get('/', wrapInTryCatch(getTeams));
router.post('/', wrapInTryCatch(addTeam));
router.get('/:id', wrapInTryCatch(getOneTeam));

module.exports = router;
