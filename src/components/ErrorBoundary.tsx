import { Component, ReactNode } from 'react';

type ErrorBoundaryProps = {
  children?: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  message: string;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, message: '' };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, message: error.message };
  }

  render() {
    const { children } = this.props;
    const { hasError, message } = this.state;

    return !hasError ? (
      children
    ) : (
      <div className="flex w-full flex-1 flex-col items-center justify-center gap-4">
        <span>Oops! Something went wrong...</span>
        <div>Error: {message}</div>
      </div>
    );
  }
}

export default ErrorBoundary;
