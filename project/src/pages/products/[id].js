import useFetch from '@/shared/hooks/useFetch';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ProductById = () => {
  const router = useRouter();

  const url = router.query?.id
    ? `https://fakestoreapi.com/products/${router.query.id}`
    : null;
  console.log({ url });
  const { data, isLoading, error } = useFetch(url);

  console.log({ data, isLoading, error });

  if (isLoading) return <h1>Loading...</h1>;

  if (!data) return <h1>DATA NOT FOUND</h1>;

  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.image} />
      <button>{data.category}</button>
      <p>{data.description}</p>
    </div>
  );
};

export default ProductById;
