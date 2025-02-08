import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import Search from './Search';

describe('Search Component', () => {
  it('Saves the entered value to local storage when the search button is clicked', async () => {
    const setSearchValue = vi.fn();
    const value = 'test search value';

    render(<Search value={value} setSearchValue={setSearchValue} />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: 'Search' });

    fireEvent.change(input, { target: { value: 'new search value' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(setSearchValue).toHaveBeenCalledWith('new search value');
    });
  });
});
