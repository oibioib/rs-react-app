import { MemoryRouter, Route, Routes } from 'react-router';

import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import BaseLayout from './BaseLayout';

describe('BaseLayout.test', () => {
  it('Render Main page', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<div>Rick and Morty API search</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(
        screen.getByText(/Rick and Morty API search/i)
      ).toBeInTheDocument();
    });
  });
});
