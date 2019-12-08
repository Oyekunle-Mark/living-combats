const router = require('express').Router();
const { register, login } = require('./authControllers');
const wrapInTryCatch = require('../helpers/wrapInTryCatch');

router.post('/register', wrapInTryCatch(register));
router.post('/login', wrapInTryCatch(login));

module.exports = router;
