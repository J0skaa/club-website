import React, { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/posts");
        setPosts(response.data.reverse());
      } catch (error) {
        console.error("There was an error fetching the posts!", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="posts">
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
              className="show-content-button"
              onClick={() => alert(post.content)}
            >
              Read more
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Posts;
