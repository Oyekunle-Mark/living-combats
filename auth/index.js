const router = require('express').Router();
const { register } = require('./authControllers');

router.post('/auth/register', register);

module.exports = router;
