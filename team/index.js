const router = require('express').Router();
const { getTeams } = require('./teamController');
const wrapInTryCatch = require('../helpers/wrapInTryCatch');

router.get('/teams', wrapInTryCatch(getTeams));

module.exports = router;
