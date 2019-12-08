module.exports = (req, res, next) => {
  const { email, password } = req.body;

  if (
    !email ||
    !password ||
    typeof password !== 'string' ||
    typeof email !== 'string'
  ) {
    return res.status(400).json({
      status: 400,
      message:
        'Credential must include email and password of type string.',
    });
  }

  next();
};
