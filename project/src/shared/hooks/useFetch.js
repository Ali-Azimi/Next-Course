import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch(url);
      const apiData = await response.json();
      setData(apiData);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (url) {
      getData();
    }
  }, [url]);

  return {
    isLoading,
    data,
    error,
  };
};

export default useFetch;
