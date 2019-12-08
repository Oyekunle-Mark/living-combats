const validateTeamBody = (req, res, next) => {
  const { name, location } = req.body;

  if (
    !name ||
    !location ||
    typeof location !== 'string' ||
    typeof name !== 'string'
  ) {
    return res.status(400).json({
      status: 400,
      message: 'Credential must include name and location of type string.',
    });
  }

  next();
};

const validateId = (req, res, next) => {
  const { id } = req.params;

  if (!/^\d[a-z]$/.test(id)) {
    return res.status(400).json({
      status: 400,
      message: 'Request parameter must be an integer.',
    });
  }

  next();
};

module.exports = {
  validateTeamBody,
  validateId,
};
