import { Component, FormEvent, createRef } from 'react';

import { Button, InputWithRef } from '@components/ui';
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
        <InputWithRef ref={this.inputRef} />
        <Button type="submit">{BUTTON.SEARCH}</Button>
      </form>
    );
  }
}

export default Search;
