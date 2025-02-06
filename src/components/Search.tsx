import { FormEvent, useEffect, useRef } from 'react';

import { Button, InputWithRef } from '@components/ui';
import { BUTTON, LOCALSTORAGE } from '@config';

type SearchProps = {
  fetchData: (value: string) => Promise<void>;
};

const Search = ({ fetchData }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const searchValue = localStorage.getItem(LOCALSTORAGE.SEARCH) || '';
    if (inputRef.current) {
      inputRef.current.value = searchValue;
    }
    fetchData(searchValue);
  }, [fetchData]);

  const handleSearchClick = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchValue = inputRef.current?.value.trim() || '';
    localStorage.setItem(LOCALSTORAGE.SEARCH, searchValue);
    await fetchData(searchValue);
  };

  return (
    <form
      className="relative flex min-h-14 flex-col gap-4 transition-all duration-300 sm:flex-row"
      onSubmit={handleSearchClick}
    >
      <InputWithRef ref={inputRef} />
      <Button type="submit">{BUTTON.SEARCH}</Button>
    </form>
  );
};

export default Search;
