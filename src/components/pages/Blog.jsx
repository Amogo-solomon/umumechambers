import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_POSTS = gql`
  query MyQuery {
    posts {
      id
      coverImage {
        url
      }
      title
      slug
      createdBy {
        name
      }
      author {
        createdBy {
          picture
        }
      }
      createdAt
      excerpt
      content {
        text
      }
    }
  }
`;

export const Blog = () => {
  const { loading, error, data } = useQuery(GET_POSTS);
  const [showFullContent, setShowFullContent] = useState({});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const formatTime = (dateString) => {
    const options = { hour: 'numeric', minute: 'numeric' };
    return new Date(dateString).toLocaleTimeString('en-US', options);
  };

  const toggleContent = (postId) => {
    setShowFullContent((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };

  return (
    <section className="flex justify-center bg-secondaryBackground w-100p">
      <div className="max-w-[90%] flex flex-wrap justify-between">
        {data.posts.map((post) => (
          <div key={post.id} className=" md:w-1/2 mb-8 px-2 ">
            <div className="border rounded-lg overflow-hidden bg-primaryBackground">
              {post.coverImage && post.coverImage.url ? (
                <img src={post.coverImage.url} alt="Cover" className="w-full" />
              ) : (
                <div className="w-full bg-gray-300 h-40"></div>
              )}
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2 text-white">{post.title}</h2>
                <div className="flex mb-2 text-sm text-primaryColor">
                  {post.createdBy ? (
                    <p className="mr-4">{`Author: ${post.createdBy.name} (Software Engineer)`}</p>
                  ) : (
                    <p className="mr-4">Author Unknown</p>
                  )}
                  <p>{`${formatDate(post.createdAt)}, ${formatTime(post.createdAt)}`}</p>
                </div>
                <p className="mb-4 text-silver">{post.excerpt}</p>
                <div className={showFullContent[post.id] ? '' : 'hidden'}>
                  <p className="text-silver">{post.content.text}</p>
                </div>
                <button className="text-primaryColor" onClick={() => toggleContent(post.id)}>
                  {showFullContent[post.id] ? 'Show Less' : 'Continue Reading'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


/* import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const GET_POSTS = gql`
  query MyQuery {
    posts {
      id
      coverImage {
        url
      }
      title
      slug
      createdBy {
        name
      }
      createdAt
      excerpt
      content {
        text
      }
    }
  }
`;

export const Blog = () => {
  const { loading, error, data } = useQuery(GET_POSTS);
  const [showFullContent, setShowFullContent] = useState({});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const formatTime = (dateString) => {
    const options = { hour: 'numeric', minute: 'numeric' };
    return new Date(dateString).toLocaleTimeString('en-US', options);
  };

  const toggleContent = (postId) => {
    setShowFullContent((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };

  return (
    <section className="flex justify-center bg-secondaryBackground w-100p">
      <div className="max-w-[90%] flex flex-wrap justify-between">
        {data.posts.map((post) => (
          <div key={post.id} className="md:w-1/2 mb-8 px-2">
            <div className="border rounded-lg overflow-hidden bg-primaryBackground">
              {post.coverImage && post.coverImage.url ? (
                <img src={post.coverImage.url} alt="Cover" className="w-full" />
              ) : (
                <div className="w-full bg-gray-300 h-40"></div>
              )}
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2 text-white">{post.title}</h2>
                <div className="flex mb-2 text-sm text-primaryColor">
                  {post.createdBy ? (
                    <p className="mr-4">{`Author: ${post.createdBy.name} (Software Engineer)`}</p>
                  ) : (
                    <p className="mr-4">Author Unknown</p>
                  )}
                  <p>{`${formatDate(post.createdAt)}, ${formatTime(post.createdAt)}`}</p>
                </div>
                <p className="mb-4 text-silver">{post.excerpt}</p>
                <Link to={`/details/${post.slug}`} className="text-primaryColor">
                  Continue Reading
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
 */






/* import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_POSTS = gql`
  query MyQuery {
    posts {
      id
      coverImage {
        url
      }
      title
      slug
      createdBy {
        name
      }
      createdAt
      excerpt
      content {
        text
      }
    }
  }
`;

export const Blog = () => {
  const { loading, error, data } = useQuery(GET_POSTS);
  const [showFullContent, setShowFullContent] = useState({});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const formatTime = (dateString) => {
    const options = { hour: 'numeric', minute: 'numeric' };
    return new Date(dateString).toLocaleTimeString('en-US', options);
  };

  const toggleContent = (postId) => {
    setShowFullContent((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };

  return (
    <section className="flex flex-wrap justify-between bg-secondaryBackground">
      {data.posts.map((post) => (
        <div key={post.id} className="max-w-[90%] md:w-1/2 mb-8 md:px-2">
          <div className="border rounded-lg overflow-hidden bg-primaryBackground">
            {post.coverImage && post.coverImage.url ? (
              <img src={post.coverImage.url} alt="Cover" className="w-full" />
            ) : (
              <div className="w-full bg-gray-300 h-40"></div>
            )}
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2 text-white">{post.title}</h2>
              <div className="flex mb-2 text-sm text-primaryColor">
                {post.createdBy ? (
                  <p className="mr-4">{`Author: ${post.createdBy.name} (Software Engineer)`}</p>
                ) : (
                  <p className="mr-4">Author Unknown</p>
                )}
                <p>{`${formatDate(post.createdAt)}, ${formatTime(post.createdAt)}`}</p>
              </div>
              <p className="mb-4 text-silver">{post.excerpt}</p>
              <div className={showFullContent[post.id] ? '' : 'hidden'}>
                <p className="text-silver">{post.content.text}</p>
              </div>
              <button className="text-primaryColor" onClick={() => toggleContent(post.id)}>
                {showFullContent[post.id] ? 'Show Less' : 'Continue Reading'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
 */




/* import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_POSTS = gql`
  query MyQuery {
    posts {
      id
      coverImage {
        url
      }
      title
      slug
      createdBy {
        name
      }
      createdAt
      excerpt
      content {
        text
      }
    }
  }
`;

export const Blog = () => {
  const { loading, error, data } = useQuery(GET_POSTS);
  const [showFullContent, setShowFullContent] = useState({});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const toggleContent = (postId) => {
    setShowFullContent((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };

  return (
    <section className="flex flex-wrap justify-between">
      {data.posts.map((post) => (
        <div key={post.id} className="w-full md:w-1/2 mb-8">
          <div className="border rounded-lg overflow-hidden">
            {post.coverImage && post.coverImage.url ? (
              <img src={post.coverImage.url} alt="Cover" className="w-full" />
            ) : (
              <div className="w-full bg-gray-300 h-40"></div>
            )}
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{post.title}</h2>
              <div className="flex mb-2 text-sm text-gray-600">
                {post.createdBy ? (
                  <p className="mr-4">{`Author: ${post.createdBy.name}`}</p>
                ) : (
                  <p className="mr-4">Author Unknown</p>
                )}
                <p>{`published at: ${post.createdAt}`}</p>
              </div>
              <p className="mb-4">{post.excerpt}</p>
              <div className={showFullContent[post.id] ? '' : 'hidden'}>
                <p>{post.content.text}</p>
              </div>
              <button
                className="text-blue-500"
                onClick={() => toggleContent(post.id)}
              >
                {showFullContent[post.id] ? 'Show Less' : 'Continue Reading'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

 */






