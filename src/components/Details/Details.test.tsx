import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router';

import { useData } from '@hooks';
import { render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import Details from './Details';

vi.mock('@hooks', async () => {
  const actual = await vi.importActual<typeof import('@hooks')>('@hooks');
  return {
    ...actual,
    useData: vi.fn(),
  };
});

vi.mock('@layouts', () => ({
  DadaLoadingWrapper: ({
    isLoading,
    error,
    children,
  }: {
    isLoading: boolean;
    error: string | null;
    children: React.ReactNode;
  }) => (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {!isLoading && !error && children}
    </div>
  ),
}));

describe('Details', () => {
  const useDataMock = vi.fn();

  beforeEach(() => {
    (useData as vi.Mock).mockImplementation(() => useDataMock);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

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
