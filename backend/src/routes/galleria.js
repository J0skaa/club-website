const express = require("express");
const { getGalleria } = require("../controllers/galleriaController");
const router = express.Router();

router.get("/", getGalleria);

module.exports = router;
