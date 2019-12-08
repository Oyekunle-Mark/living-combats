const router = require('express').Router();
const { register } = require('./authControllers');

router.post('/register', register);

module.exports = router;
