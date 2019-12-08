const router = require('express').Router();
const { register } = require('./authControllers');
const wrapInTryCatch = require('../helpers/wrapInTryCatch');

router.post('/register', wrapInTryCatch(register));

module.exports = router;
