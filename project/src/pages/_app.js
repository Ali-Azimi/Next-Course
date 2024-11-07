import Layout from '@/components/Layout';
import ProductsLayout from '@/components/productsLayout';
import '@/styles/globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SWRConfig } from 'swr';

const PAGES_WITH_PRODUCTS_LAYOUT = ['/products', '/comments', '/categories'];

const fetcher = async (url) => {
  try {
    const response = await fetch(`http://localhost:3000/api/${url}`);
    const data = response.json();
    return data;
  } catch (error) {
    return error;
  }
};

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
      <SWRConfig value={{ fetcher, refreshInterval: 2000, revalidateOnFocus: false, revalid }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  );
}
