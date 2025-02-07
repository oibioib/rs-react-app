import { useState } from 'react';

const useStorage = (key: string) => {
  const [value, setValue] = useState(() => {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }

    return '';
  });

  const set = (value: unknown) => {
    const valueToSet = JSON.stringify(value);
    localStorage.setItem(key, valueToSet);
    setValue(value);
  };

  return [value, set];
};

export default useStorage;
