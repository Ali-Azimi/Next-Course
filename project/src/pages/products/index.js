import ProductsLayout from '@/components/productsLayout';
import Link from 'next/link';

const Products = ({ products }) => {
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

Products.getLayout = function getLayout({ page }) {
  return <ProductsLayout>{page}</ProductsLayout>;
};

export async function getServerSideProps() {
  const response = await fetch(`https://fakestoreapi.com/products`);
  const data = await response.json();
  return {
    props: { products: data },
  };
}

export default Products;
