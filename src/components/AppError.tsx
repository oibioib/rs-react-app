import { ReactNode } from 'react';

type AppErrorProps = {
  error: string;
};

const AppError = ({ error }: AppErrorProps): ReactNode => {
  return <div>{error}</div>;
};

export default AppError;
