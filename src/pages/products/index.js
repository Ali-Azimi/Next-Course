import Link from 'next/link';
import { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <>
      <h1>ALL PRODUCTS</h1>
      {products.map((item) => {
        return (
          <Link
            href={{
              pathname: '/products/[id]',
              query: { id: item.id },
            }}
          >
            <div className="card">
              <img src={item.image} />
              <h2>{item.title}</h2>
              <span>{item.price}</span>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Products;
