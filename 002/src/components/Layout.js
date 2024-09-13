import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Link href="/">HOME</Link>
        <Link href="/about">About US</Link>
        <Link href="/products">Products</Link>
      </header>

      {children}

      <footer>footer sample</footer>
    </>
  );
};

export default Layout;
