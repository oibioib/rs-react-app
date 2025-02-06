import { ReactNode, useContext } from 'react';

import { AppError, CardsList, ErrorButton, Spinner } from '@components';
import { AppContext, AppContextType } from '@context';

type MainSectionProps = {
  children?: ReactNode;
};

const MainSection = ({ children }: MainSectionProps) => {
  const { isLoading, error } = useContext(AppContext) as AppContextType;

  return (
    <main className="flex flex-1 flex-col gap-4">
      <div className="flex-1">
        {isLoading && <Spinner />}
        {!isLoading && children}
        {error && <AppError error={error} />}
        {!error && <CardsList />}
      </div>
      <ErrorButton />
    </main>
  );
};

export default MainSection;
