const { check, validationResult } = require("express-validator");

exports.checkRegister = [
  check("email")
    .isEmail()
    .withMessage("Veuillez saisir un email valide !")
    .bail()
    .isLength({ min: 5, max: 50 })
    .withMessage("Saisir un email entre 5 et 50 caractères !"),
  check("password")
    .isString()
    .notEmpty()
    .withMessage("Mot de passe requis !")
    .bail()
    .isLength({ min: 5, max: 30 })
    .withMessage("Saisir un mot de passe entre 5 et 30 caractères !"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors });
    }

    next();
  },
];

exports.checkLogin = [
  check("email")
    .isEmail()
    .withMessage("Veuillez saisir un email valide !")
    .bail()
    .isLength({ min: 5, max: 50 })
    .withMessage("Saisir un email entre 5 et 50 caractères !"),
  check("password")
    .isString()
    .notEmpty()
    .withMessage("Mot de passe requis !")
    .bail()
    .isLength({ min: 5, max: 30 })
    .withMessage("Saisir un mot de passe entre 5 et 30 caractères !"),

  (req, res, next) => {
    const errors = validationResult(req);

    console.log(errors);

    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors });
    }

    next();
  },
];
