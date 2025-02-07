import { useNavigate, useSearchParams } from 'react-router';

import { CharacterType } from '@types';

import CloseButton from './ui/CloseButton';

type CardProps = CharacterType;

const CardFull = ({
  id,
  name,
  image,
  origin: { name: from },
  status,
  gender,
  species,
}: CardProps) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <div
      key={id}
      className="gap-full flex flex-col overflow-hidden rounded-lg bg-white p-4 shadow-xl"
    >
      <div
        className="absolute top-1 right-1 flex h-10 w-10 justify-end"
        onClick={() =>
          navigate({
            pathname: '/',
            search: searchParams.toString(),
          })
        }
      >
        <CloseButton />
      </div>
      <div className="px-6 text-center">
        <span className="mb-2 text-2xl font-bold text-slate-700">{name}</span>
      </div>
      <img className="w-full rounded-lg" src={image} alt={name} />
      <ul className="flex flex-col gap-2">
        {[
          { key: 0, title: 'Status', value: status },
          { key: 1, title: 'Gender', value: gender },
          { key: 2, title: 'Species', value: species },
          { key: 3, title: 'Origin', value: from },
        ].map((data) => {
          const { key, title, value } = data;

          return (
            <li key={key}>
              {title}: <span className="font-bold">{value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardFull;
