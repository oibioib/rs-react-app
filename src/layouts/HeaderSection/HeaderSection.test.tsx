import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import HeaderSection from './HeaderSection';

vi.mock('@components', () => ({
  Logo: () => <div>Logo Mock</div>,
}));

describe('HeaderSection', () => {
  it('Should render the Logo component', () => {
    render(<HeaderSection />);

    expect(screen.getByText('Logo Mock')).toBeInTheDocument();
  });

  it('Should render the children passed to it', () => {
    render(
      <HeaderSection>
        <div>Child Component</div>
      </HeaderSection>
    );

    expect(screen.getByText('Logo Mock')).toBeInTheDocument();
    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });
});
