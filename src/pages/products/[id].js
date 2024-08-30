import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ProductById = () => {
  const router = useRouter();

  const [product, setProduct] = useState({});

  useEffect(() => {
    if (router.query.id) {
      getProducts();
    }
  }, [router.query]);

  const getProducts = () => {
    fetch(`https://fakestoreapi.com/products/${router.query.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} />
      <button>{product.category}</button>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductById;
