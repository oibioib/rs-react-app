import { AppError, CardsList, ErrorButton, Spinner } from '@components';
import { AppContext, AppContextType } from '@context';
import { Component, ReactNode } from 'react';

type MainSectionProps = {
  children?: ReactNode;
};

export class MainSection extends Component<MainSectionProps> {
  static contextType = AppContext;
  declare context: AppContextType;

  render() {
    const { isLoading, error } = this.context;

    return (
      <main className="flex flex-1 flex-col gap-4">
        <div className="flex-1">
          {isLoading && <Spinner />}
          {!isLoading && this.props.children}
          {error && <AppError error={error} />}
          {!error && <CardsList />}
        </div>
        <ErrorButton />
      </main>
    );
  }
}

export default MainSection;
