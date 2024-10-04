import { useState } from 'react';

const useLoading = (boolean: boolean) => {
  const [isLoading, setIsLoading] = useState(boolean);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return { isLoading, startLoading, stopLoading };
};

export default useLoading;
