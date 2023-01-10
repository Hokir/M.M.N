const { verification } = require("./Jwt");

exports.VerifyAdmin = async function (req, res, next) {
  const { token } = req.body;

  const verified = await verification(token);

  console.log(verified);

  // If the token can't be verified

  if (!verified) return res.status(401);

  // If the user is not an admin

  if (!verified.data?.role === "admin") return res.status(401);

  next();
};
