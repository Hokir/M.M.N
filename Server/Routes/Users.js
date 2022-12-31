const express = require("express");
const router = express.Router();

const { register, update, login } = require("../Controllers/UsersController");
const { checkRegister, checkLogin } = require("../Utilities/Checker");

// Create client account
router.post("/register", checkRegister, register);

// Login user
router.post("/login", checkLogin, login);

// Modify user
router.patch("/update", update);

module.exports = router;
