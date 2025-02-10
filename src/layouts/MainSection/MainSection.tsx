import { ReactNode } from 'react';

type MainSectionProps = {
  children?: ReactNode;
};

const MainSection = ({ children }: MainSectionProps) => {
  return <main className="gap-full flex flex-1 flex-col">{children}</main>;
};

export default MainSection;
