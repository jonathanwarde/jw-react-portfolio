import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogsByCat = () => {
    const { id } = useParams();
    // Update the state to hold both posts and the category name
    const [data, setData] = useState({ posts: [], categoryName: '' });

    useEffect(() => {
        if (id) {
            const catNamesURL = `https://jonwarde.co.uk/wp/wp-json/wp/v2/categories/${id}`;
            const catPostsURL = `https://jonwarde.co.uk/wp/wp-json/wp/v2/posts?categories=${id}`;

            Promise.all([
                fetch(catNamesURL).then(response => response.json()),
                fetch(catPostsURL).then(response => response.json())
            ])
                .then(([catData, postsData]) => {
                    // Set the state with both posts and the category name
                    if (Array.isArray(postsData)) {
                        setData({
                            posts: postsData,
                            categoryName: catData.name // Assuming 'name' is the field for the category name
                        });
                    } else {
                        console.error('Expected an array of posts, but got:', postsData);
                    }
                })
                .catch(error => {
                    console.error('Error fetching data: ', error);
                });
        }
    }, [id]);

    return (
        <div className="blog-posts-container">
            <h1 className="h2">{data.categoryName}</h1>
            <ul>
                {Array.isArray(data.posts) && data.posts.map(post => (
                    <li key={post.id} className="margin-bottom">
                        <h2 className="h3">{post.title.rendered}</h2>
                        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogsByCat;
