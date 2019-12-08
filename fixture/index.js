const router = require('express').Router();
const {
  getAllFixtures,
  addFixture,
  getOneFixture,
  deleteFixture,
  editFixture,
} = require('./fixtureController');

const { checkToken, checkIsAdmin } = require('../helpers/authHelpers');
const wrapInTryCatch = require('../helpers/wrapInTryCatch');

router.get('/', checkToken, wrapInTryCatch(getAllFixtures));
router.post('/', [checkToken, checkIsAdmin], wrapInTryCatch(addFixture));
router.get('/:id', [checkToken], wrapInTryCatch(getOneFixture));
router.delete(
  '/:id',
  [checkToken, checkIsAdmin],
  wrapInTryCatch(deleteFixture),
);
router.put('/:id', [checkToken, checkIsAdmin], wrapInTryCatch(editFixture));

module.exports = router;
