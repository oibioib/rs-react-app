import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ErrorPage from './ErrorPage';

describe('ErrorPage', () => {
  it('should render the error page with correct text', () => {
    render(<ErrorPage />);
    const headingElement = screen.getByText('404');
    const textElement = screen.getByText('Page not found');
    expect(headingElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });
});
