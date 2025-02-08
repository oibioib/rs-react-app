import { MouseEvent } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router';

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

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      navigate({
        pathname: '/',
        search: searchParams.toString(),
      });
    }
  };

  if (!id) {
    return null;
  }

  return (
    <div className="relative" onClick={handleClick}>
      <div className="sticky top-4 w-full">
        <DadaLoadingWrapper isLoading={isLoading} error={error}>
          {!isLoading && !error && character && <CardFull {...character} />}
        </DadaLoadingWrapper>
      </div>
    </div>
  );
};
export default Details;
