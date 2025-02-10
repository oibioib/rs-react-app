import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import Logo from './Logo';

vi.mock('@config', () => ({
  LOGO: {
    TEXT: 'Test Logo',
  },
}));

describe('Logo', () => {
  it('Should render the logo text', () => {
    render(<Logo />);
    const logoElement = screen.getByText('Test Logo');
    expect(logoElement).toBeInTheDocument();
  });
});
