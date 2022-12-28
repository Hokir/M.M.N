const { verification, decode, sign } = require("../Utilities/Jwt");
const { success, error } = require("../Repository/ResponseRepository");

exports.verify_token = async (req, res) => {
  const { token } = req.body;
  if (token === null) return res.status(400);

  const verified = await verification(token);

  switch (verified.message) {
    case "invalid token":
      return error(res, { token: null, user: null, message: "Invalid token" });

    case "jwt malformed":
      return error(res, { token: null, user: null, message: "JWT malformed" });

    case "jwt expired":
      return await refresh_token();

    default:
      return res.status(400);
  }

  async function refresh_token() {
    const decoded = await decode(token);
    const data = decoded.data;

    if (decoded) {
      const new_token = await sign(data);
      const user = { email: data.email, role: data.role };

      return success(res, { user: user, token: new_token });
    }

    return res.status(400);
  }
};
