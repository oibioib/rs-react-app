import { useCallback, useState } from 'react';

import { CardsList, ErrorBoundary, Search } from '@components';
import { ENDPOINT, ERROR, SEARCH, URL } from '@config';
import { BaseLayout, HeaderSection, MainSection } from '@layouts';
import { CharacterType } from '@types';
import { FetchError, getData } from '@utils';

import './App.css';

const App = () => {
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
    <ErrorBoundary className="h-screen w-full">
      <BaseLayout>
        <HeaderSection>
          <Search fetchData={fetchData} />
        </HeaderSection>
        <MainSection isLoading={isLoading} error={error}>
          <CardsList characters={characters} />
        </MainSection>
      </BaseLayout>
    </ErrorBoundary>
  );
};

export default App;
