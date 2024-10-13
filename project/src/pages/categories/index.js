import { useEffect, useState } from 'react';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('HI');
    }, 1000);

    // clean up function
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    console.log({ abortController });
    if (selectedCategory) {
      fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`, {
        signal: abortController.signal,
      })
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        });
    }

    return () => {
      abortController.abort('clean up function');
    };
  }, [selectedCategory]);

  const handleCategoryClicked = (category) => {
    setSelectedCategory(category);
  };

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <>
      <h1>CATEGORIES</h1>
      <section className="row">
        {categories.map((category) => {
          return (
            <div
              className="category"
              key={category}
              onClick={() => handleCategoryClicked(category)}
            >
              {category}
            </div>
          );
        })}
      </section>

      <h2>Selected Cateory: {selectedCategory}</h2>
      <section className="row">
        {!!products.length &&
          products.map((product) => {
            return (
              <div className="card" key={product.id}>
                <img src={product.image} width={200} />
                <h3>{product.title}</h3>
                <p>price: {priceSeparator(product.price)}</p>
              </div>
            );
          })}
      </section>
    </>
  );
};

export default CategoriesPage;
