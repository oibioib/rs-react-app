import { Component } from 'react';
import { Search } from '@components';
import { MainLayout } from '@layouts';
import './App.css';

type AppProps = Record<string, unknown>;

type PokemonType = {
  name: string;
  url: string;
};

type AppState = {
  pokemons: PokemonType[];
  isLoading: boolean;
  error: string | null;
};

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      pokemons: [],
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((response) => response.json())
      .then((data) =>
        this.setState({ pokemons: data.results, isLoading: false })
      )
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  render() {
    const { pokemons, isLoading, error } = this.state;

    if (isLoading) return <p>Loading...</p>;

    if (error) return <p>Error: something went wrong</p>;

    return (
      <MainLayout>
        <Search />
        {pokemons.map((pokemon) => (
          <p key={pokemon.name}>{pokemon.name}</p>
        ))}
      </MainLayout>
    );
  }
}

export default App;
