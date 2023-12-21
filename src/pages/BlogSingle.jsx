import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogSingle = () => {
    const { slug } = useParams(); // Use the same parameter name as in your route
    const [post, setPost] = useState(null);
    const history = useNavigate();

    const handleBack = () => {
        history(-1);
    };

    useEffect(() => {
        fetch(`https://jonwarde.co.uk/wp/wp-json/wp/v2/posts?slug=${slug}`)
            .then(response => response.json())
            .then(data => {
                // Assuming the API returns an array, set the first post found
                if (data.length > 0) {
                    setPost(data[0]);
                }
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, [slug]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="blog-post">
            <h1 className="h2">{post.title.rendered}</h1>
            <button onClick={handleBack} className="btn-plain">Back</button>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
    );
};

export default BlogSingle;
