const router = require('express').Router();
const { getTeams, addTeam } = require('./teamController');
const wrapInTryCatch = require('../helpers/wrapInTryCatch');

router.get('/', wrapInTryCatch(getTeams));
router.post('/', wrapInTryCatch(addTeam));

module.exports = router;
