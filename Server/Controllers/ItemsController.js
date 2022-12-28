const Items = require("../Models/Items");
const { error, success } = require("../Repository/ResponseRepository");
const { upperFirst } = require("../Utilities/TextFormatter");

exports.createItem = async (req, res) => {
  let { name, price, category, image } = req.body;

  if (!(name && price && category && image)) {
    return error(res, "Veuillez saisir tous les champs");
  }

  name = await upperFirst(name);
  const [verification, _] = await Items.findByName(name);

  if (verification.length > 0) {
    return error(res, "Un article avec le même nom existe déjà.");
  }

  let item = new Items(name, price, category);
  item = await item.save();

  return success(res, "Article créé avec succès.");
};

exports.getItems = async (req, res) => {
  const [currentItems, _] = await Items.findAll();

  return success(res, currentItems);
};

exports.modifyItem = async (req, res) => {
  let { id, name, price, category, image } = req.body;

  if (!(name && price && category && image)) {
    return error(res, "Veuillez saisir tous les champs");
  }

  name = await upperFirst(name);
  const [verification, _] = await Items.findByName(name);

  if (!verification) {
    return error(res, "Cet article n'existe pas");
  }

  let modifiedItem = new Items(name, price, category, image, id);
  modifiedItem = modifiedItem.modify();

  return success(res, "Article modifié avec succès");
};
