import { MemoryRouter, Route, Routes } from 'react-router';

import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import Details from './Details';

vi.mock('@hooks', async () => {
  const actual = await vi.importActual<typeof import('@hooks')>('@hooks');
  return {
    ...actual,
    useData: vi.fn(),
  };
});

describe('Details', () => {
  const useDataMock = vi.fn();

  it('Should render loading state', () => {
    useDataMock.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });

    render(
      <MemoryRouter initialEntries={['/details/1']}>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
