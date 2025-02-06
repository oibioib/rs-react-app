import { ReactNode } from 'react';

import { Logo, Search } from '@components';

type HeaderSectionProps = {
  children?: ReactNode;
};

const HeaderSection = ({ children }: HeaderSectionProps) => {
  return (
    <header>
      <Logo />
      <Search />
      {children}
    </header>
  );
};

export default HeaderSection;
