import { useParams } from 'react-router';

import { CardFull } from '@components';
import { API_URL, ENDPOINT } from '@config';
import useData from '@hooks/useData';
import { DadaLoadingWrapper } from '@layouts';
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
        <DadaLoadingWrapper isLoading={isLoading} error={error}>
          {!isLoading && !error && character && <CardFull {...character} />}
        </DadaLoadingWrapper>
      </div>
    </div>
  );
};
export default Details;
