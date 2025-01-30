import { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="group relative flex h-16 rounded-sm hover:bg-amber-400">
        <input
          type="text"
          className="h-full w-full flex-1 rounded-sm border-2 border-gray-300 bg-gray-50 p-3 pr-48 text-2xl font-medium text-gray-900 duration-200 group-hover:border-orange-300 focus:border-orange-300 focus:outline-5 focus:outline-orange-200"
          placeholder="Search something"
        />
        <button className="absolute top-1/2 right-0 flex h-[calc(100%-10px)] -translate-x-[5px] -translate-y-1/2 items-center rounded-sm bg-gradient-to-tl from-red-500 to-orange-400 px-12 text-2xl font-medium text-white transition-all duration-300 hover:cursor-pointer hover:bg-gradient-to-br focus:outline-none">
          Search
        </button>
      </div>
    );
  }
}

export default Search;
