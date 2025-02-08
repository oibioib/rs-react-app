import { useEffect, useMemo, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router';

import { CardsList, ErrorButton, Search } from '@components';
import Pagination from '@components/Pagination';
import { API_URL, ENDPOINT, LOCALSTORAGE, SEARCH } from '@config';
import { useStorage } from '@hooks';
import useData from '@hooks/useData';
import { HeaderSection, MainSection } from '@layouts';
import DadaLoadingWrapper from '@layouts/DadaLoadingWrapper';
import { CharacterType } from '@types';

function MainPage() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [storageValue, setStorageValue] = useStorage(LOCALSTORAGE.SEARCH);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useData<{
    info: { pages: number };
    results: CharacterType[];
  }>(
    `${API_URL}/${ENDPOINT.CHARACTER}/?${SEARCH.NAME}=${searchValue}&page=${page}`,
    !isFirstLoad
  );

  const characters = useMemo(() => data?.results || [], [data]);
  const pages = useMemo(() => data?.info.pages || 1, [data]);

  useEffect(() => {
    if (isFirstLoad) {
      const search = searchParams.get('search');

      if (search) {
        setSearchValue(search);
      } else if (storageValue) {
        setSearchValue(storageValue);
      } else {
        setSearchValue('');
      }

      setIsFirstLoad(false);
    }
  }, [isFirstLoad, searchParams, setSearchValue, storageValue]);

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);

    if (searchValue) {
      newParams.set('search', searchValue);
    }

    if (searchValue === '') {
      newParams.delete('search');
    }

    newParams.set('page', '1');

    setSearchParams(newParams);
  }, [setSearchParams, searchParams, searchValue]);

  useEffect(() => {
    setStorageValue(searchValue);
  }, [setStorageValue, searchValue]);

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', page.toString());
    setSearchParams(newParams);
  }, [page, searchParams, setSearchParams]);

  useEffect(() => {
    const pageParam = searchParams.get('page');

    if (!pageParam) return;

    const page = +pageParam;

    if (typeof page !== 'number' || isNaN(page)) {
      setPage(1);
    } else if (page < 0) {
      setPage(1);
    } else if (page > pages) {
      setPage(pages);
    } else {
      setPage(page);
    }
  }, [pages, searchParams, setPage]);

  return (
    <>
      <div className="gap-full flex flex-row [&:htn-child(1)]:basis-full [&>*]:flex-1">
        <div className="gap-full @container relative flex flex-col">
          <HeaderSection>
            <Search value={searchValue} setSearchValue={setSearchValue} />
          </HeaderSection>
          <MainSection>
            <DadaLoadingWrapper isLoading={isLoading} error={error}>
              <CardsList characters={characters} />
              <Pagination
                currentPage={page}
                totalPages={pages}
                setPage={setPage}
              />
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
