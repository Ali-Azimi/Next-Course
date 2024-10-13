import Layout from '@/components/Layout';
import ProductsLayout from '@/components/productsLayout';
import '@/styles/globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const PAGES_WITH_PRODUCTS_LAYOUT = ['/products', '/comments', '/categories'];

export default function App({ Component, pageProps }) {
  const path = usePathname();

  if (PAGES_WITH_PRODUCTS_LAYOUT.includes(path)) {
    return (
      <>
        <ProductsLayout>
          <Component {...pageProps} />
        </ProductsLayout>
      </>
    );
  }

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
