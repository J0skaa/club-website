const express = require("express");
const { getPalyazatok } = require("../controllers/palyazatokController");
const router = express.Router();

router.get("/", getPalyazatok);

module.exports = router;
