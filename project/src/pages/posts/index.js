const PostsPage = ({ posts }) => {
  return (
    <>
      <h1>ALL POSTS</h1>
      {posts.map((post) => {
        return (
          <div className="post" key={post.id}>
            <span>id: {post.id}</span>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  console.log('POSTS DATA IS FETCHING...');

  return {
    props: {
      posts: data,
    },
  };
}

export default PostsPage;
