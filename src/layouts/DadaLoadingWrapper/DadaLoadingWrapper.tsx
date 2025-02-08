import { ReactNode } from 'react';

import { AppError, Spinner } from '@components';

type DadaLoadingWrapperProps = {
  isLoading: boolean;
  error: string | null;
  children?: ReactNode;
};

const DadaLoadingWrapper = ({
  isLoading,
  error,
  children,
}: DadaLoadingWrapperProps) => {
  return (
    <>
      {isLoading && <Spinner />}
      {error && <AppError error={error} />}
      {!isLoading && !error && children}
    </>
  );
};

export default DadaLoadingWrapper;
