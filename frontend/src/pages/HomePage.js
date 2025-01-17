import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  const [expandedPost, setExpandedPost] = useState(null);

  const handleExpand = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  return (
    <div className="home">
      <h1>Welcome to Pilisszántó Sports Club</h1>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post._id} className="post">
            <h3>{post.title}</h3>
            <img src={`assets/${post.image}`} alt={post.title} />
            {expandedPost === post._id && <p>{post.content}</p>}
            <button
              className="expand-button"
              onClick={() => handleExpand(post._id)}
            >
              {expandedPost === post._id ? "Kevesebb" : "Bővebben"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
