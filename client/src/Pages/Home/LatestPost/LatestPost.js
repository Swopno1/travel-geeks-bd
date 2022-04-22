import React, { useEffect, useState } from 'react';
import Article from '../../../components/Article/Article';

const LatestPost = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('articles.json')
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <section className='services container mx-auto my-12'>
      <h2 className='text-4xl text-center font-semibold mb-12'>Latest Posts</h2>
      <div>
        {articles.map((post) => (
          <Article posts={post} key={post.id} minify />
        ))}
      </div>
    </section>
  );
};

export default LatestPost;
