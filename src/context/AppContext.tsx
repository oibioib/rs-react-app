import { ENDPOINT, ERROR, NO_RESULTS, SEARCH, URL } from '@config';
import { CharacterType } from '@types';
import { Component, createContext } from 'react';

type AppProviderProps = {
  children?: React.ReactNode;
};

type AppProviderState = {
  characters: CharacterType[];
  isLoading: boolean;
  error: string | null;
};

export type AppContextType = AppProviderState & {
  fetchData(value: string): Promise<void>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

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
      const data = await response.json();

      if (response.ok) {
        this.setState({ characters: data.results || [], isLoading: false });
        return;
      }

      if (
        response.status === NO_RESULTS.STATUS &&
        data.error === NO_RESULTS.TEXT
      ) {
        throw new Error(NO_RESULTS.MESSAGE);
      }

      throw new Error(ERROR.FETCH);
    } catch (error) {
      this.setState({
        error: error instanceof Error ? error.message : ERROR.DEFAULT,
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

export default AppContext;
export { AppProvider };
