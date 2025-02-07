import { FormEvent, useEffect, useRef } from 'react';

import { Button, InputWithRef } from '@components/ui';
import { BUTTON, LOCALSTORAGE } from '@config';
import { useStorage } from '@hooks';

type SearchProps = {
  setSearchValue: (value: string) => void;
};

const Search = ({ setSearchValue }: SearchProps) => {
  const [value, setValue] = useStorage(LOCALSTORAGE.SEARCH);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = value;
    }

    setSearchValue(value);
  }, [value, setSearchValue]);

  const handleSearchClick = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValue(inputRef.current?.value.trim() || '');
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
