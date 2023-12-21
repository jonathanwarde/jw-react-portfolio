import './scss/components/_blog-posts-container.scss';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link

const GetBlogPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jonwarde.co.uk/wp/wp-json/wp/v2/posts/')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    return (
        <div className="blog-posts-container">
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/blog/${post.slug}`}>
                            <h3 className="h4">{post.title.rendered}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GetBlogPosts;
