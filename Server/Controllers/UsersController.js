require("dotenv").config();

const { compare } = require("../Utilities/Bcrypt");
const { sign } = require("../Utilities/Jwt");
const { error, success } = require("../Repository/ResponseRepository");
const Users = require("../Models/Users");

const refresh_token = process.env.REFRESH_TOKEN;

exports.register = async (req, res) => {
  const { email, password, role } = req.body;

  if (!(email && password && role)) {
    error(res, "Veuillez saisir tous les champs");
  }

  const verification = await Users.findByEmail(email);

  if (verification.length > 0) {
    return error(res, "Un utilisateur utilise déjà cet email !");
  }

  let user = new Users({ email: email, password: password, role: role });
  user = await user.save();

  console.log(user);
  return success(res, "Compte créé avec succès");
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    return error(res, "Veuillez saisir tous les champs");
  }

  const [verification, _] = await Users.findByEmail(email);

  if (verification.length < 1) {
    return error(res, "Cet email n'est associé à aucun utilisateur.");
  }

  const data = verification[0];

  if (!(await compare(password, data.password))) {
    return error(res, "Mot de passe incorrect");
  }

  const user = {
    email: data.email,
    role: data.role,
    address: data.address,
    name: data.name,
  };

  const token = await sign({
    ...data,
    password: null,
  });

  return success(res, {
    user: user,
    token: token,
    refresh_token: refresh_token,
  });
};

exports.update = async (req, res) => {
  let { email, name, address, password } = req.body;

  if (!(email && name && address && password)) {
    error(res, "Veuillez saisir tous les champs");
  }
  name = await upperFirst(name);

  const currentUser = await Users.findByEmail(email);

  if (currentUser.length < 1) {
    error(res, "Cet email n'est associé à aucun utilisateur.");
  }

  let modifiedUser = Users({
    email: email,
    password: password,
    address: address,
    name: name,
  });

  modifiedUser = Users.modify();
  console.log(modifiedUser);

  return success(res, "Modification enregistrée.");
};
