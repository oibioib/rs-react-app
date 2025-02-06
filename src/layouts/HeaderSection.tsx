import { ReactNode } from 'react';

import { Logo } from '@components';

type HeaderSectionProps = {
  children?: ReactNode;
};

const HeaderSection = ({ children }: HeaderSectionProps) => {
  return (
    <header>
      <Logo />
      {children}
    </header>
  );
};

export default HeaderSection;
