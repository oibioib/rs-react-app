import { Component } from 'react';

type AppErrorProps = {
  error: string;
};

class AppError extends Component<AppErrorProps> {
  render() {
    return <div>{this.props.error}</div>;
  }
}

export default AppError;
