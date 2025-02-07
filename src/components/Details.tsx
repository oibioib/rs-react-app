import { useParams } from 'react-router';

import { API_URL, ENDPOINT } from '@config';
import useData from '@hooks/useData';
import { CharacterType } from '@types';

import AppError from './AppError';
import CardFull from './CardFull';
import Spinner from './Spinner';

const Details = () => {
  const params = useParams();
  const id = params.id;

  const {
    data: character,
    isLoading,
    error,
  } = useData<CharacterType>(`${API_URL}/${ENDPOINT.CHARACTER}/${id}`);

  if (!id) {
    return null;
  }

  return (
    <div className="relative">
      <div className="sticky top-4 w-full">
        {isLoading && <Spinner />}
        {error && <AppError error={error} />}
        {!isLoading && !error && character && <CardFull {...character} />}
      </div>
    </div>
  );
};
export default Details;
