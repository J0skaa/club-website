import React, { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [expandedPost, setExpandedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("There was an error fetching the posts!", error);
      }
    };

    fetchPosts();
  }, []);

  const toggleExpand = (postId) => {
    setExpandedPost((prev) => (prev === postId ? null : postId));
  };

  return (
    <div className="posts-container">
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post._id}>
            <h3>{post.title}</h3>
            <img
              src={`assets/${post.image}`}
              alt={post.title}
              className="post-image"
            />
            <p>{new Date(post.createdAt).toLocaleDateString()}</p>
            <button
              className="expand-button"
              onClick={() => toggleExpand(post._id)}
            >
              {expandedPost === post._id ? "Kevesebb" : "Bővebben"}
            </button>
            {expandedPost === post._id && (
              <div className="post-content">
                <p>{post.content}</p>
                {post.link && (
                  <p>
                    Link:{" "}
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {post.link}
                    </a>
                  </p>
                )}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Posts;
