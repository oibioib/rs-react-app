import { Component, ReactNode } from 'react';

import { Logo, Search } from '@components';

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
