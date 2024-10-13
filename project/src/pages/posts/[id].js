import { useRouter } from 'next/router';

const SinglePostPage = ({ post }) => {
  const router = useRouter();

  return (
    <>
      <h1>SINGLE POST</h1>
      {router.isFallback ? (
        <h3>DATA IS LOADING...</h3>
      ) : (
        <>
          <span>id: {post.id}</span>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      )}
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const allPosts = await res.json();

  const paths = allPosts.slice(0, 50).map((post) => {
    return { params: { id: String(post.id) } };
  });

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
  );
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
}

export default SinglePostPage;
