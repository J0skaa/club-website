const express = require("express");
const mongoose = require("mongoose");
const Post = require("./models/Post");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;

MONGO_URI =
  "mongodb+srv://j0ska:pilisszantose101@jozsef-cluster.1tx92.mongodb.net/?retryWrites=true&w=majority&appName=jozsef-cluster";

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
    const posts = await Post.find().sort({ date: -1 }).limit(3);
    res.json(posts);
  } catch (error) {
    console.error("Error fetching posts", error);
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
