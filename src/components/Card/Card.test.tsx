import { MemoryRouter } from 'react-router';

import { CHARACTER } from '@__tests__/mocks/character';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import Card from './Card';

const mockNavigate = vi.fn();

vi.mock(import('react-router'), async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useNavigate: vi.fn(() => mockNavigate),
  };
});

describe('Card', () => {
  it('Should renders relevant data', () => {
    render(
      <MemoryRouter>
        <Card {...CHARACTER} />,
      </MemoryRouter>
    );

    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    expect(screen.getByAltText('Rick Sanchez')).toBeInTheDocument();
  });

  it('Should open the detailed card component when a card is clicked', async () => {
    render(
      <MemoryRouter>
        <Card {...CHARACTER} />
      </MemoryRouter>
    );

    const card = screen.getByTestId('card');
    await userEvent.click(card);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith({
        pathname: `/details/1/`,
        search: '',
      });
    });
  });
});
