const express = require("express");
const { getKapcsolat } = require("../controllers/kapcsolatController");
const router = express.Router();

router.get("/", getKapcsolat);

module.exports = router;
