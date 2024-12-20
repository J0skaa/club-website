const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const routes = require("./routes")

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/", routes)

app.get("/", (req, res) => {
    res.send("The football club API is running")
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})