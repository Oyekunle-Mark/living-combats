const { createUser } = require('../database/user/userHelper');
const { hash } = require('../helpers/bcryptHelper');

const register = async (req, res) => {
  const hashed = await hash(req.body.password);

  const user = await createUser({ ...req.body, password: hashed });

  console.log(user);

  return res.status(201).json({
    status: 201,
    message: 'User created successfully.',
  });
};

module.exports = {
  register,
};
