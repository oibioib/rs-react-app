import { Component } from 'react';

import { AppContext, AppContextType } from '@context';

import Card from './Card';

class CardsList extends Component {
  static contextType = AppContext;
  declare context: AppContextType;

  render() {
    const { characters } = this.context;

    return (
      <div className="grid grid-cols-1 gap-6 @xs:grid-cols-2 @2xl:grid-cols-4">
        {characters.map((character) => (
          <Card key={character.id} {...character} />
        ))}
      </div>
    );
  }
}

export default CardsList;
