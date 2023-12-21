import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const BlogsByCat = () => {
    const { id } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (id) {
            fetch(`https://jonwarde.co.uk/wp/wp-json/wp/v2/posts?categories=${id}`)
                .then(response => response.json())
                .then(data => {
                    setPosts(data);
                })
                .catch(error => {
                    console.error('Error fetching data: ', error);
                });
        }
    }, [id]); 

    return (
        <div className="blog-posts-container">
            <ul>
                {posts.map(post => (
                    <li key={post.id} className="margin-bottom">
                        <h3 className="h4">{post.title.rendered}</h3>
                        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogsByCat;
