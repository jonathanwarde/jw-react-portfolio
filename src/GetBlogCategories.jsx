import './scss/components/_chip.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

/* ---------- both fetches inside ONE TanStack Query ---------- */
function useBlogCategories() {
  return useQuery({
    queryKey: ['blogCategories'],   
    staleTime: 1000 * 60 * 5,              // 5-minute freshness
    queryFn: async () => {
      const postsRes = await fetch(
        'https://jonwarde.co.uk/wp/wp-json/wp/v2/posts?per_page=60'
      );
      const posts = await postsRes.json();
      // skip ID 1
      const categoryIds = [
        ...new Set(posts.flatMap(p => p.categories)),
      ].filter(id => id !== 1);

      const categories = await Promise.all(
        categoryIds.map(id =>
          fetch(
            `https://jonwarde.co.uk/wp/wp-json/wp/v2/categories/${id}`
          ).then(r => r.json())
        )
      );

      return categories;                 
    },
  });
}

const GetBlogCategories = () => {
  const {
    data: categories = [],
    isLoading,
    error,
  } = useBlogCategories();

  if (isLoading) {
    return (
      <svg
        className="loader"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#fff"
          d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50
             M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="1s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    );
  }

  if (error) {
    console.error(error);
    return <p style={{ color: 'red' }}>Failed to load categories.</p>;
  }

  return (
    <div>
      <ul>
        {categories.map(cat => (
          <li key={cat.id} className="chip">
            <Link to={`/bitsnbobs/category/${cat.id}`}>{cat.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetBlogCategories;
