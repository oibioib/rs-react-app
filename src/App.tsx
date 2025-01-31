import { Component } from 'react';
import { AppError, CardsList, Search } from '@components';
import { BaseLayout, HeaderSection, MainSection } from '@layouts';
import './App.css';
import { CharacterType } from '@types';

type AppProps = Record<string, unknown>;

type AppState = {
  characters: CharacterType[];
  isLoading: boolean;
  error: string | null;
};

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      characters: [],
      isLoading: true,
      error: null,
    };
  }

  fetchData = async (value: string) => {
    this.setState({ isLoading: true });

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

  handleSearch = async (value: string) => {
    this.setState({ error: null });
    await this.fetchData(value);
  };

  render() {
    const { characters, isLoading, error } = this.state;

    return (
      <BaseLayout>
        <HeaderSection>
          <Search onSearchClick={this.handleSearch} />
        </HeaderSection>
        <MainSection isLoading={isLoading}>
          {error && <AppError error={error} />}
          {!error && <CardsList characters={characters} />}
        </MainSection>
      </BaseLayout>
    );
  }
}

export default App;
