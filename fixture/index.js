const router = require('express').Router();
const {
  getAllFixtures,
  addFixture,
  getOneFixture,
  deleteFixture,
  editFixture,
  findCompleted,
  findPending,
} = require('./fixtureController');
const { validateFixtureBody, validateId } = require('./fixtureMiddleware');
const { checkToken, checkIsAdmin } = require('../helpers/authHelpers');
const wrapInTryCatch = require('../helpers/wrapInTryCatch');

router.get('/', checkToken, wrapInTryCatch(getAllFixtures));
router.post(
  '/',
  [checkToken, checkIsAdmin, validateFixtureBody],
  wrapInTryCatch(addFixture),
);
router.get('/:id', [checkToken, validateId], wrapInTryCatch(getOneFixture));
router.delete(
  '/:id',
  [checkToken, checkIsAdmin, validateId],
  wrapInTryCatch(deleteFixture),
);
router.put(
  '/:id',
  [checkToken, checkIsAdmin, validateId],
  wrapInTryCatch(editFixture),
);
router.get('/pending', [checkToken], wrapInTryCatch(findPending));
router.get('/completed', [checkToken], wrapInTryCatch(findCompleted));

module.exports = router;
