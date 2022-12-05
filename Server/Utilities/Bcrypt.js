const bcrypt = require("bcrypt");

exports.hash = async function (password) {
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

exports.compare = async function (plainPassword, hashedPassword) {
  const comparison = await bcrypt.compare(plainPassword, hashedPassword);
  return comparison;
};
