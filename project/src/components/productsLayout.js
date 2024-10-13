import Link from 'next/link';

const ProductsLayout = ({ children }) => {
  return (
    <>
      <header className="product-header">
        <Link href="/">HOME</Link>
        <Link href="">Jeweleary</Link>
        <Link href="">Clothing</Link>
        <Link href="">Sports</Link>
        <Link href="">Women</Link>
      </header>

      {children}

      <footer>footer sample</footer>
    </>
  );
};

export default ProductsLayout;
