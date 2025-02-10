import { ERROR, ERROR_BOUNDARY } from '@config';
import { render, screen } from '@testing-library/react';
import { Logger } from '@utils';
import { afterEach, describe, expect, it, vi } from 'vitest';

import ErrorBoundary from './ErrorBoundary';

vi.mock('@utils', () => ({
  Logger: {
    warn: vi.fn(),
  },
}));

describe('ErrorBoundary Component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('Should render children when there is no error', () => {
    const ChildComponent = () => <div>Child Component</div>;

    render(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });

  it('Should catch errors and display the error boundary UI', () => {
    const ThrowErrorComponent = () => {
      throw new Error('Test Error');
    };

    vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ThrowErrorComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText(ERROR_BOUNDARY.HEADING)).toBeInTheDocument();
    expect(screen.getByText('Test Error')).toBeInTheDocument();
    expect(screen.getByText(ERROR_BOUNDARY.MESSAGE)).toBeInTheDocument();
  });

  it('Should log the error message when an error is caught', () => {
    const ThrowErrorComponent = () => {
      throw new Error('Test Error');
    };

    render(
      <ErrorBoundary>
        <ThrowErrorComponent />
      </ErrorBoundary>
    );

    expect(Logger.warn).toHaveBeenCalledWith(
      `${ERROR.ERROR_BOUNDARY}: Test Error`
    );
  });
});
