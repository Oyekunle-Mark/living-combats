const { get } = require('./redis');
const { verify } = require('./jwtHelpers');

const checkToken = async (req, res, next) => {
  const token = req.get('Authorization').split(' ')[1];

  if (!token) {
    return res.status(401).json({
      status: 401,
      message: 'No token provided, must be set on the Authorization Header',
    });
  }

  try {
    const isAuthorized = await verify(token);
    const { id } = isAuthorized;

    if (isAuthorized) {
      const cachedToken = get(id);

      if (cachedToken === token) {
        next();
      }
    }
  } catch (err) {
    res.status(401).json({
      status: 401,
      message: 'Invalid user token.',
    });
  }
};

module.exports = {
  checkToken,
};
