import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const BlogCategory = () => {
  const [title, setTitle] = useState('');
  const router = useRouter();

  useEffect(() => {
    console.log(router.query);
    if (router.query.category) {
      debugger;
      setTitle(router.query.category.join(' :: '));
    }
  }, [router.query]);

  return <h1>BLOG CATEGORY: {title}</h1>;
};

export default BlogCategory;
