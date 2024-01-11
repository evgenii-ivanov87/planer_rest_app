const User = require('../model/user');

const findById = async id => {
  return await User.findOne({ _id: id });
};

const findByEmail = async email => {
  return await User.findOne({ email });
};

const create = async options => {
  const user = new User(options);
  return await user.save();
};

const getUserByToken = async (token, body) => {
  const result = await User.findOne({ token }, { ...body });
  return result;
};

const updateToken = async (id, token) => {
  return await User.updateOne({ _id: id }, { token });
};

module.exports = {
  findById,
  findByEmail,
  create,
  updateToken,
  getUserByToken,
};
