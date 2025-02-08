import { useParams } from 'react-router';

import { AppError, CardFull, Spinner } from '@components';
import { API_URL, ENDPOINT } from '@config';
import useData from '@hooks/useData';
import { CharacterType } from '@types';

const Details = () => {
  const params = useParams();
  const id = params.id;

  const {
    data: character,
    isLoading,
    error,
  } = useData<CharacterType>(`${API_URL}/${ENDPOINT.CHARACTER}/${id}`, true);

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
