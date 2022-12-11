const Items = require("../Models/Items");
const { error, success } = require("../Repository/ResponseRepository");
const { upperFirst } = require("../Utilities/TextFormatter");

exports.createItem = async (req, res) => {
  let { name, price, category } = req.body;

  if (!(name && price && category)) {
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
  let { name, price, category } = req.body;

  if (!(name && price && category)) {
    return error(res, "Veuillez saisir tous les champs");
  }

  name = await upperFirst(name);
  const searchItem = Items.findByName(name);

  if (!searchItem) {
    return error(res, "Cet article n'existe pas ou n'existe plus");
  }

  let modifiedItem = Items(name, price, category);
  modifiedItem = modifiedItem.modify();

  return success(res, "Article modifié avec succès");
};

exports.findById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return error(res, "Invalid id");
  }

  const [item, _] = await Items.findById(id);

  if (!item) {
    return error(res, "No article found");
  }

  return success(res, item);
};
