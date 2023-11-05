// BlogPage.js
 import React, { useState, useEffect } from 'react';

export function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);

  // Fetch and display blog posts from Hygraph
   useEffect(() => { 
    // You'll need to implement code to fetch data from Hygraph here.
    // This will involve making API requests to Hygraph's endpoints.
    // You can use libraries like Axios or fetch for this.

    // Sample code to fetch blog posts (replace with actual API calls):
     fetch('https://api.hygraph.com/blog/posts')
      .then((response) => response.json())
      .then((data) => setBlogPosts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1 className='text-3xl text-primaryColor font-bold text-center my-2' >Blog</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <a href={post.url}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
} 




/* import React from 'react'

export const Blog = () => {
  return (
    <div>
      
    </div>
  )
}
 */

