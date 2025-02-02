import { Logo, Search } from '@components';
import { Component, ReactNode } from 'react';

type HeaderSectionProps = {
  children?: ReactNode;
};

class HeaderSection extends Component<HeaderSectionProps> {
  render() {
    const { children } = this.props;

    return (
      <header>
        <Logo />
        <Search />
        {children}
      </header>
    );
  }
}

export default HeaderSection;
