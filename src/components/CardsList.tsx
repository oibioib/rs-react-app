import { CharacterType } from '@types';
import { Component } from 'react';
import Card from './Card';

type CardsListProps = {
  characters: CharacterType[];
};

class CardsList extends Component<CardsListProps> {
  render() {
    return (
      <div className="grid grid-cols-1 gap-6 @xs:grid-cols-2 @2xl:grid-cols-4">
        {this.props.characters.map((character) => (
          <Card key={character.id} {...character} />
        ))}
      </div>
    );
  }
}

export default CardsList;
