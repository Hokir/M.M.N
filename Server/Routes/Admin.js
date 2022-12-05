const express = require("express");
const router = express.Router();

const { verify_token } = require("../Controllers/TokenController");

// Verify token
router.post("/token", verify_token);

module.exports = router;
