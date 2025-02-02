import { Component } from 'react';

type AppErrorProps = {
  error: string;
};

class AppError extends Component<AppErrorProps> {
  render() {
    const { error } = this.props;

    return <div>{error}</div>;
  }
}

export default AppError;
