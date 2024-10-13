import { useEffect, useState } from 'react';

const useHarchi = (intial) => {
  const [a, setA] = useState(intial);
  useEffect();

  const handleClick = () => {
    setA((prev) => prev + 1);
  };

  return {
    handleClick,
    a,
    setA,
  };
};

export default useHarchi;
