const Article = ({ posts, minify }) => {
  const { title, post, author, img, date } = posts;

  return (
    <article className='sm:flex mb-6 rounded-md border shadow-md'>
      <div className='w-full sm:w-52 rounded-l-md border shadow-md mr-3'>
        <img className='w-full' src={img} alt={title} />
      </div>
      <div className='my-2 mr-2 w-full'>
        <div className='block w-auto border-b-2 pb-2'>
          <h3 className='text-lg font-semibold'>{title}</h3>
          <p>
            <small>
              <span className='font-bold'>Author: </span>
              {author} || <span className='font-bold'> Published: </span>
              {date}
            </small>
          </p>
        </div>
        <p className='mt-2 text-sm'>
          {minify ? (
            <>
              {post.slice(0, 150)}{' '}
              <button className='text-orange-500 font-bold'>See More...</button>
            </>
          ) : (
            post
          )}
        </p>
      </div>
    </article>
  );
};

export default Article;
