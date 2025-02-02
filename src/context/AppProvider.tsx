import { Component } from 'react';

import { ENDPOINT, ERROR, SEARCH, URL } from '@config';
import { CharacterType } from '@types';
import { FetchError, getData } from '@utils';

import AppContext from './AppContext';

type AppProviderProps = {
  children?: React.ReactNode;
};

export type AppProviderState = {
  characters: CharacterType[];
  isLoading: boolean;
  error: string | null;
};

class AppProvider extends Component<AppProviderProps, AppProviderState> {
  constructor(props: AppProviderProps) {
    super(props);

    this.state = {
      characters: [],
      isLoading: false,
      error: null,
    };
  }

  fetchData = async (value: string) => {
    this.setState({ isLoading: true, error: null, characters: [] });

    let fetchUrl = `${URL}/${ENDPOINT.CHARACTER}/`;

    if (value) {
      fetchUrl += `?${SEARCH.NAME}=${value}`;
    }

    try {
      const response = await fetch(fetchUrl);

      const data = await getData(response);

      if (response.ok) {
        this.setState({ characters: data.results || [], isLoading: false });
        return;
      }

      throw new FetchError(
        data?.error || `${ERROR.FETCH} (Status: ${response.status})`
      );
    } catch (error) {
      this.setState({
        error: error instanceof FetchError ? error.message : ERROR.DEFAULT,
        isLoading: false,
      });
    }
  };

  render() {
    const { children } = this.props;
    const { characters, isLoading, error } = this.state;
    const { fetchData } = this;

    return (
      <AppContext.Provider
        value={{
          characters,
          isLoading,
          error,
          fetchData,
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
