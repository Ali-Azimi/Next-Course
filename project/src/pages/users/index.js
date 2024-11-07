import useSWR from 'swr';



const UsersPage = () => {
  const { isLoading, data, error } = useSWR('users');
  console.log({ isLoading, data, error });

  if (isLoading) return <h1>LOADING...</h1>;
  return (
    <>
      <h1>USERS</h1>
      <ul>
        {data.map((user) => (
          <li>{user}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
