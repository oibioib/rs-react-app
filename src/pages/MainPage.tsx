import { useMemo, useState } from 'react';
import { Outlet } from 'react-router';

import { CardsList, ErrorButton, Search } from '@components';
import { API_URL, ENDPOINT, SEARCH } from '@config';
import useData from '@hooks/useData';
import { HeaderSection, MainSection } from '@layouts';
import DadaLoadingWrapper from '@layouts/DadaLoadingWrapper';
import { CharacterType } from '@types';

function MainPage() {
  const [searchValue, setSearchValue] = useState('');

  const { data, isLoading, error } = useData<{ results: CharacterType[] }>(
    `${API_URL}/${ENDPOINT.CHARACTER}/?${SEARCH.NAME}=${searchValue}`
  );

  const characters = useMemo(() => data?.results || [], [data]);

  return (
    <>
      <div className="gap-full flex flex-row [&:htn-child(1)]:basis-full [&>*]:flex-1">
        <div className="gap-full @container relative flex flex-col">
          <HeaderSection>
            <Search setSearchValue={setSearchValue} />
          </HeaderSection>
          <MainSection>
            <DadaLoadingWrapper isLoading={isLoading} error={error}>
              <CardsList characters={characters} />
            </DadaLoadingWrapper>
          </MainSection>
        </div>
        <Outlet />
      </div>
      <ErrorButton />
    </>
  );
}
export default MainPage;
