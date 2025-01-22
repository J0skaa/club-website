import React, { useState } from "react";
import useFetch from "../useFetch";

const Posts = () => {
  const [expandedPost, setExpandedPost] = useState(null);

  const { data, error } = useFetch("http://localhost:5000/api/posts");
  const posts = data
    ? data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    : [];

  const toggleExpand = (postId) => {
    setExpandedPost((prev) => (prev === postId ? null : postId));
  };

  return (
    <div className="posts-container">
      {error ? (
        <div>An error occurred: {error}</div>
      ) : !posts ? (
        <div>Loading...</div>
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
