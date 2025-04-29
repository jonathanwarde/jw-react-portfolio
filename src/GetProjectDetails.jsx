//https://jonwarde.co.uk/wp/wp-json/wp/v2/project
// https://jonwarde.co.uk/wp/wp-json/wp/v2/project?search=Miller%20Insurance
import './scss/components/_chip.scss';

import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

const GetProjectDetails = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch('https://jonwarde.co.uk/wp/wp-json/wp/v2/posts?per_page=60')
            .then(response => response.json())
            .then(posts => {
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
                setLoading(false)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <>
        {loading ? (
            <svg version="1.1" class="loader" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0">
            <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
            </path>
            </svg>
          ) : (
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
        </div>)}
        </>
    );
};

export default GetProjectDetails;
