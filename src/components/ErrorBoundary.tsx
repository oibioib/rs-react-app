import { ERROR, ERROR_BOUNDARY } from '@config';
import { Logger } from '@utils';
import { Component, ReactNode } from 'react';

type ErrorBoundaryProps = {
  children?: ReactNode;
  className?: string;
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

  componentDidCatch(error: Error) {
    Logger.warn(`${ERROR.ERROR_BOUNDARY}: ${error.message}`);
  }

  render() {
    const { children, className } = this.props;
    const { hasError, message } = this.state;

    return !hasError ? (
      children
    ) : (
      <div className={`flex flex-1 items-center justify-center ${className}`}>
        <div className="flex flex-col items-center justify-center gap-4 rounded-sm border-3 border-amber-400 bg-amber-50 p-10">
          <p className="text-2xl font-bold text-slate-700">
            {ERROR_BOUNDARY.HEADING}
          </p>
          <p className="text-slate-700">{message}</p>
          <p className="text-slate-700">{ERROR_BOUNDARY.MESSAGE}</p>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
