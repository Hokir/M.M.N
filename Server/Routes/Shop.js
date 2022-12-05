const express = require("express");
const router = express.Router();

const {
  getItems,
  createItem,
  modifyItem,
} = require("../Controllers/ItemsController");

// Show articles in the shop
router.get("/items", getItems);

// Create a new article
router.post("/items", createItem);

// Modify an article
router.put("/items", modifyItem);

module.exports = router;
