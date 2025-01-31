import { Spinner } from '@components';
import { Component, ReactNode } from 'react';

type MainSectionProps = {
  isLoading: boolean;
  children?: ReactNode;
};

export class MainSection extends Component<MainSectionProps> {
  render() {
    const { isLoading } = this.props;
    return (
      <main className="flex-1">
        {isLoading && <Spinner />}
        {!isLoading && this.props.children}
      </main>
    );
  }
}

export default MainSection;
