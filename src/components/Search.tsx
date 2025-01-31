import { Component, createRef, FormEvent } from 'react';
type SearchProps = {
  onSearchClick: (searchValue: string) => void;
};

class Search extends Component<SearchProps> {
  private inputRef = createRef<HTMLInputElement>();

  componentDidMount() {
    const searchValue = localStorage.getItem('search') || '';

    if (this.inputRef.current) {
      this.inputRef.current.value = searchValue;
    }

    this.props.onSearchClick(searchValue);
  }

  handleSearchClick = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchValue = this.inputRef.current?.value.trim() || '';
    this.props.onSearchClick(searchValue);
    localStorage.setItem('search', searchValue);
  };

  render() {
    return (
      <form
        className="relative flex h-14 gap-4 transition-all duration-300"
        onSubmit={this.handleSearchClick}
      >
        <input
          type="text"
          className="h-full w-full flex-1 rounded-sm border-2 border-sky-300 bg-gray-50 p-3 text-2xl font-medium text-gray-900 hover:border-sky-400 focus:border-sky-400 focus:outline-5 focus:outline-sky-100"
          ref={this.inputRef}
        />
        <button
          type="submit"
          className="flex items-center rounded-sm bg-gradient-to-tl from-sky-600 to-sky-400 px-12 text-2xl font-medium text-white transition-all duration-300 hover:cursor-pointer hover:bg-gradient-to-br focus:outline-none"
        >
          Search
        </button>
      </form>
    );
  }
}

export default Search;
