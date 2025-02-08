import { useNavigate, useSearchParams } from 'react-router';

import { CharacterType } from '@types';

type CardProps = CharacterType;

const Card = ({ id, name, image }: CardProps) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <div
      key={id}
      className="max-w-sm overflow-hidden rounded-lg bg-white shadow-lg hover:cursor-pointer"
      onClick={() =>
        navigate({
          pathname: `/details/${id}/`,
          search: searchParams.toString(),
        })
      }
    >
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4 text-center">
        <span className="mb-2 text-lg font-bold text-slate-700">{name}</span>
      </div>
    </div>
  );
};

export default Card;
