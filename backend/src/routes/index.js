const express = require("express");
const router = express.Router();

const kapcsolatRoutes = require("./kapcsolat");
const palyazatokRoutes = require("./palyazatok");
const galleriaRoutes = require("./galleria");

router.use("/kapcsolat", kapcsolatRoutes);
router.use("/palyazatok", palyazatokRoutes);
router.use("/galleria", galleriaRoutes);

module.exports = router