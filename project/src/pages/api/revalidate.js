const RevalidateHandler = (req, res) => {
  res.revalidate('/posts');
  return res.send('<h1>revalidation done</h1>');
};

export default RevalidateHandler;
