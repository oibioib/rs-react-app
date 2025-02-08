import { Card } from '@components';
import { CharacterType } from '@types';

type CardsListProps = {
  characters: CharacterType[];
};

const CardsList = ({ characters }: CardsListProps) => {
  return (
    <div
      className="gap-full grid grid-cols-1 @xs:grid-cols-2 @2xl:grid-cols-4"
      data-testid="card-list"
    >
      {characters.length &&
        characters.map((character) => (
          <Card key={character.id} {...character} />
        ))}
    </div>
  );
};

export default CardsList;
