import { Component, FormEvent, createRef } from 'react';

import { Button } from '@components/ui';
import { BUTTON, LOCALSTORAGE } from '@config';
import { AppContext, AppContextType } from '@context';

class Search extends Component {
  static contextType = AppContext;
  declare context: AppContextType;
  private inputRef = createRef<HTMLInputElement>();

  componentDidMount() {
    const searchValue = localStorage.getItem(LOCALSTORAGE.SEARCH) || '';

    if (this.inputRef.current) {
      this.inputRef.current.value = searchValue;
    }

    const { fetchData } = this.context;
    fetchData(searchValue);
  }

  handleSearchClick = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchValue = this.inputRef.current?.value.trim() || '';
    localStorage.setItem(LOCALSTORAGE.SEARCH, searchValue);

    const { fetchData } = this.context;
    await fetchData(searchValue);
  };

  render() {
    return (
      <form
        className="relative flex min-h-14 flex-col gap-4 transition-all duration-300 sm:flex-row"
        onSubmit={this.handleSearchClick}
      >
        <input
          type="text"
          className="h-full w-full flex-1 rounded-sm border-2 border-sky-300 bg-gray-50 p-3 text-2xl font-medium text-gray-900 hover:border-sky-400 focus:border-sky-400 focus:outline-5 focus:outline-sky-100"
          ref={this.inputRef}
        />

        <Button type="submit">{BUTTON.SEARCH}</Button>
      </form>
    );
  }
}

export default Search;
