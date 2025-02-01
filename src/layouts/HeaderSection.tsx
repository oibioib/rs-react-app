import { Logo, Search } from '@components';
import { Component, ReactNode } from 'react';

type HeaderSectionProps = {
  children?: ReactNode;
};

class HeaderSection extends Component<HeaderSectionProps> {
  render() {
    return (
      <header>
        <Logo />
        <Search />
        {this.props.children}
      </header>
    );
  }
}

export default HeaderSection;
