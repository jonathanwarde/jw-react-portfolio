import './scss/components/_chip.scss';

import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

const GetBlogCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // First fetch the posts
        fetch('https://jonwarde.co.uk/wp/wp-json/wp/v2/posts')
            .then(response => response.json())
            .then(posts => {
                // Extract category IDs from posts
                let categoryIds = [...new Set(posts.flatMap(post => post.categories))];

                // remove category 1 (uncategorised)
                categoryIds = categoryIds.filter(function(item) {
                    return item !== 1;
                })

                console.log(categoryIds);

                // Create a promise for each category fetch
                const categoryPromises = categoryIds.map(id =>
                    fetch(`https://jonwarde.co.uk/wp/wp-json/wp/v2/categories/${id}`)
                );

                return Promise.all(categoryPromises);
            })
            .then(responses => Promise.all(responses.map(res => res.json())))
            .then(categoriesData => {
                setCategories(categoriesData);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div>
            <ul>
                {categories.map(category => (
                    <li key={category.id} className="chip">
                        <Link to={`/bitsnbobs/category/${category.id}`}>
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GetBlogCategories;
