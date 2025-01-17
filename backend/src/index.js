require("dotenv").config({ path: "./.env" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
MONGO_URI =
  "mongodb+srv://j0ska:pilisszantose101@jozsef-cluster.1tx92.mongodb.net/?retryWrites=true&w=majority&appName=jozsef-cluster";

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error", err));

// Test route

app.get("/", (req, res) => {
  res.send("Backend test");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
