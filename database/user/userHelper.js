const User = require('./user');

const createUser = userDetails => User.create(userDetails);

const findUser = cond => User.findOne(cond).exec();

module.exports = {
  createUser,
  findUser,
};
