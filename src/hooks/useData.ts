import { useEffect, useState } from 'react';

import { ERROR } from '@config';
import { FetchError, getData } from '@utils';

const useData = <T>(query: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(query);

        const data = await getData(response);

        if (response.ok) {
          setIsLoading(false);
          setData(data || null);
          return;
        }

        throw new FetchError(
          data?.error || `${ERROR.FETCH} (Status: ${response.status})`
        );
      } catch (error) {
        setIsLoading(false);
        setError(error instanceof FetchError ? error.message : ERROR.DEFAULT);
      }
    })();
  }, [query]);

  return { data, isLoading, error };
};
export default useData;
