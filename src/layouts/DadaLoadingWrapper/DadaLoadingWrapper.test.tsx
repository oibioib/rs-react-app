import { MemoryRouter } from 'react-router';

import { CHARACTER } from '@__tests__/mocks/character';
import { CardFull, CardsList } from '@components';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import DadaLoadingWrapper from './DadaLoadingWrapper';

describe('DadaLoadingWrapper', () => {
  it('Should display message if no cards are present', () => {
    render(
      <MemoryRouter>
        <DadaLoadingWrapper isLoading={false} error={'There is nothing here'}>
          <CardsList characters={[]} />,
        </DadaLoadingWrapper>
      </MemoryRouter>
    );

    expect(screen.getByText('There is nothing here')).toBeInTheDocument();
  });

  it('Should display loading indicator while fetching data', async () => {
    render(
      <MemoryRouter>
        <DadaLoadingWrapper isLoading={true} error={null}>
          <CardFull {...CHARACTER} />
        </DadaLoadingWrapper>
      </MemoryRouter>
    );

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
});
