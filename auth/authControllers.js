const { createUser, findUser } = require('../database/user/userHelper');
const { hash, compare } = require('../helpers/bcryptHelper');
const { sign } = require('../helpers/jwtHelpers');

const register = async (req, res) => {
  const hashed = await hash(req.body.password);

  await createUser({ ...req.body, password: hashed });

  return res.status(201).json({
    status: 201,
    message: 'User created successfully.',
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await findUser({ email });

  if (!user) {
    return res.status(401).json({
      status: 401,
      message: 'Incorrect email.',
    });
  }

  const match = await compare(password, user.password);

  if (!match) {
    return res.status(401).json({
      status: 401,
      message: 'Incorrect password.',
    });
  }

  const token = await sign({
    id: user.id,
    idAdmin: user.isAdmin,
  });

  return res.status(200).json({
    status: 200,
    message: 'Signed in successfully.',
    token: `Token ${token}`,
  });
};

module.exports = {
  register,
  login,
};
