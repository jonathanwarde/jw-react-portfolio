import './scss/components/_blog-posts-container.scss';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { useQuery } from '@tanstack/react-query';

function useBlogPosts() {
    return useQuery({
      queryKey: ['blogPosts'],                 
      queryFn: () =>
        fetch(
          'https://jonwarde.co.uk/wp/wp-json/wp/v2/posts?per_page=60'
        ).then(r => r.json()),
      staleTime: 1000 * 60 * 5, // 5 min = “fresh” time
    });
  }

const GetBlogPosts = () => {
    // NOTE: replacing useState and useEffect with tanstack react query
    //const [posts, setPosts] = useState([]);
    //const [loading, setLoading] = useState(true);
    const { data: posts = [], isLoading, error } = useBlogPosts();

    /*useEffect(() => {
        setLoading(true)
        fetch('https://jonwarde.co.uk/wp/wp-json/wp/v2/posts?per_page=60')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    return (
        <>
        {
            loading ? (
                <svg version="1.1" className="loader" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0">
                <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                  <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
                </path>
                </svg>
            ) : (
            <div className="blog-posts-container">
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            <Link to={`/bitsnbobs/${post.slug}`}>
                                <h3 className="h4">{post.title.rendered}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            )}
        </>
    );*/

    if (isLoading) {
        return (
          <svg className="loader" viewBox="0 0 100 100">
            <path
              fill="#fff"
              d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50
                 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
              <animateTransform
                attributeName="transform"
                type="rotate"
                dur="1s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite" />
            </path>
          </svg>
        );
      }
    
      if (error) return <p style={{ color: 'red' }}>Failed to load posts.</p>;
    
      return (
        <div className="blog-posts-container">
          <ul>
            {posts.map(post => (
              <li key={post.id}>
                <Link to={`/bitsnbobs/${post.slug}`}>
                  <h3 className="h4" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
};

export default GetBlogPosts;
