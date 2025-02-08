import { FormEvent, useEffect, useRef } from 'react';

import { Button, InputWithRef } from '@components/ui';
import { BUTTON } from '@config';

type SearchProps = {
  value: string;
  setSearchValue: (value: string) => void;
};

const Search = ({ value, setSearchValue }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = value;
    }

    setSearchValue(value);
  }, [value, setSearchValue]);

  const handleSearchClick = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchValue(inputRef.current?.value.trim() || '');
  };

  return (
    <form
      className="flex min-h-14 flex-col gap-4 transition-all duration-300 sm:flex-row"
      onSubmit={handleSearchClick}
    >
      <InputWithRef ref={inputRef} />
      <Button type="submit">{BUTTON.SEARCH}</Button>
    </form>
  );
};

export default Search;
