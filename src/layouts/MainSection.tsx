import { ReactNode } from 'react';

import { AppError, ErrorButton, Spinner } from '@components';

type MainSectionProps = {
  isLoading: boolean;
  error: string | null;
  children?: ReactNode;
};

const MainSection = ({ isLoading, error, children }: MainSectionProps) => {
  return (
    <main className="flex flex-1 flex-col gap-4">
      <div className="flex-1">
        {isLoading && <Spinner />}
        {error && <AppError error={error} />}
        {children}
      </div>
      <ErrorButton />
    </main>
  );
};

export default MainSection;
