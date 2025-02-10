import { MemoryRouter } from 'react-router';

import { CHARACTER } from '@__tests__/mocks/character';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import CardFull from './CardFull';

const mockNavigate = vi.fn();

vi.mock(import('react-router'), async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useNavigate: vi.fn(() => mockNavigate),
  };
});

describe('CardFull', () => {
  it('Should display detailed card data correctly', async () => {
    render(
      <MemoryRouter>
        <CardFull {...CHARACTER} />
      </MemoryRouter>
    );
    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    expect(screen.getByAltText('Rick Sanchez')).toBeInTheDocument();
    expect(screen.getByText(/Status:/)).toHaveTextContent('Status: Alive');
    expect(screen.getByText(/Gender:/)).toHaveTextContent('Gender: Male');
    expect(screen.getByText(/Species:/)).toHaveTextContent('Species: Human');
    expect(screen.getByText(/Origin:/)).toHaveTextContent('Origin: Earth');
  });

  it('Should close the detailed card component when the close button is clicked', async () => {
    render(
      <MemoryRouter>
        <CardFull {...CHARACTER} />
      </MemoryRouter>
    );

    const closeButton = screen.getByRole('button');
    userEvent.click(closeButton);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith({
        pathname: '/',
        search: '',
      });
    });
  });
});
