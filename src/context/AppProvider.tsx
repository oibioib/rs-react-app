import { ReactNode, useCallback, useState } from 'react';

import { ENDPOINT, ERROR, SEARCH, URL } from '@config';
import { CharacterType } from '@types';
import { FetchError, getData } from '@utils';

import AppContext from './AppContext';

type AppProviderProps = {
  children?: ReactNode;
};

export type AppProviderState = {
  characters: CharacterType[];
  isLoading: boolean;
  error: string | null;
  fetchData: (value: string) => Promise<void>;
};

const AppProvider = ({ children }: AppProviderProps) => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (value: string) => {
    setIsLoading(true);
    setError(null);
    setCharacters([]);

    let fetchUrl = `${URL}/${ENDPOINT.CHARACTER}/`;

    if (value) {
      fetchUrl += `?${SEARCH.NAME}=${value}`;
    }

    try {
      const response = await fetch(fetchUrl);

      const data = await getData(response);

      if (response.ok) {
        setCharacters(data.results || []);
        setIsLoading(false);
        return;
      }

      throw new FetchError(
        data?.error || `${ERROR.FETCH} (Status: ${response.status})`
      );
    } catch (error) {
      setError(error instanceof FetchError ? error.message : ERROR.DEFAULT);
      setIsLoading(false);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        characters,
        isLoading,
        error,
        fetchData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
