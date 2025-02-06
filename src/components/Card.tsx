import { CharacterType } from '@types';

type CardProps = CharacterType;

const Card = ({ id, name, image }: CardProps) => {
  return (
    <div
      key={id}
      className="max-w-sm overflow-hidden rounded-lg bg-white shadow-lg"
    >
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4 text-center">
        <span className="mb-2 text-lg font-bold text-slate-700">{name}</span>
      </div>
    </div>
  );
};

export default Card;
