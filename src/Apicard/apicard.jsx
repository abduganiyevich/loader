import React, { useState, useEffect } from 'react';
import './index.css'
const ApiCardLoader = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setTimeout(() => {
          setPosts(data);
          setLoading(false);
        }, 2000); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); 

  return (
    <div>
      {loading ? (
        <div className="loader">
         
        </div>
      ) : (
        <div className='info-card'>
          <h1>API Card Loader</h1>
            <div className='card-group'>
            {posts.map(post => (
            <div key={post.id} className="card">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
            </div>
        </div>
      )}
    </div>
  );
};

export default ApiCardLoader;
