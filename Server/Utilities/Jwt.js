const jwt = require("jsonwebtoken");
const access_token = process.env.ACCESS_TOKEN;

exports.sign = async function (data) {
  const token = jwt.sign({ data }, access_token, { expiresIn: "20min" });
  return token;
};

exports.verification = async function (token) {
  try {
    const verified = jwt.verify(token, access_token);
    return verified;
  } catch (err) {
    return err;
  }
};

exports.decode = async function (token) {
  const decoded = jwt.decode(token, access_token);

  return decoded;
};
