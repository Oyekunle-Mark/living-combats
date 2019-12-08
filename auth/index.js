const router = require('express').Router();
const { register, login } = require('./authControllers');
const validateAuth = require('./authMiddleware');
const wrapInTryCatch = require('../helpers/wrapInTryCatch');

router.post('/register', validateAuth, wrapInTryCatch(register));
router.post('/login', validateAuth, wrapInTryCatch(login));

module.exports = router;
