require("dotenv").config({ path: __dirname + "/../.env" });
const express = require("express");
const mongoose = require("mongoose");
const Post = require("./models/Post");
const Application = require("./models/Application");
const Contacts = require("./models/Contact");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());
app.use(cors());

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error", err));

app.get("/api/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.error("Error fetching posts", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/api/applications", async (req, res) => {
  try {
    const applications = await Application.find().sort({ date: -1 });
    res.json(applications);
  } catch (error) {
    console.error("Error fetching posts", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await Contacts.find();
    res.json(contacts);
  } catch (error) {
    console.error("Erorr fetching posts", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

app.post("/api/posts", async (req, res) => {
  try {
    const { title, content, link } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content required" });
    }

    const newPost = new Post({ title, content, link });
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Internal server Error" });
  }
});
