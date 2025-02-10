import { MemoryRouter } from 'react-router';

import { CHARACTERS } from '@__tests__/mocks/characters';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import CardsList from './CardsList';

describe('CardsList', () => {
  it('Should renders the specified number of cards', () => {
    render(
      <MemoryRouter>
        <CardsList characters={CHARACTERS} />,
      </MemoryRouter>
    );

    expect(screen.getAllByTestId('card')).toHaveLength(CHARACTERS.length);
  });
});
