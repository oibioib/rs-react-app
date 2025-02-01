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

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${value}`
      );

      const data = await response.json();

      if (response.ok) {
        this.setState({ characters: data.results || [], isLoading: false });

        return;
      }

      if (response.status === 404 && data.error === 'There is nothing here') {
        this.setState({ error: 'Nothing found', isLoading: false });
        return;
      }

      throw new Error('An error has occurred');
    } catch (error) {
      this.setState({
        error: error instanceof Error ? error.message : 'Something went wrong',
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
