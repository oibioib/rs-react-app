import { CharacterType } from '@types';

import Card from './Card';

type CardsListProps = {
  characters: CharacterType[];
};

const CardsList = ({ characters }: CardsListProps) => {
  return (
    <div className="gap-full grid grid-cols-1 @xs:grid-cols-2 @2xl:grid-cols-4">
      {characters.map((character) => (
        <Card key={character.id} {...character} />
      ))}
    </div>
  );
};

export default CardsList;
