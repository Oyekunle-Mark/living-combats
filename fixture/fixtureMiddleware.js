const validateFixtureBody = (req, res, next) => {
  const { date, home, away, venue } = req.body;

  if (
    !date ||
    !home ||
    !away ||
    !venue ||
    typeof home !== 'string' ||
    typeof date !== 'string' ||
    typeof away !== 'string' ||
    typeof venue !== 'string'
  ) {
    return res.status(400).json({
      status: 400,
      message:
        'Request body must include date, home, away and venue of type string.',
    });
  }

  next();
};

const validateId = (req, res, next) => {
  const { id } = req.params;

  if (id.length !== 24) {
    return res.status(400).json({
      status: 400,
      message: 'Request parameter should be 24 characters.',
    });
  }

  next();
};

module.exports = {
  validateFixtureBody,
  validateId,
};
